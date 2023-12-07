import './TodoCounter.css';

function TodoCounter({total, completed}){
    return(
        <h1>has completado {completed} de {total} todos</h1>
    );
}

export {TodoCounter};