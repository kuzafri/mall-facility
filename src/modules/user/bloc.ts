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

  const getUserByToken = async (token: string): Promise<User[]> => {
    const result = await api.firstByToken(token);

    const data: any = [];

    result?.forEach((doc) => {
      const tempData = { id: doc.id, ...doc.data() };
      data.push(tempData);
    });

    return data;
  };

  const updateUser = async (id: string, data: User): Promise<any> => {
    return await api.update(id, data);
  };

  return {
    createUser,
    getUser,
    updateUser,
    getUserByToken,
  };
};
