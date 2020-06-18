<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["isLoggedIn"]),
  mounted() {
    if (this.isLoggedIn) {
      this.$store.dispatch("getUserData");
    }
  }
};
</script>

<style>
@import url("./assets/styles/main.css");
</style>
