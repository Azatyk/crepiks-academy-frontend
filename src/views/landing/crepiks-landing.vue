<template>
  <div class="landing">
    <c-header />
    <cIntro />
    <cDescription />
    <cExplanation />
    <cPractice />
    <cOffer />
    <cQuestions />
  </div>
</template>

<script>
import cHeader from "@/components/landing/crepiks-header.vue";
import cIntro from "@/components/landing/crepiks-intro.vue";
import cDescription from "@/components/landing/crepiks-description.vue";
import cExplanation from "@/components/landing/crepiks-explanation.vue";
import cPractice from "@/components/landing/crepiks-practice.vue";
import cOffer from "@/components/landing/crepiks-offer.vue";
import cQuestions from "@/components/landing/crepiks-questions.vue";

export default {
  components: {
    cHeader,
    cIntro,
    cDescription,
    cExplanation,
    cPractice,
    cOffer,
    cQuestions
  }
};
</script>

<style></style>
