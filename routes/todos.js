var models = require('../models');

exports.add = function(req, res) {
  models.Todo.create({
    text: req.body.text,
    chat_id: req.body.chat_id
  });

  res.send('OK');
};

exports.index = function(req, res){
    models.Todo.findAll().then(function(todos) {
        res.render('todos/index', {
            title: 'Sequelize: Express Example',
            todos: todos
        });
    });
};

