<template>
  <div>
    <h1 class="page-header">{{ this.user.name }}'s albums: {{ amount }}</h1>
    <template v-for="(album, id) in albums">
      <AlbumElement :key="id" :index="id" :album="album"></AlbumElement>
    </template>
  </div>
</template>

<script>
import AlbumElement from './../Albumlist/AlbumElement';

export default {
  components: {
    AlbumElement
  },

  data() {
    return {
    };
  },
  
  computed: {
    user() {
      return this.$store.state.users.users[this.$route.params.id];
    },

    albums() {
      return this.$store.getters['albums/getUserAlbums'](this.$route.params.id);
    },
    
    amount() {
      return this.$store.getters['albums/getUserAlbumsAmount'](this.$route.params.id);
    }
  },
}
</script>

<style>

</style>
