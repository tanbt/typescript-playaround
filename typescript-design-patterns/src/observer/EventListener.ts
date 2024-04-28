import { Editor } from "./Editor";

export abstract class EventListener {

  constructor(protected _editor: Editor) { };

  abstract onUpdate(): void;
}