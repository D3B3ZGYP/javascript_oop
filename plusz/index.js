import data from "./data.json" with {type: "json"}
import { QuizManager } from "./manager.js"
import { ViewElement } from "./view.js"

const manager = new QuizManager(data.questions)
const viewElement = new ViewElement(manager)
viewElement.appendTo(document.body)
manager.startQuiz()