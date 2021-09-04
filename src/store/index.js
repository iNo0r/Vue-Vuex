import { createStore } from 'vuex';

import rootMtations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

import counterMoudule from './numbersRelated/index.js';
const store = createStore({
  modules: {
    numbersRelated: counterMoudule
  },
  // state stays in index.js
  state() {
    return {
      counter: 0,
      isLoged: false
    };
  },
  mutations: rootMtations,
  getters: rootGetters,
  actions: rootActions
});

export default store;
