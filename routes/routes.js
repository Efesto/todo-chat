exports.register = function(app){
    var todos = require('./todos');

    app.post('/todos', todos.add);
    app.delete('/todos/:id', todos.destroy);
    app.get('/', todos.index);
};
