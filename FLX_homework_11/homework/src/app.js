let todos = [];
let maxTasks = 10;
let rootNode = document.getElementById('list');
let btn = document.getElementById('submit');
let input = document.getElementById('add');
let one = 1,
    zero = 0;

function print() {
    rootNode.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        rootNode.innerHTML += todos[i].outerHTML;
    }
}

function change(task) {
    let s = document.querySelectorAll('.item');
    let array = Array.prototype.slice.call(s);
    let t = array.indexOf(task.parentNode.parentNode);
    todos[t].childNodes[one].childNodes[zero].innerHTML = 'check_box';
    print();
}

function clearTask(task) {
    let s = document.querySelectorAll('.item');
    let arr = Array.prototype.slice.call(s);
    let t = arr.indexOf(task.parentNode.parentNode);
    let one = 1;
    todos.splice(t, one);
    print();
}

function addTask() {
    if (todos.length < maxTasks) {
        let task = '<li class=\'item\' ' +
            '>  \n<div class=\'checkbox\'>' +
            '<i onclick=\'change(this)\' ' +
            'class=\'material-icons\'>check_box_outline_blank</i>' +
            '</div>\n   ' + '<div class=\'label\' >' +
            input.value + '</div>   ' +
            '   \n  <div class=\'delete\'>' +
            '<i onclick=\'clearTask(this)\'' +
            ' class=\'material-icons\'>' +
            'delete</i></div>\n         </li>';
        rootNode.innerHTML += task;
        todos.push(rootNode.lastChild);
        input.value = '';
        document.getElementById('error').innerHTML = '';
        input.removeAttribute('disabled');
    } else {
        input.setAttribute('disabled', '');
        document.getElementById('error').innerHTML = 'maximum item per list are created’ is printed';
        input.value = '';
    }
}



btn.addEventListener('click', addTask);