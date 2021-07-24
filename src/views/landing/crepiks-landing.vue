<template>
  <transition name="fadeIn" appear>
    <div class="landing">
      <div class="landing-inner">
        <intro />
        <explanation
          :data-aos="isMobile ? null : 'fade-in'"
          data-aos-duration="1000"
          data-aos-delay="200"
        />
        <trial
          :data-aos="isMobile ? null : 'fade-in'"
          data-aos-duration="1000"
          data-aos-delay="200"
        />
        <mockup
          :data-aos="isMobile ? null : 'fade-in'"
          data-aos-duration="1000"
          data-aos-delay="200"
        />
        <questions
          :data-aos="isMobile ? null : 'fade-in'"
          data-aos-duration="1000"
          data-aos-delay="200"
        />
        <cFooter
          :data-aos="isMobile ? null : 'fade-in'"
          data-aos-duration="1000"
          data-aos-delay="200"
        />
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

import { mapGetters } from "vuex";

export default {
  components: {
    intro,
    explanation,
    trial,
    mockup,
    questions,
    cFooter
  },

  computed: {
    ...mapGetters(["isMobile"])
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.landing {
  width: 100vw;
  height: 100%;
  overflow-y: scroll;
  background-color: $background;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: static;

  &-inner {
    max-width: 1440px;
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
