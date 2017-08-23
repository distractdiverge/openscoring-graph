import React from 'react';
import Draggable from 'react-draggable';
import { Card, CardTitle } from 'react-toolbox/lib/card';

export default function Node(props) {
  return (
    <Draggable zIndex={props.zIndex} {...props.dragHandlers}>
      <Card>
        <CardTitle title={props.title} />
      </Card>
    </Draggable>
  );
};
