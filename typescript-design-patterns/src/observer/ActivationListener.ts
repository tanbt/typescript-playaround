import { EventListener } from "./EventListener";

export class ActivationListener extends EventListener {

  onUpdate(): void {
    console.log("Check for Editor activation...")
  }

}