const React = require('react');
const TODOElement = require('./TODOElement');

class TODOList extends React.Component {

    constructor(){
        super();
        this.state = {todos: []};
    }

    componentDidMount() {
        this.update();
    }

    update() {
        fetch('/todos')
        .then((data) => data.json())
        .then((dataJson) => this.setState({todos: dataJson}))
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
                                deleteTODO={this.update()}
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