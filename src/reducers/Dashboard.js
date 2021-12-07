const initialState = {
  users: [],
};

const Dashboard = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_USERS":
      const { users } = payload;
      return { users };
    case "DELETE_USER":
      const { deletedUser } = payload;
      const deletedUsers = state.users.filter(
        (user) => user._id !== deletedUser
      );
      return { users: deletedUsers };
    default:
      return state;
  }
};

export default Dashboard;

export const getUsersHelper = (data) => {
  return {
    type: "GET_USERS",
    payload: { users: data },
  };
};

export const deleteUserHelper = (data) => {
  return {
    type: "DELETE_USER",
    payload: { deletedUser: data },
  };
};
