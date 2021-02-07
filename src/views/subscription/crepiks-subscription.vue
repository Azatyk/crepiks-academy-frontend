<template>
  <div class="subscription-page">
    <subscriptionCard />
  </div>
</template>

<script>
import subscriptionCard from "@/components/subscription/crepiks-subscription-card";

export default {
  components: {
    subscriptionCard
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.subscription-page {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
