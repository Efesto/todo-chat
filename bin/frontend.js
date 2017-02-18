require('react');
require('react-dom');
require('jsx-transform');
let $ = require('jquery');

window.DeleteTodo = (el, post_id) => {
    $.ajax({
        type: 'DELETE',
        url: '/todos/' + post_id,
        success: () => {
            window.RefreshTodoList();
        }
    })
};

window.RefreshTodoList = () => {
    let list = $("#todoList");

    $.ajax({
        url: '/todos',
        success: (data) => {
            $(list).empty();
            data.forEach((todo) => {
                $(list).append(`<tr><td>${todo.id}</td><td>${todo.text}</td></tr>`);
                $(list).append(`<a onclick='window.DeleteTodo(this, ${todo.id})'>Delete me</a>`);
            });
        }
    })
};


