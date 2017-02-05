var models = require('../models');

exports.add = function(req, res) {
  models.Todo.create({
    text: req.body.text,
    chat_id: req.body.chat_id
  }).then(function () {
      res.send('OK');
  });
};

exports.index = function(req, res){
    models.Todo.findAll().then(function(todos) {
        res.render('todos/index', {
            title: 'Sequelize: Express Example',
            todos: todos
        });
    });
};

exports.destroy = function(req, res){
    models.Todo.findById(req.params.id).then(function(todo) {
        todo.destroy()
    }).then(function () {
        res.send('OK');
    });
};

