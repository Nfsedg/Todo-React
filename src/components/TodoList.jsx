import React, { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { newContext } from "../context/newContext";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import "../styles/todolist.css";

function TodoList({children}) {
    const { deleteTodoSelect, getCompleteTodos, displayTodo, dispatch, ACTIONS } = useContext(newContext)

    return(
      <DragDropContext onDragEnd={(result) => {
        const {source, destination} = result;
        if(!destination) {return;}
        if(source.index === destination.index && source.droppableId === destination.droppableId) {return;}

        dispatch({type: ACTIONS.REORDER_TODO, payload: { startIndex: source.index, endIndex: destination.index}})
      }}>
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