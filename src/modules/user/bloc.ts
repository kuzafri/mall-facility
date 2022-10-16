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

  const updateUser = async (id: string, data: User): Promise<any> => {
    return await api.update(id, data);
  };

  return {
    createUser,
    getUser,
    updateUser,
  };
};
