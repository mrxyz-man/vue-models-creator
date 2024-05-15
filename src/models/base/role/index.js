import Vue from 'vue';

import { Model } from '../../../../lib';
import constants from './constants';
import glossary from './glossary';
import store from './store';
import api from './api';

export default class Role extends Model {
  static entity = 'role';

  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(({ id }, item, key) => {
        const { types } = Role.glossary;
        return types[id][key];
      }),
    };
  }

  static get api() {
    return super.registerApi(api, {
      axios: Vue.prototype.$api.base,
    });
  }

  static get store() {
    return super.registerStore(store, {
      store: Vue.prototype.$store,
    });
  }

  static get constants() {
    return constants;
  }

  static get glossary() {
    return glossary;
  }
}
