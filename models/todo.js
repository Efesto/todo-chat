module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define('Todo', {
    text: DataTypes.STRING,
    chat_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Todo;
};
