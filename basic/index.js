/** 
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
 * 
 * @callback MethodCallback
 * @param {HTMLTableSectionElement}
*/

/** @type {HeaderType[]}  */
const rowspanHeaderArr = [{name: "Szerző"}, {name: "Mű"}, {name: "Fogalmak"}] 
/** @type {HeaderType[]}   */
const colspanHeaderArr = [{name: "Szerző"},{name: "Mű"} , {name: "Fogalmak" ,colSpan: 2}] 

/** @type {RowspanRowType[]}  */
const rowspanBodyArr = [
    {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    },
    {
        author: "Thomas Mann",
        title1: "Mario és a varázsló",
        concepts1: "kisregény" 
    },
    {
        author: "Franz Kafka",
        title1: "A per", 
        concepts1: "képvers", 
        title2: "Az átvlátozás", 
        concepts2: "kisregény" 
    }
]



/** @type {ColspanRowType[]} */
const colspanBodyArr = [ 
    {
        author: "Appolliniare", 
        title: "A megsebzett galamb és a szökőkút",
        concepts: "Képvers",  
        concepts2: "Emlékezés", 
    },
    {
        author: "Appolliniare", 
        title: "Búcsú", 
        concepts: "Avantgárd" 
    },
    {
        author: "Thomas Mann", 
        title: "Mario és a varázsló", 
        concepts: "Kisregény" 
    },
    {
        author: "Franz Kafka",
        title: "A per", 
        concepts: "regény" 
    },
    {
        author: "Franz Kafka", 
        title: "Az átváltozás",
        concepts: "kisregény", 
        concepts2: "groteszk" 
    }
]

// renderColspanBody(makeTableBodyWithHeader(colspanHeaderArr), colspanBodyArr)
// renderRowspanBody(makeTableBodyWithHeader(rowspanHeaderArr), rowspanBodyArr)

class Table{
    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody

    get tbody(){
        return this.#tbody
    }

    /**
     * @param {HeaderType[]} tableHeaderArray 
     */
    constructor(tableHeaderArray){
        this.#tbody = makeTableBodyWithHeader(tableHeaderArray)
    }

    /**
     * @param {MethodCallback} param 
     */
    Method(param){
        param(this.tbody)
    }
}

class ColspanTable extends Table{
    constructor(tableHeaderArray){
        super(tableHeaderArray)
    }

    /**
     * @param {ColspanRowType[]} bodyArray 
     */
    render(bodyArray){
        renderColspanBody(this.tbody, bodyArray)
    }
}

class RowspanTable extends Table{
    constructor(tableHeaderArray){
        super(tableHeaderArray)
    }

    /**
     * @param {RowspanRowType[]} bodyArray 
     */
    render(bodyArray){
        renderRowspanBody(this.tbody, bodyArray)
    }
}

const rowspanTable = new RowspanTable(rowspanHeaderArr)
const colspanTable = new ColspanTable(colspanHeaderArr)

rowspanTable.render(rowspanBodyArr)
colspanTable.render(colspanBodyArr)

const gomb = document.createElement("button")
document.body.appendChild(gomb)
gomb.innerText = "Rowspan hozzáadás"
gomb.addEventListener("click", onButtonClick.bind(rowspanTable))

/**
 * @this {RowspanTable}
 */
function onButtonClick(){
    /**
     * @type {RowspanRowType}
     */
    const obj = {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    }

    this.Method( (body) => {
        const tr1 = document.createElement("tr")
        const tr2 = document.createElement("tr")

        const td1 = document.createElement("td")
        td1.innerText = obj.author
        td1.rowSpan = 2
        tr1.appendChild(td1)

        const td2 = document.createElement("td")
        td2.innerText = obj.title1
        tr1.appendChild(td2)

        const td3 = document.createElement("td")
        td3.innerText = obj.concepts1
        tr1.appendChild(td3)

        const td4 = document.createElement("td")
        td4.innerText = obj.title2
        tr2.appendChild(td4)

        const td5 = document.createElement("td")
        td5.innerText = obj.concepts2
        tr2.appendChild(td5)

        body.appendChild(tr1)
        body.appendChild(tr2)
    })
}