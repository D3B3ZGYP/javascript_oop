class student{
    constructor(name){
        this.name = name
        this.askedQuestionNumber = 0
    }

    askQuestion(){
        console.log("???")
        this.askedQuestionNumber++
    }
}

const stu1 = new student("Kende")
console.log(stu1)
stu1.askQuestion()
console.log(stu1)

const stu2 = new student("Dénes")
console.log(stu2)

class studentWithWork extends student{
    constructor(name){
        super(name)
        this.workDone = 0
    }

    doWork(){
        this.workDone++;
    }
}

const stu3 = new studentWithWork("Maléter Pál")
stu3.askQuestion()
console.log(stu3)
stu3.doWork()
console.log(stu3)