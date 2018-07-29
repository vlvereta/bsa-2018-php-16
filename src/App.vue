<template>
  <div id="app">
      <!-- Main Black header -->
      <nav class="navbar navbar-inverse">
				<div class="container-fluid header">
					<div class="navbar-header">
						<a class="navbar-brand" href="https://github.com/vlvereta/bsa-2018-php-16">BSA-2018-php-16</a>
					</div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="/">Home</a></li> 
            <li><router-link to="/users">Users</router-link></li>
            <li><router-link to="/albums">Albums</router-link></li>
          </ul>
				</div>
			</nav>

      <div class="container page-wrp">
        <router-view></router-view>
      </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
