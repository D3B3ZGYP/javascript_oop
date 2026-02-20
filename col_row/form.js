/**
 * @import {} from "./functions"
 */

import { Manager } from "./manager.js"

class FormController{

    /**
     * @type {Manager}
     */
    #manager

    /**
     * @type {FormField[]}
     */
    #formFieldElemList

    /**
     * @type {HTMLFormElement}
     */
    #form

    /**
     * 
     * @param {FormFieldType[]} formFieldList 
     * @param {Manager} manager 
     */
    constructor(formFieldList, manager) {
        this.#formFieldElemList = []
        this.#manager = manager

        const form = document.body.appendChild(document.createElement("form"))
        this.#form = form

        for (const formField of formFieldList){
            this.#formFieldElemList.push(new FormField(formField.id, formField.name, formField.label, formField.required, this.#form))
        }

        const submitButton = this.#form.appendChild(document.createElement("button"))
        submitButton.innerText = "Küldés"

        this.#form.addEventListener("submit", (e) => {
            e.preventDefault()

            const elem = this.#createElement()
            if (elem){
                this.#manager.addElement(elem)
                e.target = reset()
            }
        })
    }

    /**
     * 
     * @returns {RowspanType | ColspanType | null}
     */
    #createElement(){
        let result = {}        
        let valid = true

        for (const inputField of this.#formFieldElemList){
            if (inputField.validate())
                result[inputField.name] = inputField.value
            else
                valid = false
        }

        if (valid)
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
     * @type {string}
     */
    #name

    /**
     * @type {boolean}
     */
    #required

    /**
     * @type {HTMLDivElement}
     */
    #errorDiv

    get value(){
        return this.#input.value ? this.#input.value : undefined
    }

    get name(){
        return this.#name
    }

    /**
     * 
     * @param {string} id 
     * @param {string} name 
     * @param {string} labelContent 
     * @param {boolean} required 
     * @param {HTMLFormElement} parent 
     */
    constructor(id, name, labelContent, required, parent){
        const div = parent.appendChild(document.createElement("div"))

        const label = div.appendChild(document.createElement("label"))
        label.innerText = labelContent
        label.htmlFor = id

        div.appendChild(document.createElement("br"))

        const input = div.appendChild(document.createElement("input"))
        input.id = id
        input.name = name

        const errorDiv = div.appendChild(document.createElement("div"))
        errorDiv.classList.add("error")

        this.#input = input
        this.#name = name
        this.#required = required
        this.#errorDiv = errorDiv
    }

    /**
     * 
     * @returns {boolean}
     */
    validate(){
        let result = true

        if (this.#required && !this.value){
            result = false
            this.#errorDiv.innerText = "Kötelező"
        } else {
            this.#errorDiv.innerText = ""
        }

        return result
    }
}

export {FormController}