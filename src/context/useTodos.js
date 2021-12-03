import React from "react";
let hardCodeTodo = [
  {id: 0, text: "Primer texto", completed: false},
  {id: 1, text: "Segundo texto", completed: false},
  {id: 2, text: "Tercero texto", completed: false},
  {id: 3, text: "Cuarto texto", completed: false},
  {id: 4, text: "Quinto texto", completed: false}
]
const initialTodos = hardCodeTodo;


const useTodos = () => {
  const ACTIONS = {
    ADD_TODO: 'add-todo',
    DELETE_COMPLETED_TODOS: 'delete-completed-todos'
  }
  
  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.text)]
      case ACTIONS.DELETE_COMPLETED_TODOS:
        return todos.filter(t => !t.completed)
      default:
        return todos;
    }
  }
  
  const newTodo = (text) => {
    return { id: Date.now(), text: text, completed: false }
  }

  const [todoState, dispatch] = React.useReducer(reducer, initialTodos)
  const [displayTodo, setDisplayTodo] = React.useState(todoState)
  const [completeTodo, setCompletedTodo] = React.useState(0)

  React.useEffect(() => {
    countFinishTodos();
    setDisplayTodo(todoState);
  }, [todoState])

  const countFinishTodos = () => {
    let total = 0;
    for(let item of todoState) {
        if(item.completed === false) {
            total += 1;
        }
    }
    setCompletedTodo(total)
  }


  function getCompleteTodos(input) {
    const getIndex = todoState.findIndex(todo => todo.text === input)

    const newTodo = [...todoState]

    newTodo[getIndex].completed = true
    dispatch(newTodo)
  }

  const deleteTodo = (input) => {
    const getIndex = todoState.findIndex(todo => todo.text === input)

    const newTodo = [...todoState]

    newTodo.splice(getIndex, 1)
    dispatch(newTodo)
  }

  const deleteCompletedTodo = () => {
    const newTodo = []
    for(let item of todoState) {
        if(item.completed === false) {
          newTodo.push(item)
        }
    }
  }

  // **Filter functions**

  const filterActiveTodo = () => {
    const newTodo = []
    for(let item of todoState) {
        if(item.completed === false) {
          newTodo.push(item)
        }
    }
    setDisplayTodo(newTodo)
  }
  const filterCompletedTodo = () => {
    const newTodo = []
    for(let item of todoState) {
        if(item.completed === true) {
          newTodo.push(item)
        }
    }
    setDisplayTodo(newTodo)
  }
  
  const displayAllTodo = () => {
    setDisplayTodo(todoState)
  }


  return {
      todoState,
      completeTodo,
      getCompleteTodos,
      deleteTodo,
      deleteCompletedTodo,
      dispatch,
      ACTIONS,
      displayTodo,
      displayAllTodo, 
      filterActiveTodo,
      filterCompletedTodo,
      setDisplayTodo
  }
}

export { useTodos }