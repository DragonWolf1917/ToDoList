const fs = require('fs');
const colors = require('colors');
let listaToDo = [];
const cargar = () => {
    try {
        listaToDo = require("../db/data.json");
    } catch (error) {
        listaToDo = [];
    }
}

const guardar = () => {

    const data = new Uint8Array(Buffer.from(JSON.stringify(listaToDo)));
    return fs.writeFile("./db/data.json", data, (e) => {
        if (e) throw e;
        else return console.log('se ha creado existosamente el data.json');
    });
}

const crear = (descripcion) => {
    let tarea = {
        descripcion,
        completado: false
    }
    cargar();
    listaToDo.push(tarea);

    return tarea
}

const actualizar = (descripcion, completado) => {
    cargar();

    switch (completado) {
        case 'si':
            completado = true;
            break;

        case 'no':
            completado = false;
            break;

        default:
            return console.log(`${completado.red} no es un comando válido\npuede utilizar: ` + "si".yellow + " o " + "no".yellow);
    }

    let index = listaToDo.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= -1) {
        listaToDo[index].completado = completado;
        console.log(`Se han actualizado los datos para: ${descripcion}`.bold.green);
    } else {
        return console.log(`\"${descripcion}\" no existe, por favor intente nuevamente`.bold.red);
    }

    console.log(listaToDo);

    guardar();
    getListado();
}

const getListado = () => {
    cargar();
    console.log("==========Tareas==========".magenta)
    for (let i in listaToDo) {
        console.log(listaToDo[i].descripcion);
        if (listaToDo[i].completado) {
            console.log("Estado " + "completo".green);
        } else {
            console.log("Estado " + "incompleto".red);
        }
    }
    console.log("==========================".magenta)
}

module.exports = {
    crear,
    guardar,
    getListado,
    actualizar
}