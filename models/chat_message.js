module.exports = (sequelize, DataTypes) => {
    var ChatMessage = sequelize.define('ChatMessage', {
    text: DataTypes.STRING,
      senderId: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return ChatMessage;
};