export class Reloj{
    constructor(dom){
        this.dom = dom;
        this.iniciar()
    }
    iniciar(){
        setInterval(e=>this.durante(),1000)
    }
    durante(){
        this.dom.innerHTML = this.formato()
    }
    formato(d = new Date()){
        return ` ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}` 
    }
}