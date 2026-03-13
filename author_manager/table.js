import { createTableCell, createTableHeader } from "./gomszab.min.js";
import { ViewElement } from "./viewElement.js";
import { AuthorManager } from "./manager.js";

class TableView extends ViewElement{
    /**
     * @type {AuthorManager}
     */
    #manager
    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody

    /**
     * 
     * @param {string} id 
     * @param {string[]} headerArray
     * @param {AuthorManager} manager
     */
    constructor(id, headerArray, manager){
        super(id)
        this.#manager = manager

        const table = this.div.appendChild(document.createElement("table"))
        const thead = table.appendChild(createTableHeader(headerArray))
        this.#tbody = table.appendChild(document.createElement("tbody"))

        this.#manager.tableCallback = (authorList) => {
            for (const i of authorList){
                const tr = this.#tbody.appendChild(document.createElement("tr"))

                createTableCell(tr, i.name)
                createTableCell(tr, i.work)
                createTableCell(tr, i.concept)
            }
        }
    }
}

export {TableView}