// import Vue from "vue";

const state = {
  albums: [
    {
      title: "Cats",
      preview:
        "https://rawgit.com/vlvereta/bsa-2018-php-16/01fc3b7c4f0107d641a1141c300102ee63639d93/src/assets/albums/cat-preview.jpeg",
      userId: 0
    },
    {
      title: "Dogs",
      preview:
        "https://rawgit.com/vlvereta/bsa-2018-php-16/01fc3b7c4f0107d641a1141c300102ee63639d93/src/assets/albums/dog-preview.jpg",
      userId: 1
    },
    {
      title: "Fish",
      preview:
        "https://rawgit.com/vlvereta/bsa-2018-php-16/01fc3b7c4f0107d641a1141c300102ee63639d93/src/assets/albums/fish-preview.jpeg",
      userId: 2
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
    checked.forEach(function(item, i, arr) {
      state.albums.forEach(function(item2, i2, arr2) {
        if (item2.userId === item) {
          albums.push(item2);
        }
      });
    });
    return albums;
  },

  getPreview: state => id => {
    var preview = state.albums[id].preview;
    return preview
      ? preview
      : "https://rawgit.com/vlvereta/bsa-2018-php-16/eaea953d5abbee50982590e9a3dc27611579a66a/src/assets/no-photo.png";
  }
};

const mutations = {
  ADD_ALBUM(state, album) {
    state.albums.push({
      title: album.title,
      preview: album.preview,
      userId: album.userId
    });
  },

  //   EDIT_USER(state, { id, data }) {
  //     const updatedUser = {
  //       name: data.name,
  //       email: data.email,
  //       avatar: data.avatar
  //     };

  //     Vue.set(state.users, id, updatedUser);
  //   },

  DELETE_ALBUM(state, id) {
    state.albums.splice(id, 1);
  }
};

const actions = {
  addAlbum({ context, commit }, data) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit("ADD_ALBUM", data);
        resolve();
      }, 250);
    });
  },

  //   editUser({ commit }, data) {
  //     return new Promise(resolve => {
  //       setTimeout(() => {
  //         commit("EDIT_USER", data);
  //         resolve();
  //       }, 250);
  //     });
  //   },

  deleteAlbum({ commit }, id) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit("DELETE_ALBUM", id);
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
