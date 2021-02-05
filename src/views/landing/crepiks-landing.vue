<template>
  <div class="landing">
    <c-header />
    <cIntro />
    <cDescription />
    <cExplanation />
  </div>
</template>

<script>
import cHeader from "@/components/new-landing/crepiks-header.vue";
import cIntro from "@/components/new-landing/crepiks-intro.vue";
import cDescription from "@/components/new-landing/crepiks-description.vue";
import cExplanation from "@/components/new-landing/crepiks-explanation.vue";

export default {
  components: {
    cHeader,
    cIntro,
    cDescription,
    cExplanation
  }
};
</script>

<style></style>
