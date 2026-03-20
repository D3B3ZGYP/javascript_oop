import { SelectManager } from "./manager.js"
import {PlayArea} from "./play.js"

class ViewElement{
    /**
     * @type {SelectManager}
     */
    #manager
    /**
     * @type {HTMLDivElement}
     */
    #container

    /**
     * 
     * @param {SelectManager} manager 
     */
    constructor(manager) {
        this.#manager = manager
        this.#container = document.createElement("div")

        const text = this.#container.appendChild(document.createElement("div"))
        text.innerHTML = "<span class='green-bg'>Igaz</span> vagy <span class='red-bg'>Hamis</span>"

        const div = this.#container.appendChild(document.createElement("div"))

        this.#manager.nextQuestionCallback = (question) => {
            const cardArea = new PlayArea(this.#manager)
            cardArea.replaceContent(div)

            const trueButton = cardArea.div.appendChild(document.createElement("button"))
            trueButton.innerText = question.question
            trueButton.classList.add("card-true")
            trueButton.addEventListener("click", (e) => {
                this.#manager.nextQuestion(true)
            })

            const falseButton = cardArea.div.appendChild(document.createElement("button"))
            falseButton.innerText = question.question
            falseButton.classList.add("card-false")
            falseButton.addEventListener("click", (e) => {
                this.#manager.nextQuestion(false)
            })
        }

        this.#manager.finishCallback = (resultArray) => {
            const resultArea = new PlayArea(this.#manager)
            resultArea.replaceContent(div)
            let correctAnswers = 0

            for (const i of resultArray){
                const div = resultArea.div.appendChild(document.createElement("div"))
                div.innerText = i.question
                if (i.selected == i.rightAnswer){
                    div.classList.add("green-bg")
                    correctAnswers++
                } else {
                    div.classList.add("red-bg")
                }
            }

            const p = resultArea.div.appendChild(document.createElement("p"))
            p.innerText = `${correctAnswers}/${resultArray.length} helyes`

            const reset = resultArea.div.appendChild(document.createElement("button"))
            reset.innerText = "újra"
            reset.addEventListener("click", (e) => {
                this.#manager.reset()
            })
        }
    }

    /**
     * 
     * @param {HTMLElement} parent 
     */
    appendTo(parent){
        parent.appendChild(this.#container)
    }
}

export {ViewElement}