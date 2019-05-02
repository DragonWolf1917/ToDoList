const { argv } = require("./config/yargs");
const toDo = require("./To-Do/ToDo");



const comando = argv._[0];
switch (comando) {
    case 'crear':
        tarea = toDo.crear(argv.descripcion);
        toDo.guardar();
        console.log(tarea);
        break;
    case 'listar':
        toDo.getListado();
        break;
    case 'actualizar':
        toDo.actualizar(argv.descripcion, argv.completado);
        break;
    default:
        console.log("no se ha introducido ningún comando válido");
        break;
}