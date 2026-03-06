import { ViewElement } from "./viewElement.js";

class FormView extends ViewElement{
    /**
     * 
     * @param {string} id 
     */
    constructor(id){
        super(id)
        this.div.innerText = "form"
    }
}

export {FormView}