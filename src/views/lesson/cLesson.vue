<template>
  <div class="page">
    <cHeader type="common" />
    <div class="content">
      <div class="lesson__presentation">
        <div class="lesson__heading">{{ lesson.title }}</div>
        <div class="lesson__description">{{ lesson.description }}</div>
      </div>
      <video :src="lesson.video" controls class="lesson__player"></video>
    </div>
  </div>
</template>

<script>
import cHeader from "@/components/general/cHeader";
import { mapGetters } from "vuex";

export default {
  components: {
    cHeader
  },
  computed: mapGetters(["isLoggedIn", "lesson"]),
  mounted() {
    if (this.isLoggedIn) {
      let data = {
        courseId: this.$route.params.courseId,
        lessonId: this.$route.params.lessonId
      };
      this.$store
        .dispatch("getLesson", data)
        .then(res => console.log(res))
        .catch(err => console.log(err.response));
    }
  }
};
</script>

<style scoped>
.page {
  padding: 0.1px;
  min-height: 100vh;
  height: auto;
  width: 100%;
  background-color: #34495e;
}
.content {
  margin-top: 15%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.lesson__presentation {
  width: 30%;
}

.lesson__heading {
  font-size: 4vw;
  font-weight: 300;
  color: #f8f7fc;
}

.lesson__description {
  margin-top: 2%;
  font-size: 1.5vw;
  font-weight: 300;
  color: #e8e8e8;
}

.lesson__player {
  width: 50%;
  outline: none;
}
</style>
