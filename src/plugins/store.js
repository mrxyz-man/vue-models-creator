/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({});

Vue.store = store;
Vue.prototype.$store = store;

export default store;
