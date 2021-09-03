import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  // state is equal to data
  state() {
    return {
      counter: 0
    };
  },
  //   mutations are equal to methods
  mutations: {
    // state down here is the current state
    increment(state) {
      state.counter = state.counter + 1;
    },
    // payload is and argument passes data to the funciton
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },
  //   getters are similar to computed
  getters: {
    // state : to reach state obvously, getters: to reach other getters
    //   in case of the value of this getter depending on oth getters
    //   finalCounter(state,getters){
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
  }
});

const app = createApp(App);
app.use(store);
app.mount('#app');
