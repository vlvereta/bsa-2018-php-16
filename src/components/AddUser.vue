<template>
  <div>
    <h1 class="page-header">Add User!</h1>
      <form class="form-horizontal" @submit.prevent="addUser">
        <div class="form-group">
          <label class="control-label col-sm-2">Name:</label>
          <div class="col-sm-10">
            <input v-model.trim="newUser.name" type="text" class="form-control" id="email" placeholder="Enter name">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2">Email:</label>
          <div class="col-sm-10"> 
           <input v-model.trim="newUser.email" type="email" class="form-control" id="pwd" placeholder="Enter email">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2">Avatar:</label>
          <div class="col-sm-10"> 
           <input v-model.trim="newUser.avatar" type="text" class="form-control" id="avatar" placeholder="Enter avatar source">
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
      newUser: {
        name: '',
        email: '',
        avatar: ''
      }
    };
  },

  methods: {
    addUser() {
      if (!this.newUser.name || !this.newUser.email) {
        return;
      }
      
      this.$store.dispatch('users/addUser', this.newUser);
      this.clearForm();
      this.$router.push({ name: 'users'});
    },

    clearForm() {
      this.newUser = {
        name: '',
        email: '',
        avatar: ''
      }
    }
  }
};
</script>

<style>
.add-user-wrp {
  display: flex;
  justify-content: center;
}

.buttons > button {
  margin: 10px;
}
</style>
