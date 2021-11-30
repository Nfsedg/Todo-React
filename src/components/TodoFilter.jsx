import React from "react";
import { newContext } from "../context/newContext";
import "../styles/todofilter.css";

function TodoFilter() {
    const { dispatch, ACTIONS } = React.useContext(newContext)

    return(
        <div className="todofilter">
            <p onClick={() => dispatch({ type: ACTIONS.ALL_TODOS })}>All</p>
            <p onClick={() => dispatch({ type: ACTIONS.ACTIVE_TODOS })}>Active</p>
            <p onClick={() => dispatch({ type: ACTIONS.COMPLETE_TODO })}>Completed</p>
        </div>  
    )
}

export { TodoFilter }