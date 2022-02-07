import Vue from 'vue'
import App from './App.vue'
import store from './store'

import NProgress from 'nprogress';

import 'bootstrap/scss/bootstrap-reboot.scss';
import 'bootstrap/scss/bootstrap-grid.scss';

NProgress.start();
NProgress.done();

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
