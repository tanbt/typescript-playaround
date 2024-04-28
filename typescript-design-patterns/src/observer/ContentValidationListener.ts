import { EventListener } from "./EventListener";

export class ContentValidationListener extends EventListener {
  onUpdate(): void {
    console.log("Content validation listener: length = " + this._editor.content.length + ".");
  }

}