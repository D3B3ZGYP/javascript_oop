import { SelectManager } from "./manager.js"

class PlayArea{
    /**
     * @type {HTMLDivElement}
     */
    #div
    /**
     * @type {SelectManager}
     */
    #manager

    get manager(){
        return this.#manager
    }

    get div(){
        return this.#div
    }

    /**
     * 
     * @param {SelectManager} manager 
     */
    constructor(manager) {
        this.#manager = manager
        this.#div = document.createElement("div")
    }

    /**
     * 
     * @param {HTMLElement} parent 
     */
    replaceContent(parent){
        parent.innerHTML = ""
        parent.appendChild(this.#div)
    }
}

export {PlayArea}