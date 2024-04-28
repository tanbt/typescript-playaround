import Store from "./Store";

describe("Auth subscriber", () => {
  test("Subscribe and get changes", () => {
    // Init example store Auth state
    Store.instance.setState("auth", { userId: 12, token: "token" });
    
    
  });
});
