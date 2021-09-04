<template>
  <base-container v-if="getIsLoged" title="Vuex">
    <my-counter></my-counter>
    <button @click="inc">add one</button>
    <!-- //ading payload to an action -->
    <button @click="increase({ value: 30 })">add 10</button>
  </base-container>
  <base-container>
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import MyCounter from './components/MyCounter.vue';
import UserAuth from './components/UserAuth.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    MyCounter,
    UserAuth
  },
  computed: {
    ...mapGetters(['getIsLoged'])
  },
  methods: {
    // the three dots ... is an instance for merging
    // now we can dispatch actions like we are calling a method's function
    // ...mapActions(['increment', 'increase']),
    // you can change the key name of an action by, it is also the same way with mapGetters
    // actions will change into this too
    ...mapActions('numbersRelated', {
      inc: 'increment',
      increase: 'increase'
    }),
    addOne() {
      // this.$store.state.counter++;
      // commit why call a mutation's method named 'increment'
      // this.$store.commit('increment');
      // this.$store.dispatch('increment');
    },
    addMore() {
      // this.$store.commit('increase',{value:10})
      // an alternative way of commiting mutation, both work fine
      // and this one will turn into this
      // this.$store.commit({
      //   type: 'numbersRealted/increase',
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
