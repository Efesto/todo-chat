import Button from 'react-bootstrap/lib/Button'
import Panel from 'react-bootstrap/lib/Panel'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import FormControl from 'react-bootstrap/lib/FormControl'
import React from 'react'


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

    updateTextOnEnter(event) {
        if (event.key === 'Enter') {
            this.updateText(event);
        }
    }

    updateText(event) {
        let value = event.target.value;
        this.setState({text: value});

        fetch('/todos/' + this.props.todoId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'text': value,
            })
        }).then((res) => this.toggleEditMode())
    }

    text() {
        return this.state.text === null ? this.props.text : this.state.text;
    }

    render() {
        return(
            <Panel>
                <Grid>
                    <Row>
                        <Col xs={6} >
                            {this.state.editMode ? (
                                    <FormControl onKeyPress={this.updateTextOnEnter.bind(this)} defaultValue={this.text()}/>
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
