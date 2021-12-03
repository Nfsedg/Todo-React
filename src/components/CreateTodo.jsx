import React, { useContext } from "react";
import { newContext } from "../context/newContext";
import "../styles/createtodo.css";

function CreateTodo() {
    const { dispatch, ACTIONS } = useContext(newContext)
    const [textTodo, setTextTodo] = React.useState('')

    const saveTodoText = (text) => {
        setTextTodo(text.target.value)
    }
    const addingTodo = (text) => {
        dispatch({ type: ACTIONS.ADD_TODO, payload: { text: text } })
        setTextTodo('')
        debugger
    }
    
    return(
        <div className="create-todo"
        >
            <button 
                className="create-todo__button"
                onClick={() => {addingTodo(textTodo)}}
            >+</button>
            <input 
                onChange={saveTodoText}
                className="create-todo__input"
                placeholder="Create a new todo..."
                value={textTodo}
                onKeyDown={(value) => {
                    if(value.keyCode === 13) {
                        addingTodo(textTodo)
                    }
                }}
            />
        </div>
    )
}

export {CreateTodo}