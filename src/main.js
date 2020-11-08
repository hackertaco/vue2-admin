import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'

import routes from "./routes/routes";
import MaterialDashboard from "./material-dashboard";
import Chartist from "chartist";
import GlobalComponents from "./globalComponents";
import Notifications from "./components/NotificationPlugin";

const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"
});

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
// Vue.use(GlobalDirectives);
Vue.use(Notifications);

Vue.prototype.$Chartist = Chartist;
Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
});