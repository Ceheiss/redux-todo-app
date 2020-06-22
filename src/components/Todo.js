import React from 'react';
import { deleteTodo, toggleTodo } from '../actions';
import { connect } from 'react-redux';
import './Todo.css';

const Todo = ({ text, id, deleteTodo, toggleTodo, completed }) => {
  return (
    <div className={completed ? 'completedTodo' : 'notCompletedTodo'}>
      <p>{text}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleTodo(id);
        }}
      >
        Toggle
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          deleteTodo(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default connect(null, { deleteTodo, toggleTodo })(Todo);
