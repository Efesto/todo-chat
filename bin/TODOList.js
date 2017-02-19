const React = require('react');
const TODOElement = require('./TODOElement');
const $ = require('jquery');

class TODOList extends React.Component {

    constructor(){
        super();
        this.state = {todos: []};
    }

    componentDidMount() {
        this.refreshState();
    }

    refreshState() {
        console.log('refresh state');
            $.ajax({
                url: '/todos',
                success: (data) => {
                    this.setState({todos: data});
                }
            })
    }

    render(){
        return (
            <div>
                <h1>I am TODOList</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th><th>Text</th>
                        </tr>
                        {this.state.todos.map((todo) => {
                            return <TODOElement todoId={todo.id} text={todo.text}/>;
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

module.exports = TODOList;