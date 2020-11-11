<template>
  <div class="course__page">
    <cAboutCourse :course="course" />
    <div class="course__lessons">
      <cLessonCard
        v-for="(lesson, index) in lessons"
        :key="index"
        :lesson="lesson"
        :index="index"
        :courseId="course.id"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import cAboutCourse from "@/components/course/cAboutCourse";
import cLessonCard from "@/components/course/cLessonCard";

export default {
  components: {
    cAboutCourse,
    cLessonCard
  },
  data() {
    return {
      id: this.$route.params.id,
      course: {
        title: {
          ru: null,
          en: null,
          kz: null
        },
        description: {
          ru: null,
          en: null,
          kz: null
        }
      },
      lessons: []
    };
  },
  computed: mapGetters(["isLoggedIn"]),
  mounted() {
    const loading = this.$vs.loading();

    this.$store
      .dispatch("getCourse", this.id)
      .then(res => (this.course = res.data.course));
    this.$store
      .dispatch("getLessons", this.id)
      .then(res => (this.lessons = res.data.course.lessons));

    loading.close();
  },
  watch: {
    $route() {
      const loading = this.$vs.loading();

      this.id = this.$route.params.id;
      this.$store
        .dispatch("getCourse", this.id)
        .then(res => (this.course = res.data.course));
      this.$store
        .dispatch("getLessons", this.id)
        .then(res => (this.lessons = res.data.lessons));

      loading.close();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.course {
  &__page {
    margin: auto;
    padding: 0 2%;
    width: 100%;
    max-width: 1200px;
    height: auto;
    box-sizing: border-box;
  }

  @media (max-width: 1200px) {
    &__page {
      padding: 0 5%;
    }
  }
}
</style>
