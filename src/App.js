
import './App.css';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import React from 'react';
function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={ 16}  total={25}/>
      <TodoSearch/>

      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

      <CreateTodoButton/>

    </React.Fragment>
  );
}

export default App;
