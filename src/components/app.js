import React from 'react';
import Draggable from 'react-draggable';
import { Card, CardTitle } from 'react-toolbox/lib/card';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: -400, y: 200
      }
    };
  }

  onStart() {
    this.setState(prevState => {activeDrags: prevState.activeDrags + 1});
  }

  onStop() {
    this.setState(prevState => {activeDrags: prevState.activeDrags - 1});
  }

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
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
}
