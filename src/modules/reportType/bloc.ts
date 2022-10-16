import { reportTypeApi } from "./api";
import { ReportType } from "./model";

export const reportTypeFactory = () => {
  const api = reportTypeApi;

  const createReportType = async (data: ReportType): Promise<any> => {
    return await api.create(data);
  };

  const getReportTypes = async (): Promise<any> => {
    const result = await api.all();

    const data: any = [];
    result?.forEach((doc) => {
      const tempData = { id: doc.id, ...doc.data() };
      data.push(tempData);
    });

    return data;
  };
  const getReportType = async (id: string): Promise<any> => {
    return await api.first(id);
  };

  const updateReportType = async (
    id: string,
    data: ReportType
  ): Promise<any> => {
    return await api.update(id, data);
  };

  return {
    createReportType,
    getReportTypes,
    getReportType,
    updateReportType,
  };
};
