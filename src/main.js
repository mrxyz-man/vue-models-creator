import Vue from 'vue';
import Vuex from 'vuex';
import VueGeneratorApi from 'vue-generator-api';
import App from './App.vue';

Vue.use(Vuex);
Vue.use(VueGeneratorApi, {
  api: {
    base: {
      baseURL: 'https://leslog.ru/api/',
      headers: {
        common: {
          Accept: 'application/json, text/plain, */*',
        },
      },
    },
  },
});

const store = new Vuex.Store({});

Vue.store = store;
Vue.prototype.$store = store;

export default new Vue({
  el: '#app',
  store,
  render: (h) => h(App),
});
