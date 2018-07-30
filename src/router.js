import Vue from "vue";
import Router from "vue-router";
import Users from "./components/Userlist/Users";
import AddUser from "./components/AddUser";
import User from "./components/User";
import EditUser from "./components/EditUser";
import Albums from "./components/Albumlist/Albums";

Vue.use(Router);

export default new Router({
  base: "/",
  mode: "history",
  routes: [
    {
      path: "/users",
      name: "users",
      component: Users
    },
    {
      path: "/users/add",
      name: "add-user",
      component: AddUser
    },
    {
      path: "/users/:id",
      name: "user",
      component: User
    },
    {
      path: "/users/:id/edit",
      name: "edit-user",
      component: EditUser
    },
    {
      path: "/albums",
      name: "albums",
      component: Albums
    },
    {
      path: "/albums/:id",
      name: "album"
      // component: Album
    }
  ]
});
