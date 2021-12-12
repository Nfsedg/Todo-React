import React from "react";
import { FilterTodo } from "./buttons/FilterTodo";
import "../styles/todoitem.css";

function TodoItem({ text, getCompleteTodos, deleteTodo }) {
    const [complete, setComplete] = React.useState(false)

    function finishTodo() {
        setComplete(!complete)
    }

    return(
        <li className="todoList" draggable="true" onDragStart={e => console.log(e)} onDrag={e => console.log(e)} onDragEnd={e => console.log(e)}>
            <button 
                className="todoList__button--complete"
                onClick={() => {
                    getCompleteTodos()
                    finishTodo()
                }}            
            >
                {complete ? <FilterTodo/> : <span>V</span>}
            </button>
            <p className={complete ? "todoList__text--completed" : "todoList__text"}>
                {text}
            </p>
            <button 
                className="todoList__button--delete"
                onClick={deleteTodo}
            ></button>
        </li>
    )
}

export {TodoItem}