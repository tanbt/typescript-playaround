import { EventEmitter } from "events";

class MyEventProducer extends EventEmitter {
  public static EVENT_NAME = "customEvent";
  constructor() {
    super();
  }

  triggerCustomEvent(data: any) {
    this.emit(MyEventProducer.EVENT_NAME, data);
  }
}

// attatch a listener
const myEventProducer = new MyEventProducer();
myEventProducer.on(MyEventProducer.EVENT_NAME, (data) => {
  console.log("Received data: ", data);
});

setTimeout(() => {
  myEventProducer.triggerCustomEvent({ message: "Hello from custom event!" });
}, 3000);
