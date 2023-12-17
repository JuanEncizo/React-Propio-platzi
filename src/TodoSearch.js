import './TodoSearch.css'
import React, { useState } from 'react';

function TodoSearch(){

    const [ValorBuscado, SetValorBuscado] = useState('');

    console.log(ValorBuscado);

    



return(

    <input placeholder="Buscar Todos"
    value={ValorBuscado}
    className="TodoSearch"
    onChange={(event) => {SetValorBuscado(event.target.value);}} ></input>
);

}

export {TodoSearch};