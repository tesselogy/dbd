import Vue from "vue";
import Vuex from "vuex";
import works from "../store/modules/works";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    works
  }
});
