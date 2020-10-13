import React from 'react'
import TodoItem from './TodoItem'

const styles = {
    ul:{
        listStyle: 'none',
        margin: 0,
        padding:0,
    }
}

function TodoList(props){
    return (
        <ul style = {styles.ul}>
            {props.todos.map((todo, index)=>{
                return <TodoItem todo={todo} index={index} key={todo.id}></TodoItem>
            })}
        </ul>
    )
}

export default TodoList