import React, { useContext } from "react";
import { newContext } from "../context/newContext";
import "../styles/todoinfo.css";

function TodoInfo() {
    const { completeTodo, deleteCompletedTodo } = useContext(newContext)
   
    return(
        <li className="todoinfo">
            <span>{completeTodo} items left</span>
            <span
                onClick={deleteCompletedTodo}
            >Clear Completed</span>
        </li>
    );
}

export { TodoInfo }