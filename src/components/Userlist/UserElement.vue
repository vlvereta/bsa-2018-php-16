<template>
  <div class="col-sm-12">
    <div class="panel panel-default user-element">
          <img :src="avatar">
          <h4>Name: {{ user.name }}</h4>
          <h4>Email: {{ user.email }}</h4>
          <div class="buttons">
            <button class="btn btn-default">Albums</button>
            <router-link :to="{ name: 'user', params: { id: index }}"><button class="btn btn-primary">Profile</button></router-link>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    user: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
    };
  },

  computed: {
    avatar() {
      return this.$store.getters['users/getAvatar'](this.index);
    }
  }
}
</script>

<style>
.user-element {
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.user-element > img {
	width: 70px;
	height: 70px;
  border: 1px solid #2c3e50;
}

.user-element > .buttons {
  width: 20%;
}

.buttons > button {
  margin: 10px;
}
</style>
