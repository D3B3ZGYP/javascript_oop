/**
 * @typedef {{id: number, author?: string, work?: string, concept?: string}} AuthorType
 * @typedef {{id: string, label: string, name: string}} FormFieldType
 */

import { FormView } from "./form.js"
import { NavigationBar } from "./navigationBar.js"
import { TableView } from "./table.js"
import { AuthorManager } from "./manager.js"
import { ImportView } from "./import.js"


const formFields = [{
    id: 'author',
    label: 'Név',
    name: 'author'
},
{
    id: 'work',
    label: 'Mű',
    name: 'work'
},
{
    id: 'concept',
    label: 'Fogalom',
    name: 'concept'
}]

const headerArray = ['Szerző', 'Mű', 'Fogalom']

const manager = new AuthorManager()
const navbar = new NavigationBar()
navbar.appendTo(document.body)

const table = new TableView("table", headerArray, manager)
table.appendTo(document.body)
navbar.addViewElement(table, "Táblázat")

const form = new FormView("form", manager, formFields)
form.appendTo(document.body)
navbar.addViewElement(form, "Form")

const importView = new ImportView("import", manager)
importView.appendTo(document.body)
navbar.addViewElement(importView, "Import/Export")

navbar.activate("table")