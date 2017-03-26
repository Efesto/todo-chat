exports.register = (app) => {
    let todos = require('./todos');
    let chatMessages = require('./chat_messages');

    app.post('/todos', todos.add);
    app.delete('/todos/:id', todos.destroy);
    app.get('/', todos.index);
    app.get('/todos', todos.todoList);
    app.post('/todos/:id', todos.update);

    app.get('/chat_messages', chatMessages.index);
    app.post('/chat_messages', chatMessages.add);
};
