<template>
  <transition name="fadeIn" appear>
    <div class="landing">
      <c-header />
      <cIntro />
      <cDescription />
      <cExplanation />
      <cPractice />
      <cOffer />
      <cQuestions />
      <cFooter />
    </div>
  </transition>
</template>

<script>
import cHeader from "@/components/landing-old/crepiks-header.vue";
import cIntro from "@/components/landing-old/crepiks-intro.vue";
import cDescription from "@/components/landing-old/crepiks-description.vue";
import cExplanation from "@/components/landing-old/crepiks-explanation.vue";
import cPractice from "@/components/landing-old/crepiks-practice.vue";
import cOffer from "@/components/landing-old/crepiks-offer.vue";
import cQuestions from "@/components/landing-old/crepiks-questions.vue";
import cFooter from "@/components/landing-old/crepiks-footer.vue";

export default {
  components: {
    cHeader,
    cIntro,
    cDescription,
    cExplanation,
    cPractice,
    cOffer,
    cQuestions,
    cFooter
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.landing {
  width: 100vw;
  background-color: $background;
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
