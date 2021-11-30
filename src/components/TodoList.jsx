import React, { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { newContext } from "../context/newContext";
import "../styles/todolist.css"

function TodoList({children}) {
    const { todoState, deleteTodo, getCompleteTodos } = useContext(newContext)
    return(
        <ul className="todo-list">
        {todoState.map(todo => {
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