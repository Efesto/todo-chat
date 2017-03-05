const React = require('react');

class TODOElement extends React.Component {
    delete() {
        fetch('/todos/' + this.props.todoId, {
            method: 'DELETE'
        })
        .then((res) => this.props.onTodoRemove(this));
    }

    render(){
        return(
            <tr>
                <td>{this.props.todoId}</td><td>{this.props.text}</td>
                <td><a href='#' onClick={this.delete.bind(this)}>Delete me</a></td>
            </tr>
        )
    }
}

TODOElement.PropTypes = {
    todoId: React.PropTypes.number,
    text: React.PropTypes.text
};

module.exports = TODOElement;
