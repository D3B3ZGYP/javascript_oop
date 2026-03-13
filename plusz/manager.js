/**
 * @typedef {{question: string, answers: string[], rightAnswer: string}} QuestionType
 * @typedef {{question: string, answers: string[]}} QuestionViewType
 * 
 * @callback NextQuestionCallback
 * @param {QuestionViewType} question
 * @returns {void}
 * 
 * @callback FinishQuestionCallback
 * @param {string} result
 * @returns {void}
 */

class QuizManager{
    /**
     * @type {Number}
     */
    #currentQuestionNumber
    /**
     * @type {QuestionType[]}
     */
    #questions
    /**
     * @type {string[]}
     */
    #questionAnswers
    /**
     * @type {NextQuestionCallback}
     */
    #nextQuestionCallback
    /**
     * @type {FinishQuestionCallback}
     */
    #finishResultCallback

    /**
     * @param {NextQuestionCallback} value
     */
    set nextQuestionCallback(value){
        this.#nextQuestionCallback = value
    }

    /**
     * @param {FinishQuestionCallback} value
     */
    set finishResultCallback(value){
        this.#finishResultCallback = value
    }

    /**
     * 
     * @param {QuestionType[]} questions 
     */
    constructor(questions){
        this.#currentQuestionNumber = 0
        this.#questionAnswers = []
        this.#questions = questions
    }

    /**
     * @returns {void}
     */
    startQuiz(){
        this.#nextQuestionCallback(this.#questions[0])
    }

    /**
     * 
     * @param {string} answer 
     * @returns {void}
     */
    nextQuestion(answer){
        this.#questionAnswers.push(answer)

        if (this.#currentQuestionNumber < this.#questions.length-1){
            this.#currentQuestionNumber++
            this.#nextQuestionCallback(this.#questions[this.#currentQuestionNumber])
        } else {
            let rightAnswerNumber = 0
            for (let i = 0; i < this.#questions.length; i++)
                if (this.#questionAnswers[i] == this.#questions[i].rightAnswer)
                    rightAnswerNumber++

            this.#finishResultCallback(`Ennyit sikerült eltalálni: ${this.#questions.length}/${rightAnswerNumber}`)
        }
    }
}

export {QuizManager}