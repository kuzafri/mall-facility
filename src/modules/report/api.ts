import {
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
  Query,
  DocumentData,
} from "firebase/firestore";
import { db, CrudApi } from "helpers";
import { Report } from "./model";
import { getRecoil } from "recoil-nexus";
import { User, userAtom, userFactory, shopFactory } from "modules";

class ReportApi extends CrudApi {
  constructor() {
    super();
    this.COLLECTION = "reports";
  }

  async create(data: Report) {
    try {
      return await addDoc(
        collection(db, this.COLLECTION),
        this.serializeData(data)
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async all(scope?: string) {
    let q: Query<DocumentData>;
    const user = getRecoil(userAtom);
    const result = await userFactory().getUserByToken(user.token);

    const shop = await shopFactory().getShopByOwner(result[0].id);

    switch (scope) {
      case "tenant":
        q = query(
          collection(db, this.COLLECTION),
          where("shop_id", "==", shop[0].id)
        );
        break;
      case "submitted":
        q = query(
          collection(db, this.COLLECTION),
          where("user_id", "==", result[0].id)
        );
        break;
      default:
        q = query(collection(db, this.COLLECTION));
    }

    try {
      return await getDocs(q);
    } catch (error) {
      console.error("Error retrieving document: ", error);
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

  async update(id: string, data: Report) {
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

const reportApi = new ReportApi();

export { reportApi };
