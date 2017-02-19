const React = require('react');
const $ = require('jquery');

class TODOElement extends React.Component {
    deleteTodo() {
        $.ajax({
            type: 'DELETE',
            url: '/todos/' + this.props.todoId,
            success: () => {
                console.log('need to unmount component');
            }
        })
    }

    render(){
        return(
            <tr>
                <td>{this.props.todoId}</td><td>{this.props.text}</td>
                <td><a onClick={this.deleteTodo.bind(this)}>Delete me</a></td>
            </tr>
        )
    }
}

module.exports = TODOElement;