import { DefaultElement } from "./DefaultElement";
import { IElement } from "./IElement";

export class ImageElement extends DefaultElement {
  constructor(private _attrs: string[]) {
    super("img");
  }

  public print(level: number): void {
    const spaces: string = DefaultElement.getSpaces(level);
    const attrs = this._attrs.join(", ");
    console.log(`${spaces}<img ${attrs}/>`);
  }

  public add(el: IElement): void {
    // no op
  }
}
