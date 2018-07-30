<template>
  <div class="col-sm-4">
    <div class="panel panel-default">
      <div class="album-item">
        <div class="img-wrp">
          <router-link :to="{ name: 'album', params: { id: index }}" ><img :src="album.preview"></router-link>
        </div>
        <h4>{{ album.title }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    album: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
    };
  },
}
</script>

<style>
.img-wrp {
  padding: 15px;
}

.img-wrp > img {
  width: 150px;
  height: 150px;
}

.img-wrp > img:hover {
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}
</style>
