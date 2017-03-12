exports.register = (app) => {
    let todos = require('./todos');

    app.post('/todos', todos.add);
    app.delete('/todos/:id', todos.destroy);
    app.get('/', todos.index);
    app.get('/todos', todos.todoList);
    app.post('/todos/:id', todos.update);
};
