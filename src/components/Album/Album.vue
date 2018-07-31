<template>
  <div>
    <h1 class="page-header">Album ID: {{ $route.params.id }}</h1>
    <div class="col-sm-12">
      <div class="panel panel-default info-header">
            <img :src="preview">
            <h3>Title: {{ album.title }}</h3>
            <h3>Owner: <a @click="$router.push({ name: 'user', params: { id: album.userId }})">{{ user.name }}</a></h3>
            <div class="buttons">
              <button @click="$router.push({ name: 'add-photo', params: { id: $route.params.id } })" class="btn btn-success add-photo-btn">Add new photo</button>
              <button @click="$router.push({ name: 'albums' })" class="btn btn-primary">Albums</button>
              <button @click="$router.push({ name: 'edit-album', params: { id: $route.params.id } })" class="btn btn-warning">Edit</button>
              <button @click="deleteAlbum" class="btn btn-danger">Delete</button>
            </div>
      </div>
    <hr>
    </div>
    <template v-for="photo in photos">
      <div :key="photo.id" class="col-sm-4">
        <div class="panel panel-default">
            <div class="img-wrp">
              <img class="preview" :src="photo.imgUrl">
            </div>
            <div class="h-with-delete">
              <h4>{{ photo.title }}</h4>
              <!-- How to pass photo.id to deletePhoto mehtod correctly?1 -->
              <button @click="deletePhoto(photo.id);" class="btn btn-danger btn-sm">Delete</button>
            </div>
          </div>
        </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  computed: {
    user() {
      return this.$store.state.users.users[this.album.userId];
    },

    album() {
      return this.$store.state.albums.albums[this.$route.params.id];
    },

    preview() {
      return this.$store.getters['albums/getPreview'](this.$route.params.id);
    },
    
    photos() {
      return this.$store.getters['photos/getAlbumPhotos'](this.$route.params.id);
    }
  },

  methods: {
    deleteAlbum() {
      this.$store.dispatch('albums/deleteAlbum', this.$route.params.id);
      this.$router.push({ name: 'albums' });
    },

    deletePhoto: function(id) {
      this.$store.dispatch('photos/deletePhoto', id);
    }
  }
}
</script>

<style>
.info-header {
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.info-header > img {
  width: 70px;
  height: 70px;
  border: 1px solid #2c3e50;
}

.info-header > .buttons {
  width: 40%;
  padding: 15px;
  display: flex;
  justify-content: space-around;
}

.photos-wrp {
  display: inline;
  border: 2px solid black;
}

.photo > img {
  width: 150px;
  height: 150px;
}

.h-with-delete > h4 {
  margin: 15px;
  display: inline;
}
.h-with-delete > button {
  margin: 15px;
}

</style>
