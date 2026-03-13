/**
 * @import {FormFieldType, AuthorType} from "./index.js"
 */

import { ViewElement } from "./viewElement.js";
import { AuthorManager } from "./manager.js";
import { createInputAndErrorDiv } from "./gomszab.min.js";

class FormView extends ViewElement{
    /**
     * @type {AuthorManager}
     */
    #manager
    /**
     * @type {FormField[]}
     */
    #formFieldList
    /**
     * @type {HTMLFormElement}
     */
    #form

    /**
     * 
     * @param {string} id
     * @param {AuthorManager} manager
     * @param {FormFieldType[]} formFieldTypeList
     */
    constructor(id, manager, formFieldTypeList){
        super(id)
        this.#manager = manager
        this.#formFieldList = []

        const notification = this.div.appendChild(document.createElement("div"))

        this.#form = this.div.appendChild(document.createElement("form"))

        for (const formFieldType of formFieldTypeList)
            this.#formFieldList.push(new FormField(formFieldType.id, formFieldType.label, formFieldType.name, this.#form))
        const button = this.#form.appendChild(document.createElement("button"))
        button.innerText = "Küldés"

        this.#form.addEventListener("submit", (e) => {
            e.preventDefault()

            const elem = this.#createElement()
            manager.addElement(elem)
        })

        this.#manager.addElementResultCallback = (message) => {
            notification.innerText = message
            setTimeout(() => {notification.innerHTML = ""}, 1500)
        }
    }

    /**
     *
     * @returns {AuthorType | null}
     */
    #createElement(){
        let result = {}
        let validation = true

        for (const field of this.#formFieldList){
            if (field.validate())
                result[field.name] = field.value
            else
                validation = false
        }

        if (validation)
            return result
        else
            return null
    }
}

class FormField{
    /**
     * @type {HTMLInputElement}
     */
    #input
    /**
     * @type {HTMLDivElement}
     */
    #errorDiv
    /**
     * @type {string}
     */
    #name

    get name(){
        return this.#name
    }

    get value(){
        return this.#input.value ? this.#input.value : null
    }

    /**
     *
     * @param {string} id
     * @param {string} label
     * @param {string} name
     * @param {HTMLElement} parent
     */
    constructor(id, label, name, parent) {
        const {input, errorDiv} = createInputAndErrorDiv({id, label, name, parent})

        this.#name = name
        this.#input = input
        this.#errorDiv = errorDiv
    }

    /**
     *
     * @returns {boolean}
     */
    validate(){
        let result = true

        if (this.value == null){
            result = false
            this.#errorDiv.innerText = "Hibás adat"
        } else {
            this.#errorDiv.innerText = ""
        }

        return result
    }
}

export {FormView}