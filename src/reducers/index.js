export const todoReducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = { id: 1, text: action.payload, completed: false };
      console.log('Succesfully added: ', newTodo);
      return [...state, newTodo];
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id === action.payload.todo.id);
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.payload.todo.id) {
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
