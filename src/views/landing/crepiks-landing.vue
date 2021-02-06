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
import cHeader from "@/components/new-landing/crepiks-header.vue";
import cIntro from "@/components/new-landing/crepiks-intro.vue";
import cDescription from "@/components/new-landing/crepiks-description.vue";
import cExplanation from "@/components/new-landing/crepiks-explanation.vue";
import cPractice from "@/components/new-landing/crepiks-practice.vue";

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
