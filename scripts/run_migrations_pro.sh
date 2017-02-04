#/bin/bash

heroku run "node_modules/.bin/sequelize db:migrate" --app todo-chat