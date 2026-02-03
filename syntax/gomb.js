import { muveletLetrehoz } from "./functions.js"

class Calculator{

    constructor(input1, input2, muveletString, eredmenyDiv){
        const button = document.body.appendChild(document.createElement("button"))
        button.innerText = muveletString

        this.muveletstring = muveletString

        button.addEventListener("click", this.#calculate(input1, input2, eredmenyDiv))
    }

    #calculate(input1, input2, eredmenydiv){
        return (e) => {eredmenydiv.innerText = muveletLetrehoz(this.muveletstring)(Number(input1.value), Number(input2.value))}
    }
}


export {Calculator}