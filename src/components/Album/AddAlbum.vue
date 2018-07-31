<template>
  <div>
    <h1 class="page-header">Add Album!</h1>
      <form class="form-horizontal" @submit.prevent="addAlbum">
        <div class="form-group">
          <label class="control-label col-sm-2">Title:</label>
          <div class="col-sm-10">
            <input v-model.trim="newAlbum.title" type="text" class="form-control" id="title" placeholder="Enter title">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2">Preview:</label>
          <div class="col-sm-10">
            <input v-model.trim="newAlbum.preview" type="text" class="form-control" id="preview" placeholder="Enter preview source">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2">Owner:</label>
          <div class="radio">
            <template v-for="(user, id) in users">
              <label :key="id" class="radio-inline"><input type="radio" v-model="newAlbum.userId" :value="id" name="optradio" checked> {{ user.name }}</label>
            </template>
          </div>
        </div>
        <div class="form-group"> 
          <div class="buttons">
            <button type="submit" class="btn btn-success">Create</button>
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
      newAlbum: {
        title: '',
        preview: '',
        userId: ''
      }
    };
  },

  computed: {
    users() {
      return this.$store.state.users.users;
    }
  },

  methods: {
    addAlbum() {
      if (!this.newAlbum.title || this.newAlbum.userId === undefined) {
        return;
      }
      
      this.$store.dispatch('albums/addAlbum', this.newAlbum);
      this.clearForm();
      this.$router.push({ name: 'albums'});
    },

    clearForm() {
      this.newAlbum = {
        title: '',
        userId: ''
      }
    }
  }
};
</script>

<style>
.add-album-wrp {
  display: flex;
  justify-content: cente
}

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
