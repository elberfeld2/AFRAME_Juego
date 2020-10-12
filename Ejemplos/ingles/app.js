
//Variables Globales
let controlador;

//Funciones Globales
async function dataJson(nombre){
    return await (await fetch(nombre)).json()
}

//Main 
async function main(app,fecha){
    let informacion = await dataJson("./info.json")//Extraemos informacion de un json
    const {Controlador} = await import("./module/Controlador.js")//Importamos el controlador
    controlador = new Controlador(informacion.Preguntas,app)//Creamos el controlador
    controlador.mostrarTodo()//Mostramos la informacion
    const {Reloj} = await import("./module/Reloj.js")//Importamos el controlador


    new Reloj(fecha)//Creamos el reloj
}

main(document.getElementById("app"),document.getElementById("fecha"))
