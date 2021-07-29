<template>
  <div id="app">
    <div class="container">
      <router-view :key="$route.path" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: null
    };
  },

  created() {
    if (document.body.clientWidth <= 414) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    this.$store.commit("setIsMobile", this.isMobile);
  }
};
</script>

<style land="scss">
@import url("./assets/styles/main.css");

#app {
  width: 100vw;
  height: 100vh;
}

.container {
  min-width: 100vw;
  width: 100%;
}
</style>
