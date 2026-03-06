/**
 * @callback ActivateCallback
 * @returns {void}
 */

import {show, hide} from "./gomszab.min.js"

class ViewElement{
    /**
     * @type {HTMLDivElement}
     */
    #div
    /**
     * @type {string}
     */
    #id
    /**
     * @type {ActivateCallback}
     */
    #activateCallback

    /**
     * @param {ActivateCallback} value
     */
    set activateCallback(value){
        this.#activateCallback = value
    }

    get div(){
        return this.#div
    }

    get id(){
        return this.#id
    }

    /**
     * 
     * @param {string} id 
     */
    constructor(id){
        this.#id = id
        this.#div = document.createElement("div")
        this.#div.id = id
    }

    /**
     * 
     * @param {HTMLElement} parent 
     * @returns {void}
     */
    appendTo(parent){
        parent.appendChild(this.#div)
    }

    /**
     * 
     * @param {string} id 
     * @returns {void}
     */
    activate(id){
        if (this.#id == id)
        {
            show(this.#div)
            if (this.#activateCallback)
                this.#activateCallback()
        }
        else
            hide(this.#div)
    }
}

export {ViewElement}