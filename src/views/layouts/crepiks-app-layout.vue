<template>
  <div class="app-page">
    <sidebar />
    <router-view></router-view>
  </div>
</template>

<script>
import sidebar from "@/components/app-layout/crepiks-sidebar";

export default {
  components: {
    sidebar
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.app-page {
  width: 100%;
  min-height: 100vh;
  background-color: $background;
}
</style>
