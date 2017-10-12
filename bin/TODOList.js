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
        .then((dataJson) => this.setTodos(dataJson));
    }

    onTodoRemove(todoId) {
        this.setTodos(this.state.todos.filter((todo) => {return todo.id != todoId}));
    }

    setTodos(todos) {
        this.setState({todos: todos});
    }

    render(){
        return (
            <div>
                <h1>TODOs</h1>
                {this.state.todos.map((todo) => {
                    return <TODOElement
                        key={todo.id}
                        todoId={todo.id}
                        text={todo.text}
                        onTodoRemove={this.onTodoRemove.bind(this)}
                    />;
                    })
                }
            </div>
        );
    }
}

module.exports = TODOList;
