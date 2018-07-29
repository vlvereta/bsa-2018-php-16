import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  count: 10,
  user: {
    name: "Alex"
  }
};

export default new Vuex.Store({
  state
});
