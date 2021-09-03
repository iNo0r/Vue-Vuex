<template>
  <base-container title="Vuex">
    <my-counter></my-counter>
    <button @click="addOne">add one</button>
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
