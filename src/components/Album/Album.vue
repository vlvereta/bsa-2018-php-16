<template>
  <div>
    <h1 class="page-header">Album ID: {{ $route.params.id }}</h1>
    <div class="col-sm-12">
      <div class="panel panel-default album-element">
            <img :src="preview">
            <h3>Title: {{ album.title }}</h3>
            <h3>Owner: <a @click="$router.push({ name: 'user', params: { id: album.userId }})">{{ user.name }}</a></h3>
            <div class="buttons">
              <button @click="$router.go(-1)" class="btn btn-primary">Back</button>
              <button @click="$router.push({ name: 'edit-album', params: { id: $route.params.id } })" class="btn btn-warning">Edit</button>
              <button @click="deleteAlbum" class="btn btn-danger">Delete</button>
            </div>
      </div>
    </div>
    <hr>
    <!--<template v-for="(photo, id) in photos">
      <div :key="id" class="col-sm-3">
        <img src="">
      </div>
    </template>-->
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
    }
  },

  methods: {
    deleteAlbum() {
      this.$store.dispatch('albums/deleteAlbum', this.$route.params.id);
      this.$router.push({ name: 'albums' });
    }
  }
}
</script>

<style>
.album-element {
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.album-element > img {
  width: 70px;
  height: 70px;
  border: 1px solid #2c3e50;
}

.album-element > .buttons {
  width: 25%;
  padding: 15px;
  display: flex;
  justify-content: space-around;
}
</style>
