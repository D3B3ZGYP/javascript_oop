import {ViewElement} from "./viewElement.js";

class ImportView extends ViewElement{
    #manager

    constructor(id, manager) {
        super(id);
        this.#manager = manager
    }
}