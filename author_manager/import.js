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

        const fileInput = this.div.appendChild(document.createElement("input"))
        fileInput.type = "file"
        fileInput.addEventListener("input", (e) => {
            e.preventDefault()

            
        })

        this.div.appendChild(document.createElement("br"))

        const exportButton = this.div.appendChild(document.createElement("button"))
        exportButton.innerText = "Export"
        exportButton.addEventListener("click", (e) => {
            e.preventDefault()


        })

        this.#manager.importResultCallback = (message) => {
            notification.innerText = message
            setTimeout(() => {notification.innerHTML = ""}, 1500)
        }
    }
}

export {ImportView}