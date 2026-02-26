import {Manager} from "./manager.js"
import {FormController} from "./form.js";
import {Table} from "./table.js";
import {tbodyRenderColspan, tbodyRenderRowspan} from "./functions.js";
import data from "./data.json" with {type: "json"};

const colManager = new Manager()
const colTable = new Table(colManager, data.colspanHeaderArray)
colTable.setAppendRow(tbodyRenderColspan)
for (const i of data.colspanDataArr)
    colManager.addElement(i)
const colForm = new FormController(colManager, data.colspanFormFieldList)

const rowManager = new Manager()
const rowTable = new Table(rowManager, data.rowspanHeaderArray)
rowTable.setAppendRow(tbodyRenderRowspan)
for (const i of data.rowspanTableArray)
    rowManager.addElement(i)
const rowForm = new FormController(rowManager, data.rowspanFormFieldList)