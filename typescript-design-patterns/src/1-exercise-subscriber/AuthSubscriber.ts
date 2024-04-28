import { AbstractSubscriber } from "./AbstractSubscriber";

export class AuthSubscriber extends AbstractSubscriber {
  constructor() {
    super("auth");
  }

  onUpdate(data: any) {
    super.onUpdate(data);
    console.log("AuthSubscriber received new data: ", data);
  }
}
