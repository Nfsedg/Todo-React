import React from "react";
import { newContext } from "../context/newContext";
import "../styles/todofilter.css";

function TodoFilter() {
    const { displayAllTodo, filterActiveTodo, filterCompletedTodo } = React.useContext(newContext)

    return(
        <div className="todofilter">
            <p onClick={displayAllTodo}>All</p>
            <p onClick={filterActiveTodo}>Active</p>
            <p onClick={filterCompletedTodo}>Completed</p>
        </div>  
    )
}

export { TodoFilter }