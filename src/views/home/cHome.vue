<template>
  <div class="home-page">
    <cNews class="home__news" />
  </div>
</template>

<script>
import cNews from "@/components/home/cNews.vue";

export default {
  components: {
    cNews
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.home {
  &-page {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
}
</style>
