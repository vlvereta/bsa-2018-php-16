<template>
  <div class="col-sm-4">
    <div class="panel panel-default">
      <div class="album-item">
        <div class="img-wrp">
          <router-link :to="{ name: 'album', params: { id: index }}" ><img class="preview" :src="album.preview"></router-link>
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

.preview {
  width: 150px;
  height: 150px;
  border: 1px solid #2c3e50;
}

.preview:hover {
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}
</style>
