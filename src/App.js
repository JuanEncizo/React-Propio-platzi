

import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import React from 'react';


const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'traer amiga', completed: false},
  {text: 'Jugar con el perro', completed: true},
  
];

function App() {

  return (
    <>

    <TodoCounter
      completed = {6}
      total ={10}
    />

   <TodoSearch/>

    <TodoList>
      {defaultTodos.map(todo => (
        <TodoItem 
          key = {todo.text}
          text = {todo.text}
          completed = {todo.completed}
         
        />

      ))}
   
      
    </TodoList>

    <CreateTodoButton/>
    



    </>
  );
}



export default App;
