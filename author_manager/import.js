/**
 * @import {AuthorType} from "./index.js"
 */

import { AuthorManager } from "./manager.js";
import { ViewElement } from "./viewElement.js";

class ImportView extends ViewElement{
    /**
     * @type {AuthorManager}
     */
    #manager

    constructor(id, manager) {
        super(id);
        this.#manager = manager

        const notification = this.div.appendChild(document.createElement("div"))
        this.#manager.importResultCallback = (message) => {
            notification.innerText = message
            setTimeout(() => {notification.innerHTML = ""}, 1500)
        }

        const fileInput = this.div.appendChild(document.createElement("input"))
        fileInput.type = "file"
        fileInput.addEventListener("change", (e) => {
            const reader = new FileReader()
            reader.readAsText(fileInput.files[0], "UTF-8")
            reader.onload = () => {
                /**
                 * @type {AuthorType[]}
                 */
                const result = []
                for (const i of reader.result.split("\n")){
                    const data = i.split(";")

                    result.push({
                        author: data[0],
                        work: data[1],
                        concept: data[2]
                    })
                }

                this.#manager.addElementList(result)
            }
        })

        this.div.appendChild(document.createElement("br"))

        const exportButton = this.div.appendChild(document.createElement("button"))
        exportButton.innerText = "Export"
        exportButton.addEventListener("click", (e) => {
            const a = document.createElement("a")

            const file = new Blob([this.#manager.getExportString()])
            a.href = URL.createObjectURL(file)
            a.download = "export.csv"
            a.click()
            URL.revokeObjectURL(a.href)
        })
    }
}

export {ImportView}