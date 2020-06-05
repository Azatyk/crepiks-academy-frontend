<template>
  <div class="main">
    <cHeader class="header" />
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

<style scoped>
.courses {
  width: 100%;
  box-sizing: border-box;
  padding: 20vh 10%;
}

.header {
  background-color: #34495e;
}
</style>
