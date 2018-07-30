<template>
  <div>
    <h1 class="page-header">Users: {{ amount }}</h1>
    <template>
      <SearchPanel></SearchPanel>
    </template>
    <div class="row">
      <div class="col-sm-12">
        <button class="btn btn-success add-user-btn">Add user</button>
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
    };
  },
  computed: {
    ...mapState({
      users: state => state.users.users,
    }),
    ...mapGetters({
      amount: 'users/usersAmount'
    })
  }
}
</script>

<style>
.add-user-btn {
  width: 100%;
  margin-bottom: 15px;
}
</style>