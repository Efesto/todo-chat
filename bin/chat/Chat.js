const React = require('react');
const FormControl = require('react-bootstrap/lib/FormControl');

class Chat extends React.Component {
    constructor() {
        super();
        this.state = {messages: []};
    }

    sendMessage(event) {
        if (event.key == 'Enter') {
            let message = {
                body: event.target.value,
                sender: 'me'
            };

            this.setState({messages: this.state.messages.concat(message)});
            event.target.value = ''
        }
    }

    render() {
        return (
            <div>
                <h1>Chat</h1>
                <div className="chat-container">
                    {this.state.messages.map((message) => {
                        return (
                            <div className="message_container">
                                <span className={`message message_from-${message.sender}`}>{message.body}</span>
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