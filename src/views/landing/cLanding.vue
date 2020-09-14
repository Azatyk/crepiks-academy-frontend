<template>
  <div class="landing__page">
    <vue-scroll-progress-bar
      height="7px"
      backgroundColor="linear-gradient(to right, #0d0b6d, #2522a0)"
    />
    <cHeader />
    <cWelcome />
    <cWhatFor />
    <cHow />
    <cAboutCourse />
    <cAboutEnding />
    <cFooter />
  </div>
</template>

<script>
import cHeader from "@/components/landing/cHeader";
import cWelcome from "@/components/landing/cWelcome";
import cWhatFor from "@/components/landing/cWhatFor";
import cHow from "@/components/landing/cHow";
import cAboutCourse from "@/components/landing/cAboutCourse";
import cAboutEnding from "@/components/landing/cAboutEnding";
import cFooter from "@/components/landing/cFooter";
import { VueScrollProgressBar } from "@guillaumebriday/vue-scroll-progress-bar";

export default {
  components: {
    cHeader,
    cWelcome,
    cWhatFor,
    cHow,
    cAboutCourse,
    cAboutEnding,
    cFooter,
    VueScrollProgressBar
  }
};
</script>

<style>
.landing__page {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #eeeef6;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

html {
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
}
</style>
