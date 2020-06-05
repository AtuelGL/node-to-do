const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completed = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('list', 'imprime en consola la lista de tareas por hacer')
    .command('create', 'Crea un elemento por hacer', {
        description
    })
    .command('update', 'Actualiza el estado completado de una tarea', {
        description,
        completed
    })
    .command('delete', 'Elimina un elemento por hacer', {
        description
    })
    .help()
    .argv;



module.exports = {
    argv
};