<template>
  <div class="course__page">
    <cAboutCourse :course="course" />
    <div class="course__lessons">
      <!-- <cLessonCard
        v-for="(lesson, index) in lessons"
        :key="index"
        :lesson="lesson"
        :index="index"
      /> -->
      <cLessonCard :title="$t('firstCourseLessonText1')" :index="0" />
      <cLessonCard :title="$t('firstCourseLessonText2')" :index="1" />
      <cLessonCard :title="$t('firstCourseLessonText3')" :index="2" />
      <cLessonCard :title="$t('firstCourseLessonText4')" :index="3" />
      <cLessonCard :title="$t('firstCourseLessonText5')" :index="4" />
      <cLessonCard :title="$t('firstCourseLessonText6')" :index="5" />
      <cLessonCard :title="$t('firstCourseLessonText7')" :index="6" />
      <cLessonCard :title="$t('firstCourseLessonText8')" :index="7" />
      <cLessonCard :title="$t('firstCourseLessonText9')" :index="8" />
      <cLessonCard :title="$t('firstCourseLessonText10')" :index="9" />
      <cLessonCard :title="$t('firstCourseLessonText11')" :index="10" />
      <cLessonCard :title="$t('firstCourseLessonText12')" :index="11" />
      <cLessonCard :title="$t('firstCourseLessonText13')" :index="12" />
      <cLessonCard :title="$t('firstCourseLessonText14')" :index="13" />
      <cLessonCard :title="$t('firstCourseLessonText15')" :index="14" />
      <cLessonCard :title="$t('firstCourseLessonText16')" :index="15" />
      <cLessonCard :title="$t('firstCourseLessonText17')" :index="16" />
      <cLessonCard :title="$t('firstCourseLessonText18')" :index="17" />
      <cLessonCard :title="$t('firstCourseLessonText19')" :index="18" />
      <cLessonCard :title="$t('firstCourseLessonText20')" :index="19" />
      <cLessonCard :title="$t('firstCourseLessonText21')" :index="20" />
      <cLessonCard :title="$t('firstCourseLessonText22')" :index="21" />
      <cLessonCard :title="$t('firstCourseLessonText23')" :index="22" />
      <cLessonCard :title="$t('firstCourseLessonText24')" :index="23" />
      <cLessonCard :title="$t('firstCourseLessonText25')" :index="24" />
      <cLessonCard :title="$t('firstCourseLessonText26')" :index="25" />
      <cLessonCard :title="$t('firstCourseLessonText27')" :index="26" />
      <cLessonCard :title="$t('firstCourseLessonText28')" :index="27" />
      <cLessonCard :title="$t('firstCourseLessonText29')" :index="28" />
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

  @media (max-width: 1200px) {
    &__page {
      padding: 0 5%;
    }
  }
}
</style>
