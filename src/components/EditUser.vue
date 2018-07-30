<template>
  <div>
    <h1 class="page-header">Edit User ID: {{ $route.params.id }}</h1>
    <form class="form-horizontal" @submit.prevent="editUser">
        <div class="form-group">
          <label class="control-label col-sm-2">Name:</label>
          <div class="col-sm-10">
            <input v-model.trim=" userCopy.name" type="text" class="form-control" id="name" placeholder="Enter name">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2">Email:</label>
          <div class="col-sm-10"> 
           <input v-model.trim="userCopy.email" type="email" class="form-control" id="email" placeholder="Enter email">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2">Avatar:</label>
          <div class="col-sm-10"> 
           <input v-model.trim="userCopy.avatar" type="text" class="form-control" id="avatar" placeholder="Enter avatar source">
          </div>
        </div>
        <div class="form-group"> 
          <div class="buttons">
            <button type="submit" class="btn btn-warning">Edit</button>
            <button @click="$router.push({ name: 'users' })" type="button" class="btn btn-primary">Back</button>
          </div>
        </div>
      </form>
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
      return this.$store.state.users.users[this.$route.params.id];
    },
   userCopy() {
      return {
        name: this.user.name,
        email: this.user.email,
        avatar: this.user.avatar

      };
    }
  },

  methods: {
    editUser() {
      const data = {
        id: this.$route.params.id,
        data: {
          name: this.userCopy.name,
          email: this.userCopy.email,
          avatar: this.userCopy.avatar
        }
      };

      this.$store.dispatch("users/editUser", data);
      this.$router.go(-1);
    }
  }
}
</script>

<style>

</style>

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


<style>
.add-user-wrp {
  display: flex;
  justify-content: center;
}

.buttons > button {
  margin: 10px;
}
</style>
