let models = require('../models');

exports.add = (req, res) => {
  models.Todo.create({
    text: req.body.text,
    chat_id: req.body.chat_id
  }).then(() => {
      res.send('OK');
  });
};

exports.index = (req, res) => {
    models.Todo.findAll().then((todos) => {
        res.render('todos/index', {
            title: 'Sequelize: Express Example',
            todos: todos
        });
    });
};

exports.todoList = (req, res) => {
    models.Todo.findAll().then((todos) => {
        res.json(todos)
    })
};

exports.destroy = (req, res) => {
    models.Todo.findById(req.params.id).then((todo) => {
        todo.destroy()
    }).then(() => {
        res.send('OK');
    });
};

