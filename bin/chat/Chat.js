const React = require('react');
const FormControl = require('react-bootstrap/lib/FormControl');
class Chat extends React.Component {

    constructor() {
        super();

        let connection = new WebSocket(location.origin.replace(/^http/, 'ws'));
        connection.onopen = () => {
            console.log('Websocket connection open');
        };

        connection.onmessage = (message) => {
            console.log('message received');
            this.refreshMessages();
        };

        this.state = {
            messages: [],
            session: this.session(),
            connection: connection,
        };
    }

    componentDidMount() {
        this.refreshMessages();
    }

    refreshMessages() {
        fetch('/chat_messages')
            .then((data) => data.json())
            .then((dataJson) => this.setState({messages: dataJson}))
    }

    session() {
        let key = 'todo_chat-session_id';
        if (localStorage.getItem(key) == '') {
            localStorage.setItem(key, require('../Guid'));
        }

        return localStorage.getItem(key);
    }

    sendMessage(event) {
        if (event.key == 'Enter') {
            let message = {
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
            }).then(() => {
                    this.state.connection.send('ciao');
                    this.setState({messages: this.state.messages.concat(message)});
                }
            );

            event.target.value = '';
        }
    }

    senderClass(message) {
        if (message.senderId === this.state.session)
            return 'me';
        else
            return 'other';

    }

    render() {
        return (
            <div>
                <h1>Chat</h1>
                <div className="chat-container">
                    {this.state.messages.map((message) => {
                        return (
                            <div className="message_container">
                                <span
                                    className={`message message_from-${this.senderClass(message)}`}>{message.text}</span>
                            </div>
                        )
                    })}
                </div>
                <FormControl className="chat-text-form"
                             onKeyPress={this.sendMessage.bind(this)}/>
            </div>
        )
    }
}

module.exports = Chat;