import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import camisetainfo from "./components/camisetainfo.vue";
import carrito from "./components/carrito.vue";
/*import footer from "./components/footer.vue";
import camisetas from "./components/camisetas.vue";
import header from "./components/header.vue";
import loading from "./components/loading.vue";*/
import login from "./components/login.vue";
import main from "./components/main.vue";
import Notifications from 'vue-notification'
 
Vue.use(Notifications)



Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.component(camisetainfo);
/*Vue.component(camisetas);
Vue.component(carrito);
Vue.component(footer);
Vue.component(header);
Vue.component(loading);
Vue.component(login);
Vue.component(main);*/


// Vuefire
import { firestorePlugin } from "vuefire"
Vue.use(firestorePlugin)

const routes = [
  { path: "/camisetainfo/:id", component: camisetainfo },
  { path: "/carrito", component: carrito },
  { path: "/login", component: login },
  { path: "/", component: main }
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
