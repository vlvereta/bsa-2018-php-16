<template>
  <div>
    <h1 class="page-header">Albums: {{ amount }}</h1>
    <template>
      <CheckPanel @clicked="onClickCheckPanel"></CheckPanel>
    </template>
    <div class="row">
      <div class="col-sm-12">
        <router-link :to="{ name: 'add-album' }"><button class="btn btn-success add-album-btn">Create new album</button></router-link>
      </div>
    </div>
    <template v-for="(album, id) in albums">
      <AlbumElement :key="id" :index="id" :album="album"></AlbumElement>
    </template>
  </div>
</template>

<script>
import CheckPanel from './CheckPanel';
import AlbumElement from './AlbumElement';

export default {
  components: {
    CheckPanel,
    AlbumElement
  },

  data() {
    return {
      checked: []
    };
  },
  
  computed: {
    albums() {
      return this.$store.getters['albums/getCheckedAlbums'](this.checked);
    },
    
    amount() {
      return this.$store.getters['albums/getCheckedAmount'](this.checked);
    }
  },

  methods: {
    onClickCheckPanel(checkedInChild) {
      this.checked = checkedInChild;
    }
  }
}
</script>

<style>
.add-album-btn {
  width: 100%;
  margin-bottom: 15px;
}
</style>