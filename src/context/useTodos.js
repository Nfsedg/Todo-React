import React from "react";
let hardCodeTodo = [
  {id: '0', text: "Primer texto", completed: false},
  {id: '1', text: "Segundo texto", completed: false},
  {id: '2', text: "Tercero texto", completed: false},
  {id: '3', text: "Cuarto texto", completed: false},
  {id: '4', text: "Quinto texto", completed: false}
]
const initialTodos = hardCodeTodo;


const useTodos = () => {
  const ACTIONS = {
    ADD_TODO: 'add-todo',
    DELETE_COMPLETED_TODOS: 'delete-completed-todos',
    DELETE_TODO: 'delete-todo',
    REORDER_TODO: 'reorder_todo'
  }
  
  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  }

  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.text)]
      case ACTIONS.DELETE_COMPLETED_TODOS:
        return todos.filter(t => !t.completed)
      case ACTIONS.DELETE_TODO:
        return todos.filter(item => item.id !== action.payload)
      case ACTIONS.REORDER_TODO:
        return reorder(todos, action.payload.startIndex, action.payload.endIndex)
      default:
        return todos;
    }
  }

  const newTodo = (text) => {
    return { id: Date.now().toString(), text: text, completed: false }
  }
  const deleteTodoSelect = (id) => {
    dispatch({type: ACTIONS.DELETE_TODO, payload: id})
  }
  
  
  const [todoState, dispatch] = React.useReducer(reducer, initialTodos)
  const [displayTodo, setDisplayTodo] = React.useState(todoState)
  const [completeTodo, setCompletedTodo] = React.useState(0)
  
  React.useEffect(() => {
    function countFinishTodos() {
      let total = 0;
      for(let item of todoState) {
        if(item.completed === false) {
          total += 1;
        }
      }
      setCompletedTodo(total)
    }
    
    countFinishTodos()
    setDisplayTodo(todoState);
  }, [todoState])

  

  function getCompleteTodos(input) {
    const getIndex = todoState.findIndex(todo => todo.text === input)

    const newTodo = [...todoState]

    newTodo[getIndex].completed = true
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
      deleteCompletedTodo,
      dispatch,
      ACTIONS,
      displayTodo,
      displayAllTodo, 
      filterActiveTodo,
      filterCompletedTodo,
      setDisplayTodo,
      deleteTodoSelect
  }
}

export { useTodos }