import numbersRelatedMutations from './mutations.js';
import numbersRelatedGetters from './getters.js';
import numbersRelatedActions from './actions.js';
export default {
  namespaced: true,
  state() {
    return {
      counter: 0
    };
  },
  mutations: numbersRelatedMutations,
  getters: numbersRelatedGetters,
  actions: numbersRelatedActions
};
