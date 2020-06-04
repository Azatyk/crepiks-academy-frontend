<template>
  <div class="main">
    <cHeader />
    <div class="courses">
      <c-Course class="course" />
    </div>
  </div>
</template>

<script>
import cHeader from "@/components/general/cHeader";
import Course from "@/views/courses/components/Course";

export default {
  components: {
    cHeader,
    "c-Course": Course
  }
};
</script>

<style>
.courses {
  width: 100%;
  box-sizing: border-box;
  padding: 5vh 10%;
}
</style>
