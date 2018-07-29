import Vue from "vue";
import Router from "vue-router";
import Users from "./components/Users";
import Albums from "./components/Albums";

Vue.use(Router);

export default new Router({
  base: "/",
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/users"
    },
    {
      path: "/users",
      component: Users
    },
    {
      path: "/albums",
      component: Albums
    }
  ]
});
