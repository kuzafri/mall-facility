import { collection, addDoc } from "firebase/firestore";
import { db } from "helpers";
import { Auth } from "./model";

export class UserApi {
    async create(data: Auth) {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}