#!/usr/bin/env bash

node_modules/.bin/watchify -v -w -t [ babelify --presets [ react ] ] bin/App.js -o public/javascripts/app.js