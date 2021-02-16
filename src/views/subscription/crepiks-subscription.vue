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
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.elipse {
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  z-index: 2;

  &-light-top {
    bottom: 80%;
    right: 5%;
    background-color: #25f9cf;
  }

  &-dark-top {
    bottom: 70%;
    right: -20%;
    background-color: #3ae8c5;
  }

  &-light-bottom {
    top: 70%;
    left: -20%;
    background-color: #25f9cf;
  }

  &-dark-bottom {
    top: 80%;
    left: 5%;
    background-color: #3ae8c5;
  }
}

@media (max-width: 800px) {
  .elipse {
    width: 400px;
    height: 400px;

    &-light-top {
      top: -50%;
      right: -10%;
      background-color: #25f9cf;
    }

    &-dark-top {
      top: -40%;
      right: -35%;
      background-color: #3ae8c5;
    }

    &-light-bottom {
      display: none;
    }

    &-dark-bottom {
      display: none;
    }
  }
}
</style>
