import { createId } from '../helpers';

export const todoReducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(state);
      const newTodo = {
        id: createId(),
        text: action.payload,
        completed: false,
      };
      return [...state, newTodo];
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    case 'TOGGLE_TODO':
      console.log(action.payload);
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export const textReducer = (state = '', action = {}) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      state = action.payload;
      return state;
    default:
      return state;
  }
};
