import React from 'react';
import { deleteTodo, toggleTodo } from '../actions';
import { connect } from 'react-redux';
import './Todo.css';

const Todo = ({ text, id, deleteTodo, toggleTodo, completed }) => {
  return (
    <div className={`todo ${completed ? 'completedTodo' : 'notCompletedTodo'}`}>
      <p>{text}</p>
      <div>
        <button
          className="todoBtnToggle"
          onClick={(e) => {
            e.preventDefault();
            toggleTodo(id);
          }}
        >
          Toggle
        </button>
        <button
          className="todoBtnDelete"
          onClick={(e) => {
            e.preventDefault();
            deleteTodo(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default connect(null, { deleteTodo, toggleTodo })(Todo);
