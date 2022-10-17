import {
  collection,
  addDoc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { CrudApi, db } from "helpers";
import { Auth, User } from "modules";
import * as crypto from "crypto-js";

class AuthApi extends CrudApi {
  async register(data: User) {
    try {
      return await addDoc(collection(db, "users"), this.serializeData(data));
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async login(data: any) {
    const q = query(
      collection(db, "users"),
      where("email", "==", data?.email),
      where("password", "==", crypto.SHA256(data?.password).toString())
    );
    try {
      return await getDocs(q);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async changePassword(data: any){
    
  }
}

const authApi = new AuthApi();

export { authApi };
