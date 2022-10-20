import { serverTimestamp } from "firebase/firestore";
export class CrudApi {
  protected COLLECTION = "";
  protected DOC: any;

  serializeData(data: Object) {
    const test = Object.entries(data).map(([key, value]) =>
      typeof value !== "object" &&
      (value === undefined || value.trim().length === 0)
        ? key
        : null
    );

    test.forEach((testData) => {
      delete (data as any)[testData!];
    });

    data = { ...data, created_at: serverTimestamp() };
    return data;
  }
}
