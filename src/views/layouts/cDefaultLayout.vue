<template>
  <div class="page">
    <cHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import cHeader from "@/components/common/cHeader";

export default {
  components: {
    cHeader
  }
};
</script>

<style scoped>
.page {
  padding: 0.1px;
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: #f8f7fc;
}
</style>
