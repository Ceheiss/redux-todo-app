import React from 'react';
import { addTodo, updateText } from '../actions';
import { connect } from 'react-redux';
import './AddTodoForm.css';

const AddTodoForm = ({ addTodo, updateText, text }) => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    updateText('');
  };

  const onChange = (e) => {
    updateText(e.target.value);
  };

  return (
    <div className="addTodo">
      <h3>Add a Todo:</h3>
      <input
        value={text}
        type="text"
        onChange={onChange}
        className="addTodoInput"
      />
      <button onClick={onFormSubmit} className="addTodoButton">
        Add Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { text: state.text };
};

export default connect(mapStateToProps, { addTodo, updateText })(AddTodoForm);
