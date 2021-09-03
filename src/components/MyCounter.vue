<template>
  <h2>{{ counter }}</h2>
  <h3>{{ finalCounter }}</h3>
  <br />
  <h4>{{ $store.getters.normalizedCounter }}</h4>
</template>

<script>
// mapGetters is a shorthand helps to minimize code and access getters easily
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['finalCounter']),
    counter() {
      return this.$store.state.counter;
    }
    // finalCounter() {
    //   // it is called without the ()
    //   return this.$store.getters.finalCounter;
    // }
  }
};
</script>
