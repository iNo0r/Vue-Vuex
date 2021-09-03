<template>
  <h2>{{ counter }}</h2>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    finalCounter() {
      // it is called without the ()
      return this.$store.getters.finalCounter;
    }
  }
};
</script>
