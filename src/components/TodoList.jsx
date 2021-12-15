import React, { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { newContext } from "../context/newContext";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import "../styles/todolist.css";

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}


function TodoList({children}) {
    const { deleteTodoSelect, getCompleteTodos, displayTodo } = useContext(newContext)

    return(
      <DragDropContext onDragEnd={(result) => console.log(result)}>
        <Droppable droppableId="todosDrop">
        {(droppableProvider) => 
          <ul {...droppableProvider.droppableProps} ref={droppableProvider.innerRef} className="todo-list">
            {
              displayTodo.map((todo, index) => 
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(draggableProvided) =>
                    (
                    <TodoItem 
                      draggableProvided={draggableProvided}

                      text={todo.text} 
                      key={todo.id}
                      deleteTodo={()=> deleteTodoSelect(todo.id)}
                      getCompleteTodos={() =>getCompleteTodos(todo.text)}
                    />)
                  }
                </Draggable>
                
              )
            }
            {droppableProvider.placeholder}
            {children}
          </ul>
        
        }
        </Droppable>
      </DragDropContext>
    )
}

export { TodoList }