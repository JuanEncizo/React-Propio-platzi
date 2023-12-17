

import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { Test } from './Test';
import React from 'react';



const defaultTodos = [
  {text: 'Cortar cebolla', completed: true, test: false},
  {text: 'traer amiga', completed: false, test: true},
  {text: 'Jugar con el perro', completed: false, test: true},
  
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
          test = {todo.test}
        />
      ))}
   
      
    </TodoList>

    <CreateTodoButton/>

    {/* <Test/> */}

    
    



    </>
  );
}



export default App;
