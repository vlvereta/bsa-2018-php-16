<template>
  <div class="col-sm-12">
    <div class="panel panel-default user-element">
          <img :src="showAvatar()" class="media-object">
          <h4 class="media-heading">ID: {{ this.index }}</h4>
          <h4 class="media-heading">Name: {{ user.name }}</h4>
          <h4 class="media-heading">Email: {{ user.email }}</h4>
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
      return avatar ? avatar : 'https://uploads.codesandbox.io/uploads/user/381e4608-5b13-445f-86d6-35a045e4acf9/FoVm-no-photo.png';
      // return avatar ? avatar : 'https://rawgit.com/vlvereta/bsa-2018-php-16/e8614ba651a1a53a3bbd33cd9ac54248e2629074/src/assets/logo.png';
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
}

.user-element > .buttons {
  width: 20%;
  display: flex;
  justify-content: space-between;
}
</style>
