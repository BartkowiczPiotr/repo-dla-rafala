import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import localStorage from './mixins/localStorage';

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
axios.defaults.baseURL = process.env.VUE_APP_API;

Vue.mixin(localStorage);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
