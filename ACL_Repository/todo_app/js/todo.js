/* this function gets the task from input */
function get_todos() {
    /*This creates an array of task that are inputed */
    var todos = new Array;
    /*this pulls the task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /*if the input is not null then JSON parse will communitcate with the web browser to make the task a javaScript object*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/*This function adds the inputed task to the get_todos function array*/
function add() {
    /*this line gets the value of the inputed task*/
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /*this adds a new task the end of the array*/
    todos.push(task);
    /* this converts the task input to a JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";

    show();
    return false;
}

/*this function removes a todo item from the array*/
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

/*this function keeps the task permanetyly displayed on the web page*/
function show() {
    /*this sets the task that was retrived as a variable*/
    var todos= get_todos();
    /*this sets up each task as an unordered list*/
    var html = '<ul>';
    /*this displays a task to the list in the order that it is inputed */
    for(var i=0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';
    /*this displays the task as a list on the web page*/
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

/*this display the inputed task when the add item button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*this will keep the inputs displayed even when the page is refreshed*/
show();