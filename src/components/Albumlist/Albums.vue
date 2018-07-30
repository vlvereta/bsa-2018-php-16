<template>
  <div>
    <h1 class="page-header">Albums: {{ amount }}</h1>
    <template>
      <CheckPanel @clicked="onClickCheckPanel"></CheckPanel>
    </template>
    <template v-for="(album, id) in albums">
      <AlbumElement :key="id" :index="id" :album="album"></AlbumElement>
    </template>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
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
    ...mapState({
      albums: state => state.albums.albums,
    }),
    ...mapGetters({
      amount: 'albums/albumsAmount'
    })
  },

  methods: {
    onClickCheckPanel(checkedInChild) {
      this.checked = checkedInChild;
    }
  }
}
</script>

<style>
.add-user-btn {
  width: 100%;
  margin-bottom: 15px;
}
</style>