// import Vue from "vue";

const state = {
  albums: [
    {
      title: "Cats",
      preview:
        "https://rawgit.com/vlvereta/bsa-2018-php-16/01fc3b7c4f0107d641a1141c300102ee63639d93/src/assets/albums/cat-preview.jpeg",
      userId: 1
    },
    {
      title: "Dogs",
      preview:
        "https://rawgit.com/vlvereta/bsa-2018-php-16/01fc3b7c4f0107d641a1141c300102ee63639d93/src/assets/albums/dog-preview.jpg",
      userId: 2
    },
    {
      title: "Fish",
      preview:
        "https://rawgit.com/vlvereta/bsa-2018-php-16/01fc3b7c4f0107d641a1141c300102ee63639d93/src/assets/albums/fish-preview.jpeg",
      userId: 3
    }
  ]
};

const getters = {
  getCheckedAmount: state => checked => {
    if (!checked.length) return state.albums.length;

    return checked.length;
  },

  getCheckedAlbums: state => checked => {
    if (!checked.length) return state.albums;

    var albums = [];
    checked.sort();
    checked.forEach(item => albums.push(state.albums[item]));
    return albums;
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
