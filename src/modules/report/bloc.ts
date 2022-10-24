import {
  userAtom,
  userFactory,
  reportTypeFactory,
  shopFactory,
  Report,
} from "modules";
import { getRecoil } from "recoil-nexus";
import { reportApi } from "./api";
import { uploadFile, imageRef } from "helpers";
import { getDownloadURL } from "firebase/storage";

export const reportFactory = () => {
  const api = reportApi;

  const createReport = async (data: Report): Promise<any> => {
    const user = getRecoil(userAtom);
    const responseUser = await userFactory().getUserByToken(user.token);
    const report_type = await reportTypeFactory().getReportType(
      data.report_type_id
    );

    let shop;
    if (data.shop_id) {
      shop = await shopFactory().getShop(data.shop_id);
    }

    data.complaint_image.forEach((image: any) => {
      uploadFile(image);
    });

    data = {
      ...data,
      user_id: responseUser[0].id,
      user: responseUser[0],
      shop,
      report_type,
      status: "Pending",
      complaint_image: data.complaint_image.map((image: any) => image.filepath),
    };

    return await api.create(data);
  };

  const getReports = async (query?: string): Promise<Report[]> => {
    const result = await api.all(query);

    const data: any = [];
    result?.forEach((doc) => {
      const tempData = { id: doc.id, ...doc.data() } as Report;

      data.push(tempData);
    });

    return data;
  };

  const getReport = async (id: string): Promise<any> => {
    const res = (await api.first(id)) as Report;

    const data = {
      ...res,
      complaint_image: await Promise.all(
        res.complaint_image.map(
          async (image: string) => await getDownloadURL(imageRef(image))
        )
      ),
    };

    return data;
  };

  const updateReport = async (id: string, data: any): Promise<any> => {
    return await api.update(id, data);
  };

  return {
    createReport,
    getReports,
    getReport,
    updateReport,
  };
};
