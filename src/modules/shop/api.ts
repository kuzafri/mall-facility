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
import { Shop } from "./model";

class ShopApi extends CrudApi {
  constructor() {
    super();
    this.COLLECTION = "shops";
  }

  async create(data: Shop) {
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

    switch (scope) {
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

  async firstByOwner(id: string) {
    try {
      const q = query(
        collection(db, this.COLLECTION),
        where("owner", "==", id)
      );
      return await getDocs(q);
    } catch (error) {
      console.error("Error retrieving document: ", error);
    }
  }

  async update(id: string, data: Shop) {
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

const shopApi = new ShopApi();

export { shopApi };
