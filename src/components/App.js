import React from 'react';
import './App.css';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <h1>Sup brah</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
