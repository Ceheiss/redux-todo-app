export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    payload: text,
  };
};

export const deleteTodo = (todo) => {
  return {
    type: 'DELETE_TODO',
    payload: todo,
  };
};

export const toggle = (todo) => {
  return {
    type: 'TOGGLE_TODO',
    payload: todo,
  };
};
