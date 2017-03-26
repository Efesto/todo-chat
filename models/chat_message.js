'use strict';
module.exports = function(sequelize, DataTypes) {
  var ChatMessage = sequelize.define('ChatMessage', {
    text: DataTypes.STRING,
      senderId: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ChatMessage;
};