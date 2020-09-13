<template>
  <div class="landing__page">
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

export default {
  components: {
    cHeader,
    cWelcome,
    cWhatFor,
    cHow,
    cAboutCourse,
    cAboutEnding,
    cFooter
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
</style>
