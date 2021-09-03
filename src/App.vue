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
      this.$store.state.counter++;
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
