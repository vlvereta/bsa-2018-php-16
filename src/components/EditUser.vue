<template>
  <div>
    <h1 class="page-header">Edit User ID: {{ $route.params.id }}</h1>
    <h2>Name: {{ user.name }}</h2>
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
    }
  }
}
</script>

<style>

</style>
