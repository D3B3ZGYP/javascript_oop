import { createRadioButton } from "./gomszab.min.js";
import { ViewElement } from "./viewElement.js";

class NavigationBar extends ViewElement{
    /**
     * @type {ViewElement[]}
     */
    #viewElementList

    /**
     * 
     * @param {string} id 
     */
    constructor() {
        super("navbar")
        this.#viewElementList = []
        this.div.addEventListener("change", (e) => {
            const radioButtonValue = e.target.value
            this.activate(radioButtonValue)
        })
    }

    /**
     * 
     * @param {ViewElement} element 
     * @param {string} label 
     * @returns {void}
     */
    addViewElement(element, label){
        this.#viewElementList.push(element)
        const div = createRadioButton({id: element.id, name: this.id, label})
        this.div.appendChild(div)
    }

    /**
     * 
     * @override
     * @param {string} value 
     * @returns {void}
     */
    activate(value){
        for(const i of this.#viewElementList)
            i.activate(value)

        this.div.querySelector(`#${value}`).checked = true
    }
}

export {NavigationBar}