

import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar cebola', completed: true},
  {text: 'Tomar el curso de intro a react.js', completed: true},
  {text: 'Llorar con la llorona', completed: true},
  
  
];


function App() {

  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;


  const searchedTodos = todos.filter(
    (todo) =>{
      return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    }
  );

  console.log('Los usuarios buscan Todos de ' + searchValue );

  return (
    <>

      <TodoCounter completed={completedTodos}  total={totalTodos}/>
      <TodoSearch
       searchValue = {searchValue}
       setSearchValue = {setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => 
        <TodoItem 
          key ={todo.text} 
          text = {todo.text}
          completed = {todo.completed}

        />)}
      </TodoList>

      <CreateTodoButton/>

    </>
  );
}

export default App;
