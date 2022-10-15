import { collection, addDoc, doc, getDoc } from "firebase/firestore";
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
}

const userApi = new UserApi();

export { userApi };
