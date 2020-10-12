import { De } from "./Array.js"

export class Controlador {

    constructor(preguntas=[],app){
        this.preguntas = De(preguntas)
        this.app = app
        this.selecionado = 0
    }
    selecionar(i){
        this.selecionado = i
        this.mostrarPregunta()
    }
    mostrarTodo(){
        this.app.innerHTML = this.preguntas.unir((d,i)=>`
            <div class="pregunta">
                ${d.pregunta} <button onclick="controlador.selecionar(${i})">Ver</button>
            </div>
        `)   
    }
    mostrarPregunta(){
        this.app.innerHTML = this.preguntas.mostrar(this.selecionado)
            .plantilla((d)=>`
                <div class="preguntaFull">
                    <div>
                    ${d.pregunta} 
                    </div>
                    <div id = "pi${this.selecionado}">
                        <button onclick="controlador.mostrarPreguntaIngles()">Ver pregunta en ingles</button>
                    </div>
                    <div id = "r${this.selecionado}">
                        <button onclick="controlador.mostrarRespuesta()">Ver respuesta </button>
                    </div>
                    <div id = "ri${this.selecionado}">
                        <button onclick="controlador.mostrarRespuestaIngles()">Ver respuesta en ingles</button>
                    </div>
                    <div>
                        <button onclick="controlador.mostrarTodo()">Regresar</button>
                    </div>
                </div>
            `)   
    }
    mostrarPreguntaIngles(){
        document.getElementById(`pi${this.selecionado}`)
            .innerHTML = this.preguntas.mostrar(this.selecionado)
                .plantilla((d)=>`
                    ${d.preguntaIngles} 
                `)   
    }
    mostrarRespuesta(){
        document.getElementById(`r${this.selecionado}`)
            .innerHTML = this.preguntas.mostrar(this.selecionado)
                .plantilla((d)=>`
                    ${d.respuesta} 
                `)   
    }
    mostrarRespuestaIngles(){
        document.getElementById(`ri${this.selecionado}`)
            .innerHTML = this.preguntas.mostrar(this.selecionado)
                .plantilla((d)=>`
                    ${d.respuestaIngles} 
                `)   
    }
    verRandom(){
        let random = this.preguntas.t * Math.random()
        this.selecionar(parseInt(random))
    }
}