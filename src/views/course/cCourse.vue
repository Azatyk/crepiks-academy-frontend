<template>
  <div class="course__page">
    <cAboutCourse :course="course" />
    <div class="course__lessons">
      <cLessonCard
        v-for="(lesson, index) in lessons"
        :key="index"
        :lesson="lesson"
        :index="index"
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
    this.$store
      .dispatch("getCourse", this.id)
      .then(res => (this.course = res.data.course));
    this.$store
      .dispatch("getLessons", this.id)
      .then(res => (this.lessons = res.data.lessons));
  },
  watch: {
    $route() {
      this.id = this.$route.params.id;
      this.$store
        .dispatch("getCourse", this.id)
        .then(res => (this.course = res.data.course));
      this.$store
        .dispatch("getLessons", this.id)
        .then(res => (this.lessons = res.data.lessons));
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
}
</style>
