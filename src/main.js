import Vue from "vue";
import App from "./App.vue";
import store from "./store.js";
import router from "./router.js";

new Vue({
  el: "#app",
  render: h => h(App),
  router: router,
  store
});
