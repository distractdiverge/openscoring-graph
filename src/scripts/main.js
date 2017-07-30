import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

const App = React.createClass({
    getInitialState: function() {
        return {
            activeDrags: 0,
            deltaPosition: {
                x: 0, y: 0
            },
            controlledPosition: {
                x: -400, y: 200
            }
        };
    },
    onStart: function() {
        this.setState({activeDrags: ++this.state.activeDrags});
    },
    onStop: function() {
        this.setState({activeDrags: --this.state.activeDrags});
    },
    render: function() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        return (
            <div>
                <h1>Openscoring Graph</h1>
                <Draggable zIndex={100} {...dragHandlers}>
                    <Card>
                        <CardTitle title="Component 1"/>
                    </Card>
                </Draggable>
                <Draggable zIndex={100} {...dragHandlers}>
                    <Card>
                        <CardTitle title="Component 2"/>
                    </Card>
                </Draggable>
                <Draggable zIndex={100} {...dragHandlers}>
                    <Card>
                        <CardTitle title="Component 3"/>
                    </Card>
                </Draggable>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
