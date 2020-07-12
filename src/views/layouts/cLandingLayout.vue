<template>
  <div class="landing-page">
    <cHeader />
    <router-view></router-view>
    <cFooter />
  </div>
</template>

<script>
import cHeader from "@/components/common/cHeader";
import cFooter from "@/components/common/cFooter";

export default {
  components: {
    cHeader,
    cFooter
  }
};
</script>

<style scoped>
.landing-page {
  width: 100%;
  height: 100%;
  background-color: #f8f7fc;
}
</style>
