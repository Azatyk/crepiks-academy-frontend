<template>
  <div class="home-page">
    <cCourseInfo class="home__news" />
    <cTrainerInfo class="home__soon" />
    <cTestInfo class="home__test" />
  </div>
</template>

<script>
import cCourseInfo from "@/components/home/cCourseInfo.vue";
import cTrainerInfo from "@/components/home/cTrainerInfo.vue";
import cTestInfo from "@/components/home/cTestInfo.vue";

export default {
  components: {
    cCourseInfo,
    cTrainerInfo,
    cTestInfo
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.home {
  &-page {
    padding: 0 2%;
    margin: auto;
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
