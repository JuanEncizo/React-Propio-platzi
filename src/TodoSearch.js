
import React, { useState } from 'react';
import './TodoSearch.css'

function TodoSearch ({searchValue, setSearchValue}){
    

    return(

        <input placeholder="Cortar Ceboolla"
        className="TodoSearch"
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
            

        } }/>

       
    );
}

export {TodoSearch}