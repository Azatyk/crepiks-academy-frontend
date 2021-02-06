<template>
  <div class="landing">
    <c-header />
    <cIntro />
    <cDescription />
    <cExplanation />
    <cPractice />
  </div>
</template>

<script>
import cHeader from "@/components/landing/crepiks-header.vue";
import cIntro from "@/components/landing/crepiks-intro.vue";
import cDescription from "@/components/landing/crepiks-description.vue";
import cExplanation from "@/components/landing/crepiks-explanation.vue";
import cPractice from "@/components/landing/crepiks-practice.vue";

export default {
  components: {
    cHeader,
    cIntro,
    cDescription,
    cExplanation,
    cPractice
  }
};
</script>

<style></style>
