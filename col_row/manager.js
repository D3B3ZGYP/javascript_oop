/**
 * @import {} from './functions.js'
 * 
 * @callback AddCallback
 * @param {ColspanType | RowspanType} data
 * @returns {void}
 */

class Manager{
    /**
     * @type {ColspanType[] | RowspanType[]}
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

    constructor(){
        this.#dataArray = []
    }

    /**
     * @param {Colspanype | RowspanType} element
     * @returns {void}
     */
    addElement(element){
        this.#dataArray.push(element)

        if (this.#addCallback != null)
            this.#addCallback(element)

        // console.log(this.#dataArray)
    }
}

export {Manager}