/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TODOList = __webpack_require__(3);

var _TODOList2 = _interopRequireDefault(_TODOList);

var _Chat = __webpack_require__(11);

var _Chat2 = _interopRequireDefault(_Chat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
    Grid,
    null,
    _react2.default.createElement(
        Row,
        null,
        _react2.default.createElement(
            Col,
            { xs: 12, md: 6 },
            _react2.default.createElement(_Chat2.default, null)
        ),
        _react2.default.createElement(
            Col,
            { xs: 12, md: 6 },
            _react2.default.createElement(_TODOList2.default, null)
        )
    )
), document.getElementById('Container'));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TODOElement = __webpack_require__(4);

var _TODOElement2 = _interopRequireDefault(_TODOElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TODOList = function (_React$Component) {
    _inherits(TODOList, _React$Component);

    function TODOList() {
        _classCallCheck(this, TODOList);

        var _this = _possibleConstructorReturn(this, (TODOList.__proto__ || Object.getPrototypeOf(TODOList)).call(this));

        _this.state = { todos: [] };
        return _this;
    }

    _createClass(TODOList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.refreshList();
        }
    }, {
        key: 'refreshList',
        value: function refreshList() {
            var _this2 = this;

            fetch('/todos').then(function (data) {
                return data.json();
            }).then(function (dataJson) {
                return _this2.setTodos(dataJson);
            });
        }
    }, {
        key: 'onTodoRemove',
        value: function onTodoRemove(todoId) {
            this.setTodos(this.state.todos.filter(function (todo) {
                return todo.id !== todoId;
            }));
        }
    }, {
        key: 'setTodos',
        value: function setTodos(todos) {
            this.setState({ todos: todos });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'TODOs'
                ),
                this.state.todos.map(function (todo) {
                    return _react2.default.createElement(_TODOElement2.default, {
                        key: todo.id,
                        todoId: todo.id,
                        text: todo.text,
                        onTodoRemove: _this3.onTodoRemove.bind(_this3)
                    });
                })
            );
        }
    }]);

    return TODOList;
}(_react2.default.Component);

module.exports = TODOList;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Button = __webpack_require__(5);

var _Button2 = _interopRequireDefault(_Button);

var _Panel = __webpack_require__(6);

var _Panel2 = _interopRequireDefault(_Panel);

var _Grid = __webpack_require__(7);

var _Grid2 = _interopRequireDefault(_Grid);

var _Row = __webpack_require__(8);

var _Row2 = _interopRequireDefault(_Row);

var _Col = __webpack_require__(9);

var _Col2 = _interopRequireDefault(_Col);

var _FormControl = __webpack_require__(10);

var _FormControl2 = _interopRequireDefault(_FormControl);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TODOElement = function (_React$Component) {
    _inherits(TODOElement, _React$Component);

    function TODOElement() {
        _classCallCheck(this, TODOElement);

        var _this = _possibleConstructorReturn(this, (TODOElement.__proto__ || Object.getPrototypeOf(TODOElement)).call(this));

        _this.state = { editMode: false };
        return _this;
    }

    _createClass(TODOElement, [{
        key: 'delete',
        value: function _delete() {
            var _this2 = this;

            fetch('/todos/' + this.props.todoId, {
                method: 'DELETE'
            }).then(function (res) {
                return _this2.props.onTodoRemove(_this2.props.todoId);
            });
        }
    }, {
        key: 'toggleEditMode',
        value: function toggleEditMode() {
            this.setState({ editMode: !this.state.editMode });
        }
    }, {
        key: 'updateTextOnEnter',
        value: function updateTextOnEnter(event) {
            if (event.key === 'Enter') {
                this.updateText(event);
            }
        }
    }, {
        key: 'updateText',
        value: function updateText(event) {
            var _this3 = this;

            var value = event.target.value;
            this.setState({ text: value });

            fetch('/todos/' + this.props.todoId, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'text': value
                })
            }).then(function (res) {
                return _this3.toggleEditMode();
            });
        }
    }, {
        key: 'text',
        value: function text() {
            return this.state.text === null ? this.props.text : this.state.text;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Panel2.default,
                null,
                _react2.default.createElement(
                    _Grid2.default,
                    null,
                    _react2.default.createElement(
                        _Row2.default,
                        null,
                        _react2.default.createElement(
                            _Col2.default,
                            { xs: 6 },
                            this.state.editMode ? _react2.default.createElement(_FormControl2.default, { onKeyPress: this.updateTextOnEnter.bind(this), defaultValue: this.text() }) : this.props.todoId + ' - ' + this.text()
                        ),
                        _react2.default.createElement(
                            _Col2.default,
                            { xs: 6 },
                            _react2.default.createElement(
                                _Button2.default,
                                { bsStyle: 'primary', onClick: this.toggleEditMode.bind(this) },
                                'Edit'
                            ),
                            _react2.default.createElement(
                                _Button2.default,
                                { bsStyle: 'danger', onClick: this.delete.bind(this) },
                                'Delete'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return TODOElement;
}(_react2.default.Component);

TODOElement.PropTypes = {
    todoId: _react2.default.PropTypes.number,
    text: _react2.default.PropTypes.text
};

module.exports = TODOElement;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Button");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Panel");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Grid");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Row");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Col");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/FormControl");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chat = function (_React$Component) {
    _inherits(Chat, _React$Component);

    _createClass(Chat, [{
        key: 'guid',
        value: function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }

            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }
    }]);

    function Chat() {
        _classCallCheck(this, Chat);

        var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this));

        var connection = new WebSocket(location.origin.replace(/^http/, 'ws'));
        connection.onopen = function () {
            console.log('Websocket connection open');
        };

        connection.onmessage = function (message) {
            console.log('message received');
            _this.refreshMessages();
        };

        _this.state = {
            messages: [],
            session: _this.session(),
            connection: connection
        };
        return _this;
    }

    _createClass(Chat, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.refreshMessages();
        }
    }, {
        key: 'refreshMessages',
        value: function refreshMessages() {
            var _this2 = this;

            fetch('/chat_messages').then(function (data) {
                return data.json();
            }).then(function (dataJson) {
                return _this2.setState({ messages: dataJson });
            });
        }
    }, {
        key: 'session',
        value: function session() {
            var key = 'todo_chat-session_id';
            console.log(localStorage.getItem(key));
            if (localStorage.getItem(key) === null) {
                localStorage.setItem(key, this.guid());
            }

            return localStorage.getItem(key);
        }
    }, {
        key: 'sendMessage',
        value: function sendMessage(event) {
            var _this3 = this;

            if (event.key === 'Enter') {
                var message = {
                    text: event.target.value,
                    senderId: this.state.session
                };

                fetch('/chat_messages', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'text': message.text,
                        'senderId': message.senderId
                    })
                }).then(function () {
                    _this3.state.connection.send('ciao');
                    _this3.setState({ messages: _this3.state.messages.concat(message) });
                });

                event.target.value = '';
            }
        }
    }, {
        key: 'senderClass',
        value: function senderClass(message) {
            if (message.senderId === this.state.session) return 'me';else return 'other';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'Chat'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'chat-container' },
                    this.state.messages.map(function (message) {
                        return _react2.default.createElement(
                            'div',
                            { className: 'message_container' },
                            _react2.default.createElement(
                                'span',
                                {
                                    className: 'message message_from-' + _this4.senderClass(message) },
                                message.text
                            )
                        );
                    })
                ),
                _react2.default.createElement(FormControl, { className: 'chat-text-form',
                    onKeyPress: this.sendMessage.bind(this) })
            );
        }
    }]);

    return Chat;
}(_react2.default.Component);

module.exports = Chat;

/***/ })
/******/ ]);