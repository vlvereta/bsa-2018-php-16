const state = {
  users: [
    {
      name: "Vlad",
      email: "vlad@example.com",
      avatar:
        "https://rawgit.com/vlvereta/bsa-2018-php-16/eaea953d5abbee50982590e9a3dc27611579a66a/src/assets/vlad.jpg"
    },
    {
      name: "Alex",
      email: "alex@example.com",
      avatar:
        "https://rawgit.com/vlvereta/bsa-2018-php-16/eaea953d5abbee50982590e9a3dc27611579a66a/src/assets/alex.jpg"
    },
    {
      name: "Luka",
      email: "luka@example.com",
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
