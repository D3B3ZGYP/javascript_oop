/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType} from './functions.js'
 */

import {Manager} from "./manager.js"
import {FormController} from "./form.js"
import {Table} from "./table.js"
import data from "./data.json" with {type: "json"}

const manager = new Manager()
manager.addCallback = (param) => {console.log(param)}

const table = new Table(data.colspanHeaderArray, manager)

/**
 * 
 * @param {HTMLTableSectionElement} tbody 
 * @param {ColspanType} row
 * @returns {void} 
 */
const renderTbodyColspan = (tbody, row) => {
    const tr = tbody.appendChild(document.createElement("tr"))

    const td1 = tr.appendChild(document.createElement("td"))
    td1.innerText = row.neve

    const td2 = tr.appendChild(document.createElement("td"))
    td2.innerText = row.kor

    const td3 = tr.appendChild(document.createElement("td"))
    td3.innerText = row.szerelme1

    if (row.szerelme2){
        const td4 = tr.appendChild(document.createElement("td"))
        td4.innerText = row.szerelme2
    } else {
        td3.colSpan = 2
    }
}

table.setAppendRow(renderTbodyColspan)

for (const i of data.colspanDataArr)
    manager.addElement(i)

const form = new FormController(data.colspanFormFieldList, manager)