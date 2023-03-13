import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const CreateAreaComponent = () => {
  const [toDoTasks, setToDoTasks] = useState([
    { id: 'task-1', content: 'Task 1', status: 'todo' },
    { id: 'task-2', content: 'Task 2', status: 'todo' },
    { id: 'task-3', content: 'Task 3', status: 'todo' },
  ]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newToDoTaskContent, setNewToDoTaskContent] = useState('');

  const handleNewToDoTaskChange = (event) => {
    setNewToDoTaskContent(event.target.value);
  };

  const handleNewToDoTaskSubmit = (event) => {
    event.preventDefault();
    const newTask = { id: `task-${toDoTasks.length + 1}`, content: newToDoTaskContent, status: 'todo' };
    setToDoTasks([...toDoTasks, newTask]);
    setNewToDoTaskContent('');
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    if (result.source.droppableId === result.destination.droppableId) {
      const items = Array.from(getTasks(result.source.droppableId));
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      updateTasks(result.destination.droppableId, items);
    } else {
      const sourceItems = Array.from(getTasks(result.source.droppableId));
      const [removedItem] = sourceItems.splice(result.source.index, 1);
      const destinationItems = Array.from(getTasks(result.destination.droppableId));
      destinationItems.splice(result.destination.index, 0, removedItem);
      updateTasks(result.source.droppableId, sourceItems);
      updateTasks(result.destination.droppableId, destinationItems);
    }
  };

  const getTasks = (status) => {
    switch (status) {
      case 'todo':
        return toDoTasks;
      case 'inProgress':
        return inProgressTasks;
      case 'completed':
        return completedTasks;
      default:
        return [];
    }
  }

  const updateTasks = (status, tasks) => {
    switch (status) {
      case 'todo':
        setToDoTasks(tasks);
        break;
      case 'inProgress':
        setInProgressTasks(tasks);
        break;
      case 'completed':
        setCompletedTasks(tasks);
        break;
      default:
        break;
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-3/4">
        <form onSubmit={handleNewToDoTaskSubmit}>
          <input
            type="text"
            className="w-full p-4 m-4 border border-gray-300 rounded-lg"
            placeholder="New task"
            value={newToDoTaskContent}
            onChange={handleNewToDoTaskChange}
          />
        </form>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="todo">
            {(provided) => (
              <div
                className="bg-gray-200 p-4 m-4 rounded-lg"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2 className="text-2xl font-bold">To Do</h2>
                {toDoTasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        className="bg-white p-4 m-4 rounded-lg"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {task.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="inProgress">
            {(provided) => (
              <div
                className="bg-gray-200 p-4 m-4 rounded-lg"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2 className="text-2xl font-bold">In Progress</h2>
                {inProgressTasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        className="bg-white p-4 m-4 rounded-lg"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {task.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="completed">
            {(provided) => (
              <div
                className="bg-gray-200 p-4 m-4 rounded-lg"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2 className="text-2xl font-bold">Completed</h2>
                {completedTasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        className="bg-white p-4 m-4 rounded-lg"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {task.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default CreateAreaComponent;
