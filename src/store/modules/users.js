import Vue from "vue";

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
  },

  getAvatar: state => id => {
    var avatar = state.users[id].avatar;
    return avatar
      ? avatar
      : "https://rawgit.com/vlvereta/bsa-2018-php-16/eaea953d5abbee50982590e9a3dc27611579a66a/src/assets/no-photo.png";
  }
};

const mutations = {
  ADD_USER(state, user) {
    state.users.push({
      name: user.name,
      email: user.email,
      avatar: user.avatar
    });
  },

  EDIT_USER(state, { id, data }) {
    const updatedUser = {
      name: data.name,
      email: data.email,
      avatar: data.avatar
    };

    Vue.set(state.users, id, updatedUser);
  },

  DELETE_USER(state, id) {
    state.users.splice(id, 1);
  }
};

const actions = {
  addUser({ context, commit }, data) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit("ADD_USER", data);
        resolve();
      }, 250);
    });
  },

  editUser({ commit }, data) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit("EDIT_USER", data);
        resolve();
      }, 250);
    });
  },

  deleteUser({ commit }, id) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit("DELETE_USER", id);
        resolve();
      }, 250);
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
