/**
 * @typedef {{question: string, selected: boolean, rightAnswer: boolean}} QuestionResultViewType
 * @typedef {{question: string, valid: boolean}} QuestionType
 * @typedef {{question: string}} QuestionViewType
 * 
 * @callback NextQuestionCallback
 * @param {QuestionViewType} question
 * @returns {void}
 * 
 * @callback FinishCallback
 * @param {QuestionResultViewType[]} resultArray
 * @returns {void}
 */

class SelectManager{
    /**
     * @type {number}
     */
    #questionNumber
    /**
     * @type {QuestionType[]}
     */
    #questions
    /**
     * @type {boolean[]}
     */
    #questionAnswers
    /**
     * @type {NextQuestionCallback}
     */
    #nextQuestionCallback
    /**
     * @type {FinishCallback}
     */
    #finishCallback

    /**
     * @param {NextQuestionCallback} value
     */
    set nextQuestionCallback(value){
        this.#nextQuestionCallback = value
    }

    /**
     * @param {FinishCallback} value
     */
    set finishCallback(value){
        this.#finishCallback = value
    }

    /**
     * 
     * @param {QuestionType[]} questions 
     */
    constructor(questions){
        this.#questions = questions
        this.#questionAnswers = []
        this.#questionNumber = 0
    }

    /**
     * 
     * @param {boolean} answer 
     */
    nextQuestion(answer){
        this.#questionAnswers.push(answer)

        if (this.#questionNumber+1 >= this.#questions.length){
            const resultArray = []
            for (let i = 0; i < this.#questions.length; i++){
                resultArray.push({
                    question: this.#questions[i].question,
                    rightAnswer: this.#questions[i].valid,
                    selected: this.#questionAnswers[i]
                })
            }

            this.#finishCallback(resultArray)
        } else {
            this.#questionNumber++
            this.#nextQuestionCallback({question: this.#questions[this.#questionNumber].question})
        }
    }

    play(){
        this.#nextQuestionCallback({question: this.#questions[this.#questionNumber].question})
    }

    reset(){
        this.#questionNumber = 0
        this.#questionAnswers = []
        this.play()
    }
}

export {SelectManager}