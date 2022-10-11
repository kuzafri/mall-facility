export class CrudApi {
  serializeData(data: Object) {
    const test = Object.entries(data).map(([key, value]) =>
      value === undefined ? key : null
    );

    test.forEach((testData) => {
      delete (data as any)[testData!];
    });

    return data;
  }
}
