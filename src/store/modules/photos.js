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
};

const mutations = {
  ADD_PHOTO(state, photo) {
    state.photos.push({
      title: photo.title,
      imgUrl: photo.imgUrl,
      albumId: photo.albumId
    });
  },

  DELETE_PHOTO(state, id) {
    state.photos.splice(id, 1);
  }
};

const actions = {
  addPhoto({ context, commit }, data) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit("ADD_PHOTO", data);
        resolve();
      }, 250);
    });
  },

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
