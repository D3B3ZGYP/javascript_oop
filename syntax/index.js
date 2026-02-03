import { muvelet, muveletLetrehoz } from "./functions.js"
import { Calculator } from "./gomb.js"

const input1 = document.body.appendChild(document.createElement("input"))
const input2 = document.body.appendChild(document.createElement("input"))
const div = document.body.appendChild(document.createElement("div"))

new Calculator(input1, input2, "*", div)
new Calculator(input1, input2, "-", div)
new Calculator(input1, input2, "+", div)