<template>
  <div class="landing">
    <c-header />
    <cIntro />
    <cDescription />
  </div>
</template>

<script>
import cHeader from "@/components/new-landing/crepiks-header.vue";
import cIntro from "@/components/new-landing/crepiks-intro.vue";
import cDescription from "@/components/new-landing/crepiks-description.vue";

export default {
  components: {
    cHeader,
    cIntro,
    cDescription
  }
};
</script>

<style></style>
