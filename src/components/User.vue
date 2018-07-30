<template>
  <div>
    <h1 class="page-header">User ID: {{ $route.params.id }}</h1>
    <div class="user-form-wrp">
      <div class="user-form">
        <img :src="avatar">
        <h3>Name: {{ user.name }}</h3>
        <h3>Email: {{ user.email }}</h3>
        <div class="buttons">
          <button @click="$router.push({ name: 'users'})" class="btn btn-primary">Back</button>
          <button class="btn btn-success">Albums</button>
          <button @click="$router.push({ name: 'edit-user', params: { id: $route.params.id }})" class="btn btn-warning">Edit</button>
          <button @click="deleteUser" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
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
    avatar() {
      return this.$store.getters['users/getAvatar'](this.$route.params.id);
    }
  },

  methods: {
    deleteUser() {
      this.$store.dispatch('users/deleteUser', this.$route.params.id);
      this.$router.push({ name: 'users'});
    }
  }
}
</script>

<style>
.user-form-wrp {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.user-form {
  width: 50%;
  padding: 15px;
}

.user-form > img {
  width: 150px;
  height: 150px;
  border: 1px solid #2c3e50;
}

.user-form > .buttons {
  padding: 15px;
  display: flex;
  justify-content: space-around;
}
</style>
