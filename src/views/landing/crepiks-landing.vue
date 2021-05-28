<template>
  <transition name="fadeIn" appear>
    <div class="landing">
      <div class="landing-inner">
        <intro />
        <explanation />
        <trial />
        <mockup />
        <questions />
        <cFooter />
      </div>
    </div>
  </transition>
</template>

<script>
import intro from "@/components/landing/crepiks-landing-intro.vue";
import explanation from "@/components/landing/crepiks-landing-explanation.vue";
import trial from "@/components/landing/crepiks-landing-trial.vue";
import mockup from "@/components/landing/crepiks-landing-mockup.vue";
import questions from "@/components/landing/crepiks-landing-questions.vue";
import cFooter from "@/components/landing/crepiks-landing-footer.vue";

export default {
  components: {
    intro,
    explanation,
    trial,
    mockup,
    questions,
    cFooter
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
    display: flex;
    flex-direction: column;
    align-items: center;
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
