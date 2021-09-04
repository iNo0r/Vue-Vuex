<template>
  <h2>noramlized counter {{ normalizedCounter }}</h2>
  <h3>final counter : {{ finalCounter }}</h3>
  <br />
  <!-- <h4>{{ $store.getters.normalizedCounter }}</h4> -->
</template>

<script>
// mapGetters is a shorthand helps to minimize code and access getters easily
import { mapGetters } from 'vuex';
export default {
  computed: {
    // the syntax below because of the name spacing
    //  ...mapGetters(['finalCounter']),
    // will turn into this
    ...mapGetters('numbersRelated', ['finalCounter']),
    normalizedCounter() {
      // return this.$store.state.counter;
      // this one below with namespaced
      //   return this.$store.getters.normalizedCounter;
      // will turn into this
      return this.$store.getters['numbersRelated/normalizedCounter'];
    }
    // finalCounter() {
    //   // it is called without the ()
    //   return this.$store.getters.finalCounter;
    // }
  }
};
</script>
