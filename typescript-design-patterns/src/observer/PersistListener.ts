import { EventListener } from "./EventListener";

export class PersistListener extends EventListener {
  onUpdate(): void {
    console.log("Persist Listener: file is persisted.");
  }

}