import Vue from 'vue';
import VueGeneratorApi from 'vue-generator-api';
import App from './App.vue';

import store from './plugins/store';
import auth from './plugins/auth';

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

Vue.use(auth);

export default new Vue({
  el: '#app',
  store,
  render: (h) => h(App),
});
