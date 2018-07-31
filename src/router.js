import Vue from "vue";
import Router from "vue-router";
import Users from "./components/Userlist/Users";
import AddUser from "./components/User/AddUser";
import User from "./components/User/User";
import EditUser from "./components/User/EditUser";
import Albums from "./components/Albumlist/Albums";
import AddAlbum from "./components/Album/AddAlbum";
import Album from "./components/Album/Album";
import EditAlbum from "./components/Album/EditAlbum";

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
      path: "/albums/add",
      name: "add-album",
      component: AddAlbum
    },
    {
      path: "/albums/:id",
      name: "album",
      component: Album
    },
    {
      path: "/albums/:id/edit",
      name: "edit-album",
      component: EditAlbum
    }
  ]
});
