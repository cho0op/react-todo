import React from 'react'

function TodoItem({todo, index}){
    return(
        <li>{index+1}: {todo.title}</li>
    )
    
}

export default TodoItem