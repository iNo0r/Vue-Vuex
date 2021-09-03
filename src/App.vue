<template>
  <base-container title="Vuex">
    <my-counter></my-counter>
    <button @click="addOne">add one</button>
    <button @click="addMore">add 10</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import MyCounter from './components/MyCounter.vue';

export default {
  components: {
    BaseContainer,
    MyCounter
  },
  methods: {
    addOne() {
      // this.$store.state.counter++;
      // commit why call a mutation's method named 'increment'
      this.$store.commit('increment');
    },
    addMore() {
      // this.$store.commit('increase',{value:10})
      // an alternative way of commiting mutation, both work fine
      this.$store.commit({
        type: 'increase',
        value: 10
      });
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
