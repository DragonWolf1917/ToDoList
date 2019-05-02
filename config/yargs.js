let opts = {
    descripcion: {
        demmand: true,
        alias: "d",
        desc: "Descripcion de la tarea por hacer"
    },
    completado: {
        demmand: false,
        alias: "c",
        default: false,

        desc: "Marca cómo completa o incompleta a determinada tarea"
    }
}

const argv = require('yargs')
    .command('crear', 'Crear tarea', opts)
    .command('actualizar', 'actualizar estado de la tarea', opts)
    .command('listar', "lista todas las tareas")
    .command('borrar', "borra la tarea", {
        descripcion: {
            demmand: true,
            alias: "d"
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}