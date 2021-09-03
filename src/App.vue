<template>
  <base-container title="Vuex">
    <my-counter></my-counter>
    <button @click="increment">add one</button>
    <button @click="increase">add 10</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import MyCounter from './components/MyCounter.vue';

import { mapActions } from 'vuex';

export default {
  components: {
    BaseContainer,
    MyCounter
  },
  methods: {
    // the three dots ... is an instance for merging
    // now we can dispatch actions like we are calling a method's function
    ...mapActions(['increment', 'increase']),
    addOne() {
      // this.$store.state.counter++;
      // commit why call a mutation's method named 'increment'
      // this.$store.commit('increment');
      // this.$store.dispatch('increment');
    },
    addMore() {
      // this.$store.commit('increase',{value:10})
      // an alternative way of commiting mutation, both work fine
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10
      // });
      // also actions can be dispatched in both ways
      // this.$store.dispatch('increase',{value:10})
      // this.$store.dispatch({
      //   type: 'increase',
      //   value: 10
      // });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
