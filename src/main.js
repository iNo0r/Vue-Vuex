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
    }
  }
});

const app = createApp(App);
app.use(store);
app.mount('#app');
