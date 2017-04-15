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
    res.render('todos/index', {
        title: 'TODO Chat',
    });
};

exports.todoList = (req, res) => {
    models.Todo.findAll({
        order: 'id ASC'
    }).then((todos) => {
        res.json(todos);
    });
};

exports.destroy = (req, res) => {
    models.Todo.findById(req.params.id).then((todo) => {
        todo.destroy();
    }).then(() => {
        res.send('OK');
    });
};

exports.update = (req, res) => {
    models.Todo.findById(req.params.id).then((todo) => {
        todo.text = req.body.text;
        todo.save().then(() => {
            res.send(`${req.body.text}`);
        });
    });
};

