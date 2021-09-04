import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterMoudule = {
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
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

const app = createApp(App);
app.use(store);
app.mount('#app');
