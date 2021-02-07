<template>
  <div class="subscription-page">
    <div class="elipse elipse-dark-top"></div>
    <div class="elipse elipse-light-top"></div>
    <div class="elipse elipse-light-bottom"></div>
    <div class="elipse elipse-dark-bottom"></div>
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
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.elipse {
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;

  &-light-top {
    top: -75%;
    right: 5%;
    background-color: #25f9cf;
  }

  &-dark-top {
    top: -65%;
    right: -20%;
    background-color: #3ae8c5;
  }

  &-light-bottom {
    bottom: -65%;
    left: -20%;
    background-color: #25f9cf;
  }

  &-dark-bottom {
    bottom: -75%;
    left: 5%;
    background-color: #3ae8c5;
  }
}
</style>
