// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import Vuex from "vuex";
import store from './store'

Vue.prototype.axios = axios;
/** 原型链 */
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(Vuex);

router.beforeEach((to, from, next) => {
  let isLogin = sessionStorage.getItem("isLogin");
  if (to.path === "/logout") {
    sessionStorage.clear();
    next("/login");
    return;
  } else if (to.path === "/login") {
    if (isLogin === "true") {
      next("/main");
      return;
    }
  } else if (!isLogin) {
      next('/login');
      return;
  }
  next()
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  render: h => h(App)
})
