export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    payload: text,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: 'DELETE_TODO',
    payload: todoId,
  };
};

export const toggleTodo = (todoId) => {
  return {
    type: 'TOGGLE_TODO',
    payload: todoId,
  };
};

export const updateText = (currentText) => {
  return {
    type: 'UPDATE_TEXT',
    payload: currentText,
  };
};
