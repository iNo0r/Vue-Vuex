<template>
  <base-container title="Vuex">
  <!-- simple way to reach out our state mangment "store" -->
    <h3>{{ $store.state.counter }}</h3>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer
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
