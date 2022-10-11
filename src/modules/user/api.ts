import { collection, addDoc } from "firebase/firestore";
import { db, CrudApi } from "helpers";
import { User } from "./model";

class UserApi extends CrudApi{
    protected COLLECTION;

    constructor() {
        super();
        this.COLLECTION = 'users';
    }

    async create(data: User) {
        try {
            return await addDoc(collection(db, this.COLLECTION), this.serializeData(data));
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}

const userApi = new UserApi();

export { userApi }