const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');

const colors = require('colors')



let command = argv._[0];
switch (command) {
    case 'create':
        let task = toDo.create(argv.description);
        console.log(task);

        break;
    case 'list':
        let list = toDo.getData();

        for (let task of list) {
            console.log('======Por Hacer======='.green);
            console.log(task.desc);
            console.log('Estado', task.completed);
            console.log('======================'.green);
        }
        break;
    case 'update':
        let updated = toDo.update(argv.description, argv.completed);
        console.log(updated);
        break;
    case 'delete':
        let deleted = toDo.deleteItem(argv.description);
        console.log(deleted);
        break;
    default:
        console.log('Command not valid');
}