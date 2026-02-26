/**
 * @import {RowspanType, ColspanType} from './functions.js'
 *
 * @callback AddCallback
 * @param {RowspanType | ColspanType}
 * @returns {void}
 */

class Manager{
    /**
     * @type {RowspanType[] | ColspanType[]}
     */
    #dataArray
    /**
     * @type {AddCallback}
     */
    #addCallback

    /**
     * @param {AddCallback} callback
     */
    set addCallback(callback){
        this.#addCallback = callback
    }

    constructor() {
        this.#dataArray = []
    }

    /**
     * @param {RowspanType | ColspanType} element
     * @returns {void}
     */
    addElement(element){
        this.#dataArray.push(element)

        if (this.#addCallback)
            this.#addCallback(element)
    }
}

export {Manager}