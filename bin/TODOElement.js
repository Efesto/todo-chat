const Button = require('react-bootstrap/lib/Button');
const Panel = require('react-bootstrap/lib/Panel');
const React = require('react');


class TODOElement extends React.Component {
    delete() {
        fetch('/todos/' + this.props.todoId, {
            method: 'DELETE'
        })
        .then((res) => this.props.onTodoRemove(this.props.todoId))
    }

    render() {
        return(
            <Panel>
                <Panel>{this.props.todoId} - {this.props.text}</Panel>
                <Button bsStyle="danger" onClick={this.delete.bind(this)}>Delete me</Button>
            </Panel>
        )
    }
}

TODOElement.PropTypes = {
    todoId: React.PropTypes.number,
    text: React.PropTypes.text
};

module.exports = TODOElement;
