let models = require('../models');

exports.index = (req, res) => {
    models.ChatMessage.findAll({
        order: '"createdAt" ASC'
    }).then((messages) => {
        res.json(messages)
    })
};

exports.add = (req, res) => {
    models.ChatMessage.create({
        text: req.body.text,
        senderId: req.body.senderId
    }).then(() => {
        res.send('OK');
    });
};
