/* eslint-disable no-param-reassign */
import Auth from '../models/base/auth';

export default {
  install: (Vue) => {
    const auth = new Auth();

    Vue.auth = auth;
    Vue.prototype.$auth = auth;
  },
};
