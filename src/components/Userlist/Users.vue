<template>
  <div>
    <h1>Users: {{ amount }}</h1>
    <template>
      <SearchPanel></SearchPanel>
    </template>
    <div class="row">
      <template v-for="(user, id) in users">
        <UserElement :key="id" :index="id" :user="user" ></UserElement>
      </template>
    </div>
    <ul v-for="(user, id) in users" :key="user.id">
      <li>ID - {{ id }}</li>
      <li>Name - {{ user.name }}</li>
      <li>Email - {{ user.email }}</li>
      <li>Avatar - {{ user.avatar }}</li>
    </ul>
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

</style>