exports.register = function(app){
    var index = require('./index');
    var todos = require('./todos');

    app.get('/', index.index);
    app.post('/todos', todos.add);
    app.get('/todos', todos.index);
};
