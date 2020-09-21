<template>
  <div class="courses__page">
    <cWelcome />
    <div class="courses__cards">
      <cCourseCard
        class="card"
        v-for="(course, index) in courses"
        :key="index"
        :image="course.iconPath"
        :title="course.title.ru"
        :description="course.description.ru"
        :lessonsAmount="course.duration"
        :id="course.id"
      />
    </div>
  </div>
</template>

<script>
import cWelcome from "@/components/courses/cWelcome";
import cCourseCard from "@/components/courses/cCourseCard";

export default {
  components: {
    cWelcome,
    cCourseCard
  },
  data() {
    return {
      courses: []
    };
  },
  async mounted() {
    await this.$store
      .dispatch("getCourses")
      .then(res => (this.courses = res.data.courses));
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.courses {
  &__page {
    padding: 0 2%;
    margin: auto;
    width: 100%;
    max-width: 1200px;
    height: auto;
    box-sizing: border-box;
  }

  &__cards {
    margin-top: 10vh;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
}
</style>
