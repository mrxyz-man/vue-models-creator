import Vue from 'vue';

import { Model } from '../../../../lib';

import api from './api';

export default class Faculty extends Model {
  static entity = 'faculty';

  static fields() {
    return {
      id: this.attr(null),
    };
  }

  static get api() {
    return super.registerApi(api, {
      axios: Vue.prototype.$api.test,
    });
  }
}
