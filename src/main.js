import Vue from "vue";
import App from "./App.vue";
import router from './router'
/*import "materialize-css/dist/css/materialize.min.css";
import MenuIcon from "vue-material-design-icons/Menu.vue";*/
import store from "./store";
import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";


if(true){var HOST = 'https://abslt.herokuapp.com/'}else{var HOST = 'localhost:3000'}

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO(HOST, {
      query: { token: "" }
    }),
    vuex: {
      store: store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
);

/*Vue.component("menu-icon", MenuIcon);*/

Vue.config.productionTip = false;

new Vue({
  store: store,
  router: router,
  render: h => h(App)
}).$mount("#app");
