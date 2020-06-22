import React from 'react';
import { addTodo, updateText } from '../actions';
import { connect } from 'react-redux';

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
    <div>
      <p>Add a Todo:</p>
      <input value={text} type="text" onChange={onChange} />
      <button onClick={onFormSubmit}>Add Todo</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { text: state.text };
};

export default connect(mapStateToProps, { addTodo, updateText })(AddTodoForm);
