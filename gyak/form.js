/**
 * @import {Manager} from './manager.js'
 * @import {RowspanType, ColspanType, FormFieldType} from './functions.js'
 */

import {createForm, createInputField} from "./functions.js";
import {Manager} from './manager.js'

class FormController{
    /**
     * @type {Manager}
     */
    #manager
    /**
     * @Type {HTMLFormElement}
     */
    #form
    /**
     * @Type {FormField[]}
     */
    #formFieldElemList

    /**
     * @param {Manager} manager
     * @param {FormFieldType[]} formFieldList
     */
    constructor(manager, formFieldList) {
        this.#manager = manager
        this.#formFieldElemList = []

        this.#form = createForm((form) => {
            document.body.appendChild(form)
            for (const i of formFieldList)
                this.#formFieldElemList.push(new FormField(i.id, i.name, i.label, i.required, form))
        }, (e) => {
            e.preventDefault()

            const elem = this.#createElement()
            if (elem){
                this.#manager.addElement(elem)
                e.target.reset()
            }
        })
    }

    /**
     * @returns {RowspanType | ColspanType | null}
     */
    #createElement(){
        let result = {}
        let validate = true

        for (const field of this.#formFieldElemList){
            if (field.validate())
                result[field.name] = field.value
            else
                validate = false
        }

        if (validate)
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
     * @type {boolean}
     */
    #required
    /**
     * @type {string}
     */
    #name
    /**
     * @Type {HTMLDivElement}
     */
    #errorDiv

    get value(){
        return this.#input.value ? this.#input.value : undefined
    }

    get name(){
        return this.#name
    }

    /**
     * @param {string} id
     * @param {string} name
     * @param {string} labelContent
     * @param {boolean} required
     * @param {HTMLFormElement} parent
     */
    constructor(id, name, labelContent, required, parent) {
        let {errorElement, input} = createInputField({id, name, labelContent, parent})
        this.#input = input
        this.#required = required
        this.#name = name
        this.#errorDiv = errorElement
    }

    /**
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