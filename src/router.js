import Vue from "vue";
import Router from "vue-router";
import Users from "./components/Userlist/Users";
import User from "./components/User";
import EditUser from "./components/EditUser";
import Albums from "./components/Albums";

Vue.use(Router);

export default new Router({
  base: "/",
  mode: "history",
  routes: [
    {
      path: "/users",
      component: Users
    },
    {
      path: "/users/:id",
      component: User,
      children: [
        {
          path: "edit",
          component: EditUser
        }
      ]
    },
    {
      path: "/albums",
      component: Albums
    }
  ]
});
