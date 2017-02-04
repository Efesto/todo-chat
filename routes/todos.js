var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.post('/', function(req, res) {
  models.Todo.create({
    text: req.body.text,
    chat_id: req.body.chat_id
  });

  res.send('OK');
});

router.get('/', function(req, res){
    models.Todo.findAll().then(function(todos) {
        res.render('todos/index', {
            title: 'Sequelize: Express Example',
            todos: todos
        });
    });

});

module.exports = router;
