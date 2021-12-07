const initialState = {
  todos: [],
};

const User = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_USER_TODOS":
      const { todos } = payload;
      return { todos };
    case "DELETE_USER_TODO":
      const { deletedTodo } = payload;
      const deletedTodos = state.todos.filter(
        (todo) => todo._id !== deletedTodo._id
      );
      return { todos: deletedTodos };
    default:
      return state;
  }
};

export default User;

export const getUserTodosHelper = (data) => {
  return {
    type: "GET_USER_TODOS",
    payload: { todos: data },
  };
};

export const deleteUserTodoHelper = (data) => {
  return {
    type: "DELETE_USER_TODO",
    payload: { deletedTodo: data },
  };
};
