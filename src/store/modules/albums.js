// import Vue from "vue";

const state = {
  albums: [
    {
      title: "Cats",
      preview: "",
      userId: 1
    },
    {
      title: "Dogs",
      preview: "",
      userId: 2
    },
    {
      title: "Fish",
      preview: "",
      userId: 3
    }
  ]
};

const getters = {
  albumsAmount: state => {
    return state.albums.length;
  }
};

// const mutations = {
//   ADD_USER(state, user) {
//     state.users.push({
//       name: user.name,
//       email: user.email,
//       avatar: user.avatar
//     });
//   },

//   EDIT_USER(state, { id, data }) {
//     const updatedUser = {
//       name: data.name,
//       email: data.email,
//       avatar: data.avatar
//     };

//     Vue.set(state.users, id, updatedUser);
//   },

//   DELETE_USER(state, id) {
//     state.users.splice(id, 1);
//   }
// };

// const actions = {
//   addUser({ context, commit }, data) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         commit("ADD_USER", data);
//         resolve();
//       }, 250);
//     });
//   },

//   editUser({ commit }, data) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         commit("EDIT_USER", data);
//         resolve();
//       }, 250);
//     });
//   },

//   deleteUser({ commit }, id) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         commit("DELETE_USER", id);
//         resolve();
//       }, 250);
//     });
//   }
// };

export default {
  namespaced: true,
  state,
  getters
  // mutations,
  // actions
};
