import Store from "./Store";
import { Auth, CartItem } from "./types";

export const subscriberDemo = () => {
  Store.instance.setState<Auth>("auth", {
    token: "someauthtok#n",
    username: "John",
  });
  Store.instance.setState<CartItem[]>("cart", [
    { id: 1, name: "item1", price: 100 },
    { id: 2, name: "item2", price: 200 },
    { id: 3, name: "item3", price: 300 },
  ]);

  const auth = Store.instance.getState("auth");
  console.log("auth", auth);
};
