import React from "react";
import "../styles/todoitem.css";

function TodoItem(props) {
    const [complete, setComplete] = React.useState(false)

    function finishTodo() {
        if(complete === false) {
            setComplete(true)
        }
    }
    return(
        <li className="todoList" draggable="true">
            <button 
                className="todoList__button--complete"
                onClick={() => {
                    props.getCompleteTodos()
                    finishTodo()
                }}            
            >V</button>
            <p className={`todoList__text ${complete && "todoList__button--completed"}`}>
            {props.text}
            </p>
            <button 
                className="todoList__button--delete"
                onClick={props.deleteTodo}
            >X</button>
        </li>
    )
}

export {TodoItem}