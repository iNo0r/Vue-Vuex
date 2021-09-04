import { createStore } from 'vuex';
const counterMoudule = {
  // the reason of namespacing in modules is to avoid name clashing
  // when assigning true to namespaced, the whole module kind of deattched from
  // the store
  namespaced: true,
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    // global store's state is not accessable in modules
    // hence can't mutate the globl state or reach out to state/getters
    //unless we add root state, and root getters
    // testFunc(state, getters, rootState, rootGetters) {},
    increment(state) {
      state.counter = state.counter + 1;
    },

    increase(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter > 100) {
        return 100;
      } else if (finalCounter < 0) {
        return 0;
      } else {
        return finalCounter;
      }
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    increase(context, payload) {
      setTimeout(function() {
        context.commit('increase', payload);
      }, 2000);
    }
  }
};
const store = createStore({
  //modules is property allow us to outsource code
  modules: {
    // name is optional
    // the name space of the module is below
    numbersRelated: counterMoudule
  },
  // state is equal to data
  state() {
    return {
      counter: 0,
      isLoged: false
    };
  },
  //   mutations are equal to methods
  mutations: {
    logIn(state) {
      state.isLoged = true;
    },
    logOut(state) {
      state.isLoged = false;
    }
  },
  getters: {
    getIsLoged(state) {
      return state.isLoged;
    }
  },
  actions: {
    logIn(context) {
      context.commit('logIn');
    },
    logOut(context) {
      context.commit('logOut');
    }
  }
});

export default store;
