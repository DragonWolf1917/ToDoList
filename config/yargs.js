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
    .command('actualizar', 'actualizar estado del comando', opts)
    .command('listar', "lista todas las tareas")
    .help()
    .argv;

module.exports = {
    argv
}