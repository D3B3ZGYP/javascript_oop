import { AuthorManager } from "./manager.js";
import { ViewElement } from "./viewElement.js";

class ImportView extends ViewElement{
    /**
     * @type {AuthorManager}
     */
    #manager

    constructor(id, manager) {
        super(id);
        this.#manager = manager
    }
}

export {ImportView}