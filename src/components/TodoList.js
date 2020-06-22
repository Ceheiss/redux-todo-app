import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

const TodoList = ({ todos }) => {
  const renderTodos = todos.map((todo) => {
    return (
      <Todo
        completed={todo.completed}
        key={todo.id}
        id={todo.id}
        text={todo.text}
      />
    );
  });
  if (renderTodos.length === 0) {
    return <div>No Todos Left! (or right hahaha... sorry)</div>;
  } else {
    return renderTodos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(TodoList);
