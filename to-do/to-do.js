const fs = require('fs');


let listToDo = [];

const loadData = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
};

const saveData = () => {
    let data = JSON.stringify(listToDo);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
};

const create = (desc) => {
    loadData();
    let toDo = {
        desc,
        completed: false
    };
    listToDo.push(toDo);
    saveData();

    return toDo;
};

const getData = () => {
    loadData();
    return listToDo
};

const update = (desc, completed) => {
    loadData();
    let index = listToDo.findIndex(task => task.desc === desc);
    if (index >= 0) {
        listToDo[index].completed = completed;
        saveData();
        return true
    } else {
        return false
    }
};

const deleteItem = (desc) => {
    loadData();
    let newList = listToDo.filter(task => task.desc !== desc);
    if (newList.length === listToDo.length) {
        return false
    } else {
        listToDo = newList;
        saveData();
        return true;
    }
}


module.exports = {
    create,
    getData,
    update,
    deleteItem
}