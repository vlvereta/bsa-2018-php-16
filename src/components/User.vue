<template>
  <div class="container">
    <h1>User ID: {{ $route.params.id }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  }
}
</script>

<style>

</style>
