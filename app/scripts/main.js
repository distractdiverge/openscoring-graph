import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

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
                    <div className="box">Component 1</div>
                </Draggable>
                <Draggable zIndex={100} {...dragHandlers}>
                    <div className="box">Component 2</div>
                </Draggable>
                <Draggable zIndex={100} {...dragHandlers}>
                    <div className="box">Component 3</div>
                </Draggable>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
