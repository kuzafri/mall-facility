import { userAtom, userFactory, reportTypeFactory, shopFactory } from "modules";
import { getRecoil } from "recoil-nexus";
import { reportApi } from "./api";
import { Report } from "modules";

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

    data = {
      ...data,
      user_id: responseUser[0].id,
      user: responseUser[0],
      shop,
      report_type,
      status: "Pending",
    };
    return await api.create(data);
  };

  const getReports = async (query?: string): Promise<any> => {
    const result = await api.all(query);

    const data: any = [];
    result?.forEach((doc) => {
      const tempData = { id: doc.id, ...doc.data() };
      data.push(tempData);
    });

    return data;
  };

  const getReport = async (id: string): Promise<any> => {
    return await api.first(id);
  };

  const updateReport = async (id: string, data: Report): Promise<any> => {
    return await api.update(id, data);
  };

  return {
    createReport,
    getReports,
    getReport,
    updateReport,
  };
};
