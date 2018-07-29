<template>
  <div class="col-sm-12">
    <div class="panel panel-default user-element">
          <img :src="showAvatar()">
          <h4>ID: {{ this.index }}</h4>
          <h4>Name: <a href="#">{{ user.name }}</a></h4>
          <h4>Email: {{ user.email }}</h4>
          <div class="buttons">
            <button class="btn btn-success">Albums</button>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
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

  methods: {
    showAvatar: function () {
      var avatar = this.user.avatar;
      // I don't know why, but only this link it can eat.. (I'm about CodeSandBox).
      return avatar ? avatar : 'https://rawgit.com/vlvereta/bsa-2018-php-16/eaea953d5abbee50982590e9a3dc27611579a66a/src/assets/no-photo.png';
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
  display: flex;
  justify-content: space-between;
}
</style>
