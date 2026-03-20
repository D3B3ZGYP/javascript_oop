import { SelectManager } from "./manager.js";
import { ViewElement } from "./view.js";
import data from "./data.json" with {type: "json"}

const manager = new SelectManager(data.questions)
const viewElement = new ViewElement(manager)
viewElement.appendTo(document.body)
manager.play()