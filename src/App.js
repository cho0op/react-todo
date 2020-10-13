import React from 'react';
import TodoList from './Todo/TodoList'



function App() {

  const [todos, setTodos] = React.useState([
    {id:1, completed: false, title: "сходить в магазин"},
    {id:2, completed: false, title: "полить цветы"},
    {id:3, completed: false, title: "полить цветы еще раз"},
  ])

  function toggleTodo(id){
    setTodos(
      todos.map(todo=>{
        if(todo.id===id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    )
  }
  
  return (
    <div className = "wrapper">
      <h1>React todo</h1>
      <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
    </div>
  );
}

export default App;
