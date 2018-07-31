<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="panel panel-default">
        <div class="panel-heading"><strong>Find user by name or email:</strong></div>
        <div class="panel-body">
          <form class="form-inline" @submit.prevent="searchUser(); $emit('clicked', false);">
            <input v-model="searchForm.query" type="text" class="form-control" placeholder="Search" autocomplete="off">
            <label class="radio-inline"><input v-model="searchForm.byName" :value="true" type="radio" name="optradio" checked>Name</label>
            <label class="radio-inline"><input v-model="searchForm.byName" :value="false" type="radio" name="optradio">Email</label>
            <button type="submit" class="btn btn-primary btn-lg">Search</button>
          </form>
          <div v-show="showSearchResult" class="search-result">
            <div v-show="searchForm.finded" class="panel panel-success finded">
              <img :src="avatar">
              <h4>ID: {{ searchForm.user.id }} </h4>
              <h4>Name: {{ searchForm.user.name }} </h4>
              <h4>Email: {{ searchForm.user.email }} </h4>
              <div class="finded-btn-container">
                <button @click="$router.push({ name: 'user', params: { id: searchForm.user.id }})" class="btn btn-primary">Profile</button>
                <button @click="closeSearchResult()" class="btn btn-default">Close</button>
              </div>
            </div>
            <div v-show="!searchForm.finded" class="alert alert-danger">
              <a @click="closeSearchResult" href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
              <strong>User '{{ searchForm.query }}' didn't find!</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      showSearchResult: false,
      searchForm: {
        query: '',
        byName: true,
        finded: false,
        user: {
          id: 0
        }
      }
    };
  },

  computed: {
    ...mapState({
      users: state => state.users.users
    }),

    avatar() {
      return this.$store.getters['users/getAvatar'](this.searchForm.user.id);
    }
  },

  methods: {
    searchUser: function() {
      var user = [];
			if (this.searchForm.byName) {
				user = this.users.find(el => el.name === this.searchForm.query);
			} else {
				user = this.users.find(el => el.email === this.searchForm.query);
			}
      this.showSearchResult = true;
			if (user === undefined) {
        this.searchForm.finded = false;
        return;
			}
			this.searchForm.user = user;
      this.searchForm.user.id = this.users.indexOf(user);
      this.searchForm.finded = true;
    },

    closeSearchResult: function() {
      this.searchForm.query = '';
      this.searchForm.byName = true;
      this.searchForm.finded = false;
			this.showSearchResult = false;
      this.$emit('clicked', true);
    }
  }
}
</script>

<style>
.form-inline {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.form-inline > input[type=text] {
	width: 50%;
}

.search-result {
  margin-top: 15px;
  padding-top: 15px;
  padding-bottom: 0;
}

.finded {
	padding: 15px;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
}

.finded > img {
	width: 70px;
	height: 70px;
}

.finded > .finded-btn-container {
	width: 15%;
	display: flex;
	justify-content: space-between;
}
</style>