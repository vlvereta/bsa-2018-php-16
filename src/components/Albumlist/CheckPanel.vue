<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="panel panel-default">
        <div class="panel-heading"><strong>Check albums by users:</strong></div>
        <div class="panel-body">
        <template v-for="(user, id) in users">
          <div class="checkbox" :key="id">
            <label><input @change="$emit('clicked', checked)" v-model="checked" type="checkbox" :value="id">{{ user.name }}</label>
          </div>
        </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {
      checked: []
    };
  },

computed: {
    ...mapState({
      users: state => state.users.users,
    }),
    ...mapGetters({
      usersAmount: 'users/usersAmount'
    })
  }
}
</script>

<style>
.checkbox {
	display: inline;
  margin: 15px;
}
</style>