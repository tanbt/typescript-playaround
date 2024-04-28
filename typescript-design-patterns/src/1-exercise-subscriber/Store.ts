import { iSubscriber } from "./types";

class Store {
  private static _instance: Store = new Store();
  private _state: Record<string, any> = {};
  private _subscribers: iSubscriber[] = [];

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
    this.notify(key);
  }

  private notify(key: string) {
    this._subscribers
      .filter((s) => s.stateName === key)
      .forEach((s) => s.onUpdate);
  }
}

export default Store;
