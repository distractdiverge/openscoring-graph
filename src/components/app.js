import React from 'react';
import Node from './node';

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
        <Node zIndex={100} dragHandlers={dragHandlers} title="Component 1" />
        <Node zIndex={100} dragHandlers={dragHandlers} title="Component 2" />
        <Node zIndex={100} dragHandlers={dragHandlers} title="Component 3" />
      </div>
    );
  }
}
