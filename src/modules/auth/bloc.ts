import { Auth } from "modules";
import { userFactory } from "modules";
import { authApi } from "./api";
import * as crypto from "crypto-js";
import { generate_token } from "helpers";

export const authFactory = () => {
  const api = authApi;

  const register = async (data: Auth) => {
    try {
      data.password = crypto.SHA256(data.confirm_password!).toString();
      data.role = "1";
      data.token = generate_token();

      delete data["confirm_password"];

      const docRef = await api.register(data);

      if (docRef?.id) {
        const data = await userFactory().getUser(docRef.id);
        if (data) {
          console.log("Document data:", data);
        } else {
          console.log("No such document!");
        }
      } else {
        throw new Error("Cannot create user");
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const login = async (data: any): Promise<any> => {
    let userData;

    try {
      const result = await api.login(data);

      if (result!.size > 0) {
        result?.forEach(async (doc) => {
          if (doc.data()) {
            return userData = {
              name: doc.data().name,
              email: doc.data().email,
              token: doc.data().token,
              role: doc.data().role,
              mobile_no: doc.data().mobile_no,
            };
          }
        });
      }
      return userData;
    } catch (error) {
      console.error(error);
      return userData;
    }
  };

  return {
    register,
    login,
  };
};
