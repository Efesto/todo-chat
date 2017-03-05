const React = require('react');
const TODOElement = require('./TODOElement');

class TODOList extends React.Component {

    constructor(){
        super();
        this.state = {todos: []};
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList() {
        fetch('/todos')
        .then((data) => data.json())
        .then((dataJson) => this.setState({todos: dataJson}))
    }

    onTodoRemove(node) {
        //have to remove node from state
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
                            return <TODOElement
                                key={todo.id}
                                todoId={todo.id}
                                text={todo.text}
                                onUpdate={this.onUpdate.bind(this)}
                            />;
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

module.exports = TODOList;