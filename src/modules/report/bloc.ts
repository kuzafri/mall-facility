import { reportApi } from "./api";
import { Report } from "./model";

export const reportFactory = () => {
  const api = reportApi;

  const createReport = async (data: Report): Promise<any> => {
    data = { ...data, created_at: new Date().toString() };
    return await api.create(data);
  };

  const getReports = async (): Promise<any> => {
    const result = await api.all();

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
