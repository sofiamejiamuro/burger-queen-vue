import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/tomacomanda",
      name: "TomaComanda",
      component: () => import(/* webpackChunkName: "Order" */ "./views/Order.vue")
    }

  ]
});
