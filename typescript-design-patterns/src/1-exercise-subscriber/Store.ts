import { AbstractSubscriber } from "./AbstractSubscriber";
import { SubscriberInterface } from "./types";

class Store {
  private static _instance: Store = new Store();
  private _state: Record<string, any> = {};
  private _subscribers: SubscriberInterface[] = [];

  private constructor() {
    if (Store._instance) {
      throw new Error("Cannot construct Store instance directly");
    }
  }

  public static get instance(): Store {
    return Store._instance;
  }

  public getState(key: string): any {
    return this._state[key];
  }
  public setState<T>(key: string, value: T): void {
    this._state[key] = value;
    this.notify(key, value);
  }

  public subscribe(subscriber: SubscriberInterface): void {
    if (this._state.hasOwnProperty(subscriber.stateName)) {
      this._subscribers.push(subscriber);
    } else {
      throw new Error(`State ${subscriber.stateName} does not exist`);
    }
  }

  private notify(key: string, value: any) {
    this._subscribers
      .filter((s) => s.stateName === key)
      .forEach((s) => s.onUpdate(value));
  }
}

export default Store;
