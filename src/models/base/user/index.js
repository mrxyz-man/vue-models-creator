import Vue from 'vue';

import { Model } from '../../../../lib';
import Role from '../role';

import api from './api';

export default class User extends Model {
  static entity = 'user';

  static fields() {
    return {
      id: this.attr(null),
      first_name: this.attr(''),
      role: this.attr((ctx, { role }) => new Role({ id: role })),
    };
  }

  static get api() {
    return super.registerApi(api, {
      axios: Vue.prototype.$api.base,
    });
  }
}
