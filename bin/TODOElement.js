const Button = require('react-bootstrap/lib/Button');
const Panel = require('react-bootstrap/lib/Panel');
const Grid = require('react-bootstrap/lib/Grid');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');
const FormControl = require('react-bootstrap/lib/FormControl');
const React = require('react');


class TODOElement extends React.Component {
    constructor(){
        super();
        this.state = {editMode: false};
    }

    delete() {
        fetch('/todos/' + this.props.todoId, {
            method: 'DELETE'
        })
        .then((res) => this.props.onTodoRemove(this.props.todoId))
    }

    toggleEditMode() {
        this.setState({editMode: !this.state.editMode});
    }

    updateText(event) {
        let value = event.target.value;
        this.setState({text: value});

        //TODO update text
    }

    text() {
        return this.state.text == undefined ? this.props.text : this.state.text;
    }

    render() {
        return(
            <Panel>
                <Grid>
                    <Row>
                        <Col xs={6} >
                            {this.state.editMode ? (
                                    <FormControl onChange={this.updateText.bind(this)} defaultValue={this.text()}/>
                                ) : (
                                    `${this.props.todoId} - ${this.text()}`
                                )}
                        </Col>
                        <Col xs={6} >
                            <Button bsStyle="primary" onClick={this.toggleEditMode.bind(this)}>Edit</Button>
                            <Button bsStyle="danger" onClick={this.delete.bind(this)}>Delete</Button>
                        </Col>
                    </Row>
                </Grid>
            </Panel>
        )
    }
}

TODOElement.PropTypes = {
    todoId: React.PropTypes.number,
    text: React.PropTypes.text
};

module.exports = TODOElement;
