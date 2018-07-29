const state = {
  users: [
    {
      name: "Vlad",
      email: "vlad@example.com",
      avatar: ""
    },
    {
      name: "Alex",
      email: "alex@example.com",
      avatar: ""
    }
  ]
};

const getters = {
  usersAmount: state => {
    return state.users.length;
  }
};

export default {
  namespaced: true,
  state,
  getters
};
