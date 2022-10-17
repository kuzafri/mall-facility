import { userAtom, userFactory } from "modules/user";
import { getRecoil } from "recoil-nexus";
import { reportApi } from "./api";
import { Report } from "modules";

export const reportFactory = () => {
  const api = reportApi;

  const createReport = async (data: Report): Promise<any> => {
    const user = getRecoil(userAtom);
    const responseUser = await userFactory().getUserByToken(user.token);

    data = { ...data, user_id: responseUser[0].id };
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
