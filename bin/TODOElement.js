const React = require('react');

class TODOElement extends React.Component {
    deleteTodo() {
        fetch('/todos/' + this.props.todoId, {
            method: 'DELETE'
        })
        .then((res) => this.props.update);
    }

    render(){
        return(
            <tr>
                <td>{this.props.todoId}</td><td>{this.props.text}</td>
                <td><a href='#' onClick={this.deleteTodo.bind(this)}>Delete me</a></td>
            </tr>
        )
    }
}

TODOElement.PropTypes = {
    todoId: React.PropTypes.number,
    text: React.PropTypes.text,
    update: React.PropTypes.func.isRequired
};

module.exports = TODOElement;
