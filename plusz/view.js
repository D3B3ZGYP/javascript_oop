/**
 * @import {QuestionViewType} from "manager.js"
 */

import { QuizManager } from "./manager.js"

class ViewElement{
    /**
     * @type {QuizManager}
     */
    #manager
    /**
     * @type {HTMLDivElement}
     */
    #container

    /**
     * 
     * @param {QuizManager} manager 
     */
    constructor(manager){
        this.#container = document.createElement("div")
        this.#manager = manager

        this.#manager.nextQuestionCallback = (question) => {
            this.#container.innerHTML = ""

            const questionDiv = this.#container.appendChild(document.createElement("div"))
            questionDiv.classList.add("question")
            const questionSpan = questionDiv.appendChild(document.createElement("span"))
            questionSpan.innerText = question.question

            const answersDiv = questionDiv.appendChild(document.createElement("div"))
            answersDiv.classList.add("answers")
            for (const answer of question.answers){
                const button = answersDiv.appendChild(document.createElement("button"))
                button.innerText = answer

                button.addEventListener("click", (e) => {
                    e.preventDefault()

                    this.#manager.nextQuestion(e.target.innerText)
                })
            }
        }

        this.#manager.finishResultCallback = (result) => {
            this.#container.innerHTML = ""

            const resultDiv = document.body.appendChild(document.createElement("div"))
            resultDiv.classList.add("result")
            resultDiv.innerText = result
        }
    }

    /**
     * 
     * @param {HTMLElement} parent 
     * @returns {void}
     */
    appendTo(parent){
        parent.appendChild(this.#container)
    }
}

export {ViewElement}