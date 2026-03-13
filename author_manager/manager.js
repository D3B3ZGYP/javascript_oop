/**
 * @import {AuthorType} from "./index.js"
 * 
 * @callback TableCallback
 * @param {Author[]} authorList
 * @returns {void}
 *
 * @callback AddElementResultCallback
 * @param {string} message
 * @returns {void}
 *
 * @callback ImportResultCallback
 * @param {string} message
 * @returns {void}
 */

class AuthorManager{
    /**
     * @type {Author[]}
     */
    #authorList
    /**
     * @type {TableCallback}
     */
    #tableCallback
    /**
     * @type {AddElementResultCallback}
     */
    #addElementResultCallback
    /**
     * @type {ImportResultCallback}
     */
    #importResultCallback

    /**
     * @param {TableCallback} value
     */
    set tableCallback(value){
        this.#tableCallback = value
    }

    /**
     * @param {ImportResultCallback} value
     */
    set importResultCallback(value){
        this.#importResultCallback = value
    }

    /**
     * @param {AddElementResultCallback} value
     */
    set addElementResultCallback(value){
        this.#addElementResultCallback = value
    }

    constructor(){
        this.#authorList = []
    }

    /**
     * 
     * @param {AuthorType} element 
     * @returns {void}
     */
    addElement(element){
        const author = new Author()
        author.id = this.#authorList.length
        author.name = element.author
        author.work = element.work
        author.concept = element.concept

        if (author.validate()){
            this.#authorList.push(author)
            this.#addElementResultCallback("Sikeresen hozzáadva")
        } else {
            this.#addElementResultCallback("Nem volt sikeres az elem felvétel")
        }
    }

    /**
     * 
     * @param {AuthorType[]} elementList 
     * @returns {void}
     */
    addElementList(elementList){
        for (const element of elementList){
            const author = new Author()
            author.id = this.#authorList.length
            author.name = element.author
            author.work = element.work
            author.concept = element.concept

            this.#authorList.push(author)
            this.#tableCallback(author)
        }

        this.#importResultCallback("Sikeresen hozzáadva")
    }

    /**
     * 
     * @returns {void}
     */
    getAllElement(){
        this.#tableCallback(this.#authorList)
    }
}

class Author{
    /**
     * @type {string}
     */
    #id
    /**
     * @type {string}
     */
    #name
    /**
     * @type {string}
     */
    #work
    /**
     * @type {string}
     */
    #concept

    get id(){
        return this.#id
    }

    get name(){
        return this.#name
    }

    get work(){
        return this.#work
    }

    get concept(){
        return this.#concept
    }

    /**
     * @param {string} value
     */
    set id(value){
        this.#id = value
    }

    /**
     * @param {string} value
     */
    set name(value){
        this.#name = value
    }

    /**
     * @param {string} value
     */
    set work(value){
        this.#work = value
    }

    /**
     * @param {string} value
     */
    set concept(value){
        this.#concept = value
    }

    validate(){
        return this.#concept && this.#work && this.#name
    }
}

export {AuthorManager}