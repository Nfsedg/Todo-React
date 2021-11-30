import React from "react";
import { TodoHeader } from './components/TodoHeader';
import { CreateTodo } from './components/CreateTodo';
import { TodoList } from './components/TodoList';
import { TodoInfo } from './components/TodoInfo';
import { TodoFilter } from './components/TodoFilter';
import { newContext } from './context/newContext';
import { useTodos } from './context/useTodos';
import './App.css';

function App() {
  const todosContext = useTodos();

  return (
    <newContext.Provider value={todosContext}>
      <React.Fragment>
        <TodoHeader/>
        <CreateTodo/>
        <TodoList>
          <TodoInfo/>
        </TodoList>

        <TodoFilter/>
      </React.Fragment>
    </newContext.Provider>
  );
}

export default App;
