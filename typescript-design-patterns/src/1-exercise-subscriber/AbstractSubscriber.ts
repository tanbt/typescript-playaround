import { SubscriberInterface } from "./types";

export class AbstractSubscriber implements SubscriberInterface {
  stateName: string;

  constructor(stateName: string) {
    this.stateName = stateName;
  }

  public onUpdate(data: any) {
    if (!!data) {
      console.info(`AbstractSubscriber: updating for "${this.stateName}" state`);
    }
  }
}
