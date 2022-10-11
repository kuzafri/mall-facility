import { userApi } from "./api"
import { User } from "./model";

export const userFactory = () => {
    const api = userApi;

    const createUser = async (data: User): Promise<any> => {
        await api.create(data);
    }

    return {
        createUser
    }
}