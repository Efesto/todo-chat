const React = require('react');
const ReactDOM = require('react-dom');
const TODOList = require('./TODOList');
const Chat = require('./chat/Chat');
const Grid = require('react-bootstrap/lib/Grid');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');

ReactDOM.render(
        <Grid>
            <Row>
                <Col xs={12} md={6}>
                    <Chat />
                </Col>
                <Col xs={12} md={6}>
                    <TODOList />
                </Col>
                </Row>
        </Grid>,
    document.getElementById('Container')
);