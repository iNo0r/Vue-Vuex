<template>
  <button v-if="!getIsLoged" @click="logIn">Login</button>
  <button v-else @click="logOut">Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getIsLoged'])
  },
  methods: {
    ...mapActions(['logIn', 'logOut'])
  }
};
</script>

<style></style>
