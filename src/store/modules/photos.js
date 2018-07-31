const state = {
  photos: [
    {
      id: 0,
      title: "cat-1",
      imgUrl:
        "https://rawgit.com/vlvereta/bsa-2018-php-16/01fc3b7c4f0107d641a1141c300102ee63639d93/src/assets/albums/cat-preview.jpeg",
      albumId: 0
    },
    {
      id: 1,
      title: "cat-2",
      imgUrl:
        "https://rawgit.com/vlvereta/bsa-2018-php-16/01fc3b7c4f0107d641a1141c300102ee63639d93/src/assets/albums/cat-preview.jpeg",
      albumId: 0
    },
    {
      id: 2,
      title: "cat-3",
      imgUrl:
        "https://rawgit.com/vlvereta/bsa-2018-php-16/01fc3b7c4f0107d641a1141c300102ee63639d93/src/assets/albums/cat-preview.jpeg",
      albumId: 0
    },
    {
      id: 4,
      title: "dog-1",
      imgUrl:
        "https://rawgit.com/vlvereta/bsa-2018-php-16/01fc3b7c4f0107d641a1141c300102ee63639d93/src/assets/albums/dog-preview.jpg",
      albumId: 1
    },
    {
      id: 5,
      title: "dog-2",
      imgUrl:
        "https://rawgit.com/vlvereta/bsa-2018-php-16/01fc3b7c4f0107d641a1141c300102ee63639d93/src/assets/albums/dog-preview.jpg",
      albumId: 1
    },
    {
      id: 6,
      title: "fish-1",
      imgUrl:
        "https://rawgit.com/vlvereta/bsa-2018-php-16/01fc3b7c4f0107d641a1141c300102ee63639d93/src/assets/albums/dog-preview.jpg",
      albumId: 2
    },
    {
      id: 7,
      title: "fish-2",
      imgUrl:
        "https://rawgit.com/vlvereta/bsa-2018-php-16/01fc3b7c4f0107d641a1141c300102ee63639d93/src/assets/albums/dog-preview.jpg",
      albumId: 2
    },
    {
      id: 8,
      title: "fish-3",
      imgUrl:
        "https://rawgit.com/vlvereta/bsa-2018-php-16/01fc3b7c4f0107d641a1141c300102ee63639d93/src/assets/albums/dog-preview.jpg",
      albumId: 2
    },
    {
      id: 9,
      title: "fish-4",
      imgUrl:
        "https://rawgit.com/vlvereta/bsa-2018-php-16/01fc3b7c4f0107d641a1141c300102ee63639d93/src/assets/albums/dog-preview.jpg",
      albumId: 2
    },
    {
      id: 10,
      title: "fish-5",
      imgUrl:
        "https://rawgit.com/vlvereta/bsa-2018-php-16/01fc3b7c4f0107d641a1141c300102ee63639d93/src/assets/albums/dog-preview.jpg",
      albumId: 2
    }
  ]
};

const getters = {
  getAlbumPhotos: state => id => {
    var photos = [];
    state.photos.forEach(function(item) {
      if (item.albumId === id) {
        photos.push(item);
      }
    });
    return photos;
  }

  // getUserAlbumsAmount: state => id => {
  //   var amount = 0;
  //   state.albums.forEach(function(item) {
  //     if (item.userId === id) {
  //       amount++;
  //     }
  //   });
  //   return amount;
  // },

  // getCheckedAmount: state => checked => {
  //   if (!checked.length) return state.albums.length;

  //   var amount = 0;
  //   checked.forEach(function(item, i, arr) {
  //     state.albums.forEach(function(item2, i2, arr2) {
  //       if (item2.userId === item) {
  //         amount++;
  //       }
  //     });
  //   });
  //   return amount;
  // },

  // getCheckedAlbums: state => checked => {
  //   if (!checked.length) return state.albums;

  //   var albums = [];
  //   checked.sort();
  //   checked.forEach(function(item, i, arr) {
  //     state.albums.forEach(function(item2, i2, arr2) {
  //       if (item2.userId === item) {
  //         albums.push(item2);
  //       }
  //     });
  //   });
  //   return albums;
  // },

  // getPreview: state => id => {
  //   var preview = state.albums[id].preview;
  //   return preview
  //     ? preview
  //     : "https://rawgit.com/vlvereta/bsa-2018-php-16/eaea953d5abbee50982590e9a3dc27611579a66a/src/assets/no-photo.png";
  // }
};

const mutations = {
  // ADD_ALBUM(state, album) {
  //   state.albums.push({
  //     title: album.title,
  //     preview: album.preview,
  //     userId: album.userId
  //   });
  // },
  DELETE_PHOTO(state, id) {
    state.photos.splice(id, 1);
  }
};

const actions = {
  // addAlbum({ context, commit }, data) {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       commit("ADD_ALBUM", data);
  //       resolve();
  //     }, 250);
  //   });
  // },
  deletePhoto({ commit }, id) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit("DELETE_PHOTO", id);
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
