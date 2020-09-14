/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task.jsx';

const Container = styled.div`
  margin: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 4px;
  margin: 0px 0px;
`;
const TaskList = styled.div`
  padding: 8px;
  transisition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? 'white' : 'white')};
  flex-grow: 1;
  min-height: 100px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <TaskList ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}
