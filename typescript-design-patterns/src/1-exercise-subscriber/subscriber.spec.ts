import Store from "./Store";
import { SubscriberInterface } from "./types";

describe("Auth subscriber", () => {
  test("Subscribe and get changes", () => {
    // Init example store Auth state
    Store.instance.setState("mockState", { data: "example data" });

    const mockSubscriber = {
      stateName: "mockState",
      onUpdate: jest.fn(),
    };
    Store.instance.subscribe(mockSubscriber);
    Store.instance.setState("someState", { data: "updated" });
    expect(mockSubscriber.onUpdate).not.toHaveBeenCalled();

    Store.instance.setState("mockState", { data: "reald updated" });
    expect(mockSubscriber.onUpdate).toHaveBeenCalledTimes(1);
    expect(mockSubscriber.onUpdate.mock.calls[0][0]).toStrictEqual({
      data: "reald updated",
    });
  });
});
