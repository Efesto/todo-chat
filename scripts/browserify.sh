#!/usr/bin/env bash

node_modules/.bin/browserify -t [ babelify --presets [ react ] ] bin/App.js -o public/javascripts/app.js