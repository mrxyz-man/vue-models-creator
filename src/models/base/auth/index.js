import Vue from 'vue';

import { Model } from '../../../../lib';
import User from '../user';

import store from './store';

export default class Auth extends Model {
  static entity = 'auth';

  get loggedIn() {
    return this.$self().store.state.loggedIn;
  }

  async login() {
    await User.api.login();

    this.$self().toggleLoggedIn();
  }

  static toggleLoggedIn() {
    this.store.toggleLoggedIn();
  }

  static get store() {
    return super.registerStore(store, {
      store: Vue.prototype.$store,
    });
  }
}
