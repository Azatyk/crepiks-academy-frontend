<template>
  <div class="page">
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
.page {
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: #f8f7fc;
}
</style>
