import React from 'react';
import  './TodoItem.css' ;


function TodoItem(props){
    return(
      
    <li className="TodoTest">
        <span>V</span>
        <p>{props.text}</p>
        <span>X</span>
    </li>
    
  
    );
  }

  export {TodoItem};