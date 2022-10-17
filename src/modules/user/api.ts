import {
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  where,
  query,
} from "firebase/firestore";
import { db, CrudApi } from "helpers";
import { User } from "./model";

class UserApi extends CrudApi {
  constructor() {
    super();
    this.COLLECTION = "users";
  }

  async create(data: User) {
    try {
      return await addDoc(
        collection(db, this.COLLECTION),
        this.serializeData(data)
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async first(id: string) {
    try {
      const docRef = doc(db, this.COLLECTION, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error retrieving document: ", error);
    }
  }

  async firstByToken(token: string) {
    try {
      const q = query(
        collection(db, this.COLLECTION),
        where("token", "==", token)
      );

      return await getDocs(q);

    } catch (error) {
      console.error("Error retrieving document: ", error);
    }
  }

  async update(id: string, data: User) {
    const docRef = doc(db, this.COLLECTION, id);

    try {
      const result = await updateDoc(docRef, {
        ...data,
      });

      console.log(result);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }
}

const userApi = new UserApi();

export { userApi };
