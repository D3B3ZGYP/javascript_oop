class Tanyer{
    constructor(szin){
        this.szin = szin
    }
}

class KisTanyer extends Tanyer{
    constructor(szin){
        super(szin)
    }
}

class NagyTanyer extends Tanyer{
    constructor(szin){
        super(szin)
    }
}

class Pohar{}

pohar = new Pohar()
tanyerok = []
tanyerok.push(new KisTanyer("fekete"))
tanyerok.push(new KisTanyer("fehér"))
tanyerok.push(new NagyTanyer("piros"))

function Tanyer2(szin){
    this.szin = szin
}

function KisTanyer2(szin){
    Tanyer2.call(this, szin)
}

function NagyTanyer2(szin){
    Tanyer2.call(this, szin)
}

function Pohar2(){}

pohar2 = new Pohar2()
tanyerok2 = []
tanyerok2.push(new KisTanyer2("fekete"))
tanyerok2.push(new KisTanyer2("fehér"))
tanyerok2.push(new NagyTanyer2("piros"))