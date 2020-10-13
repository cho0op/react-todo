import React from 'react'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        marginBottom: '.5rem',
        border: 'solid 1px black',
        borderRadius: '4px'
    },
    input:{
        marginRight: '1rem',
    }
}

function TodoItem({todo, index, onChange}){
    let classes = [];

    if (todo.completed){
        classes.push('done')
    }
    console.log(todo)

    
    return(
        <li style={styles.li}>
            <span  className={classes.join(' ')}>
                <input type="checkbox" style={styles.input} onChange={() => onChange(todo.id)}></input>
                <strong>{index+1}</strong>:
                &nbsp;
                {todo.title}
            </span>             
            <button className='rm'>&times;</button>
        </li>
    )
    
}

export default TodoItem