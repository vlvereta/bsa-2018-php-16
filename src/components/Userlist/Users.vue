<template>
  <div>
    <h1 v-if="showUserList" class="page-header">Users: {{ amount }}</h1>
    <h1 v-else class="page-header">Search User..</h1>
    <template>
      <SearchPanel @clicked="onShowUserList"></SearchPanel>
    </template>
    <div v-if="showUserList" class="row">
      <div class="col-sm-12">
        <router-link :to="{ name: 'add-user' }"><button class="btn btn-success add-user-btn">Add user</button></router-link>
      </div>
      <template v-for="(user, id) in users">
        <UserElement :key="id" :index="id" :user="user" ></UserElement>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import SearchPanel from './SearchPanel';
import UserElement from './UserElement';

export default {
  components: {
    SearchPanel,
    UserElement
  },

  data() {
    return {
      showUserList: true
    };
  },
  
  computed: {
    ...mapState({
      users: state => state.users.users,
    }),
    ...mapGetters({
      amount: 'users/usersAmount'
    })
  },

  methods: {
    onShowUserList(value) {
      this.showUserList = value;
    }
  }
}
</script>

<style>
.add-user-btn {
  width: 100%;
  margin-bottom: 15px;
}
</style>