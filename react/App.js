import React from 'react';
import ReactDOM from 'react-dom';
import TODOList from './TODOList';
import Chat from './chat/Chat';

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