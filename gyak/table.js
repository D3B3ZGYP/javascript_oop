/**
 * @import {Manager} from './manager.js'
 * @import {HeaderArrayType, ColspanType, RowspanType} from './functions.js'
 *
 * @callback TableCallback
 * @param {HTMLTableSectionElement} tbody
 * @param {ColspanType | RowspanType} data
 */

import {createTable} from "./functions.js";
import {Manager} from "./manager.js"

class Table{
    /**
     * @type {Manager}
     */
    #manager
    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody

    /**
     * @param {Manager} manager
     * @param {HeaderArrayType} headerArray
     */
    constructor(manager, headerArray) {
        this.#manager = manager

        this.#tbody = createTable(document.body, (tr) => {
            for (const i of headerArray){
                const th = tr.appendChild(document.createElement("th"))
                th.innerText = i.name
                th.colSpan = i.colspan ? i.colspan : 1
            }
        })
    }

    /**
     * @param {TableCallback} callback
     */
    setAppendRow(callback){
        this.#manager.addCallback = (row) => {callback(this.#tbody, row)}
    }
}

export {Table}