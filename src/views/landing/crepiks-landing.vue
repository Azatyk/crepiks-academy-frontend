<template>
  <transition name="fadeIn" appear>
    <div class="landing">
      <div class="landing-inner">
        <intro />
        <explanation />
      </div>
    </div>
  </transition>
</template>

<script>
import intro from "@/components/landing/crepiks-landing-intro.vue";
import explanation from "@/components/landing/crepiks-landing-explanation.vue";

export default {
  components: {
    intro,
    explanation
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.landing {
  width: 100vw;
  background-color: $background;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-inner {
    max-width: 1440px;
    width: 1440px;
  }
}

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 2s;
}
.fadeIn-enter,
.fadeIn-leave-to {
  opacity: 0;
}
</style>
