import React, { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { newContext } from "../context/newContext";
import "../styles/todolist.css"

function TodoList({children}) {
    const { deleteTodo, getCompleteTodos, displayTodo } = useContext(newContext)
    return(
        <ul className="todo-list">
        {displayTodo.map(todo => {
          return <TodoItem 
            text={todo.text} 
            key={todo.id}
            deleteTodo={()=> {deleteTodo(todo.text)}}
            getCompleteTodos={() =>getCompleteTodos(todo.text)}
          />
        })}
        {children}
        </ul>
    )
}

export { TodoList }