import Store from "./Store";

describe("Store", () => {
  test("Store cannot be initialized", () => {
    expect(() => {
      // @ts-ignore
      new Store();
    }).toThrow("Cannot construct Store instance directly");
  });

  test("Set, update and get state", () => {
    const store = Store.instance;
    const key = "name";
    const value = "John";

    store.setState(key, value);
    expect(store.getState(key)).toBe(value);
    store.setState(key, "Doe");
    expect(store.getState(key)).toBe("Doe");
  });
});
