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
  },
  //   mutations is responsible to effect the state, it is not allowed to have an asynchronous
  //  functions, only synchronous functions .
  // component should triggers actions, actions will handle the asychronous part,
  //  and then will commit a mutation.
  // it is a good practice to use actions instead of mutations
  // to make sure we never put asynhronous code accedintly into mutations.
  actions: {
    //we can use the same name as a mutations
    // increase(context) {
    // context help is to reach mutations
    //   we can pass a payload too
    //   context.commit("increase",payload);
    // }
    increment(context) {
      context.commit('increment');
    },
    //making an asynchronous example
    // context = similar to this.$store
    // context has commit,dispatch,state and getters
    // you should not mutate a state from actions always use
    increase(context, payload) {
      setTimeout(function() {
        context.commit('increase', payload);
      }, 2000);
    }
  }
});

const app = createApp(App);
app.use(store);
app.mount('#app');
