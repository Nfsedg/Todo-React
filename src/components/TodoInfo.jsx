import React, { useContext } from "react";
import { newContext } from "../context/newContext";
import "../styles/todoinfo.css";

function TodoInfo() {
    const { completeTodo, dispatch, ACTIONS, setDisplayTodo, todoState } = useContext(newContext)
   
    return(
        <li className="todoinfo">
            <span>{completeTodo} items left</span>
            <span
                onClick={() => {dispatch({ type: ACTIONS.DELETE_COMPLETED_TODOS }); setDisplayTodo(todoState)}}
            >Clear Completed</span>
        </li>
    );
}

export { TodoInfo }