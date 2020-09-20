<template>
  <div class="home-page">
    <cNews class="home__news" />
    <cSoon class="home__soon" />
  </div>
</template>

<script>
import cNews from "@/components/home/cNews.vue";
import cSoon from "@/components/home/cSoon.vue";

export default {
  components: {
    cNews,
    cSoon
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.home {
  &-page {
    padding: 0 2%;
    margin: auto;
    margin-top: 10vh;
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}
</style>
