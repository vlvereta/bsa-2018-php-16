<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="panel panel-default">
        <div class="panel-heading"><strong>Find user by name or email:</strong></div>
        <div class="panel-body">
          <form class="form-inline" @submit.prevent>
            <input type="text" class="form-control" placeholder="Search" autocomplete="off">
            <label class="radio-inline"><input type="radio" name="optradio" checked>Name</label>
            <label class="radio-inline"><input type="radio" name="optradio">Email</label>
            <button type="submit" class="btn btn-primary btn-lg">Search</button>
          </form>
        </div>
      </div>
    </div>
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
.form-inline {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.form-inline > input[type=text] {
	width: 50%;
}
</style>