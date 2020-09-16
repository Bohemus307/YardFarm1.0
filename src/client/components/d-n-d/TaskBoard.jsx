import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'; 
import initialData from './initial-data';
import Aux from '../Aux/Aux.jsx';
import Column from './d-n-d-components/column.jsx';
import Modal from '../Modal/Modal.jsx';
import TaskInput from '../TaskInput/TaskInput.jsx';
import classes from './TaskBoard.css';

const Container = styled.div`
  display: flex;
`;

const Trash = styled.div`
  padding: 8px;
  transisition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? 'white' : 'white')};
  flex-grow: 1;
  min-height: 100px;
`;

class TaskBoard extends React.Component {
  constructor(props) {
    super();

    this.state = {
      taskCounter: 1,
      taskAdded: false,
      tasks: {
       },
      columns: {
        'column-1': {
          id: 'column-1',
          title: 'To do',
          taskIds: [],
        },
        'column-2': {
          id: 'column-2',
          title: 'In Progress',
          taskIds: [],
        },
        'column-3': {
          id: 'column-3',
          title: 'Done',
          taskIds: [],
        },
      },
      columnOrder: ['column-1', 'column-2', 'column-3'],
    }
  };

  taskHandler = () => {
    this.setState({ taskAdded: true });
  }

  closeModal = () => {
    this.setState({ taskAdded: false });
  }

  taskRemove = () => {
    console.log('task removed');
  }

  taskadded = (text) => {
    // access task counter integer
    let { taskCounter } = this.state;
    // create new task id from counter
    let newTaskId = `task-${ taskCounter }`;
    // create new task
    const newTask = { [newTaskId]: { id: newTaskId, content: text} };
    // access tasks object
    const tasks = this.state.tasks;
    // combine task object with new task
    let newTasks = Object.assign({}, tasks, newTask)

    // create array of current ids
    let newTaskIds = this.state.columns['column-1'].taskIds.concat(newTaskId)
    // create access to columns
    const newColumns = {...this.state.columns}
    // set new ids array as array in columns at column 1
    newColumns['column-1'].taskIds = newTaskIds;

    // set new state 
    this.setState({
      taskCounter: this.state.taskCounter + 1,
      tasks: newTasks,
      columns: newColumns
    })

    this.closeModal();
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    console.log('result', result);
    if (destination.droppableId === 'Trash') {
      console.log('trash');
    }

    if (!destination) {
      return;
    }
    
    if (destination.droppableId === source.droppableId && 
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    // moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds); 
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    
    this.setState(newState);
  };

  render() {
    return(
      <Aux>
        <Modal show={this.state.taskAdded} modalClosed={this.closeModal}>
          <TaskInput taskadded={this.taskadded} />
        </Modal>
        <div className={classes.Board_control}>
          <input type="image" src="/images/plus.png" name="addTask" className={classes.Add_button} alt="add task" title="Add Task" onClick={this.taskHandler} />
          <span className={classes.Board_icon}>Task</span>
          {/* <input type="image" src="/images/plus.png" name="addColumn" className={classes.Add_button} alt="add Column" title="Add Column" />
          <span className={classes.Board_icon}>Column</span> */}
        </div>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Container>
          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId],);
        
            return <Column key= {column.id} column={column} tasks={tasks} />;
            })}
          </Container>
          <Droppable droppableId='Trash'>
          {(provided, snapshot) => (
            <Trash ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
              <input type="image" src="/images/trash.svg" name="trashTask" className={classes.Trash_button} alt="Trash Task" title="Trash Task" /> 
              {provided.placeholder}
            </Trash>
          )}
        </Droppable>
        </DragDropContext>
      </Aux>
    ); 
  }
}

export default TaskBoard;

 