import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 8px;
  padding: 4px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? 'lightgrey' : 'white')};
`;
export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
          // these props need to b applied to component that moves
            {...provided.draggableProps}
          // component that u use to control entire component
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {this.props.task.content}
            <input type="image" src="/images/close.png" name="removeTask" alt="remove task" title="Remove Task" />
          </Container>
        )}
      </Draggable>
    );
  }
}
