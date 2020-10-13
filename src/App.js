import React from 'react';
import TodoList from './Todo/TodoList'

const todos = [
  {id:1, completed: false, title: "сходить в магазин"},
  {id:2, completed: false, title: "полить цветы"},
  {id:2, completed: false, title: "полить цветы"},
]

function App() {
  return (
    <div className = "wrapper">
      <h1>React todo</h1>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
