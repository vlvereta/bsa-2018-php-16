<template>
  <div>
    <h1 class="page-header">Add Photo!</h1>
      <form class="form-horizontal" @submit.prevent="addPhoto">
        <div class="form-group">
          <label class="control-label col-sm-2">Title:</label>
          <div class="col-sm-10">
            <input v-model.trim="newPhoto.title" type="text" class="form-control" id="title" placeholder="Enter title">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2">Image URL:</label>
          <div class="col-sm-10">
            <input v-model.trim="newPhoto.imgUrl" type="text" class="form-control" id="imgUrl" placeholder="Enter image URL">
          </div>
        </div>
        <div class="form-group"> 
          <div class="buttons">
            <button type="submit" class="btn btn-success">Add</button>
            <button @click="$router.go(-1)" type="button" class="btn btn-primary">Back</button>
          </div>
        </div>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      newPhoto: {
        title: '',
        imgUrl: '',
        albumId: this.$route.params.id
      }
    };
  },

  methods: {
    addPhoto() {
      if (!this.newPhoto.title || !this.newPhoto.imgUrl) {
        return;
      }
      
      this.$store.dispatch('photos/addPhoto', this.newPhoto);
      this.clearForm();
      this.$router.push({ name: 'album', params: { id: this.$route.params.id }});
    },

    clearForm() {
      this.newPhoto = {
        title: '',
        imgUrl: '',
        albumId: ''
      }
    }
  }
};
</script>

<style>
.buttons > button {
  margin: 10px;
}

.radio {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
