import { userAtom, userFactory } from "modules/user";
import { getRecoil } from "recoil-nexus";
import { shopApi } from "./api";
import { Shop } from "modules";

export const shopFactory = () => {
  const api = shopApi;

  const createShop = async (data: Shop): Promise<any> => {
    const user = getRecoil(userAtom);
    const responseUser = await userFactory().getUserByToken(user.token);

    data = { ...data, owner: responseUser[0].id };
    return await api.create(data);
  };

  const getShops = async (query?: string): Promise<Shop[]> => {
    const result = await api.all(query);

    const data: any = [];
    result?.forEach((doc) => {
      const tempData = { id: doc.id, ...doc.data() };
      data.push(tempData);
    });

    return data;
  };

  const getShop = async (id: string): Promise<any> => {
    return await api.first(id);
  };

  const getShopByOwner = async (id: string): Promise<any> => {
    const result = await api.firstByOwner(id);

    const data: any = [];
    result?.forEach((doc) => {
      const tempData = { id: doc.id, ...doc.data() };
      data.push(tempData);
    });

    return data;
  };

  const updateShop = async (id: string, data: Shop): Promise<any> => {
    return await api.update(id, data);
  };

  return {
    createShop,
    getShops,
    getShop,
    getShopByOwner,
    updateShop,
  };
};
