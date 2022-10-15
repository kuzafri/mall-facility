import { userApi } from "./api";
import { User } from "./model";

export const userFactory = () => {
  const api = userApi;

  const createUser = async (data: User): Promise<any> => {
    return await api.create(data);
  };

  const getUser = async (id: string): Promise<any> => {
    return await api.first(id);
  };

  return {
    createUser,
    getUser,
  };
};
