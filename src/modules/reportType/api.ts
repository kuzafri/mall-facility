import {
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { db, CrudApi } from "helpers";
import { ReportType } from "./model";

class ReportTypeApi extends CrudApi {
  constructor() {
    super();
    this.COLLECTION = "report_types";
  }

  async create(data: ReportType) {
    try {
      return await addDoc(
        collection(db, this.COLLECTION),
        this.serializeData(data)
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async all() {
    const q = query(
      collection(db, "report_types"),
      where("is_active", "==", true)
    );
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

  async update(id: string, data: ReportType) {
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

const reportTypeApi = new ReportTypeApi();

export { reportTypeApi };
