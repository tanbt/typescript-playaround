import Store from "./Store";

describe("Store", () => {
  test("Store cannot be initialized", () => {
    expect(() => {
      // @ts-ignore
      new Store();
    }).toThrow("Cannot construct Store instance directly");
  });
});
