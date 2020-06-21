<template>
  <div class="page">
    <cHeader type="common" />
    <div class="content">
      <div class="course__intro">
        <div class="course__text">
          <h1 class="intro__heading">{{ personalCourse.title }}</h1>
          <div class="intro__description">{{ personalCourse.description }}</div>
        </div>
        <img
          :src="personalCourse.image"
          :alt="personalCourse.title"
          class="intro__image"
        />
      </div>
      <div class="course__lessons">
        <div
          class="course__lesson"
          v-for="(lesson, index) in personalCourse.lessons"
          :key="index"
        >
          <div class="course__lesson-content">
            <div class="lesson__number">{{ getLessonNumber(index + 1) }}</div>
            <h2 class="lesson__heading">{{ lesson.title }}</h2>
          </div>
          <cButtonLink
            :route="'/courses/' + id + '/lessons/' + lesson._id"
            text="Перейти"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cButtonLink from "@/components/general/cButtonLink";
import cHeader from "@/components/general/cHeader";
import { mapGetters } from "vuex";

export default {
  components: {
    cHeader,
    cButtonLink
  },
  data() {
    return {
      id: this.$route.params.id,
      personalCourse: {
        title: "",
        description: "",
        image: "",
        lessons: []
      }
    };
  },
  computed: mapGetters(["isLoggedIn", "course"]),
  mounted() {
    if (this.isLoggedIn) {
      this.$store.dispatch("getCourse", this.id);
      this.$store
        .dispatch("getLessons", this.id)
        .then(() => {
          this.personalCourse = this.course;
        })
        .catch(err => console.log(err.response));
    } else {
      this.$router.push("/login");
    }
  },
  methods: {
    getLessonNumber(index) {
      if (String(index).length == 1) {
        return "0" + index;
      } else {
        return index;
      }
    }
  }
};
</script>

<style scoped>
.page {
  padding: 0.1px;
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: #34495e;
}

.content {
  margin-top: 5%;
  width: 100%;
  height: auto;
}

.course__intro {
  margin: auto;
  margin-top: 10%;
  margin-bottom: 10%;
  max-width: 1440px;
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.course__text {
  margin-right: 5%;
  width: 100%;
}

.intro__heading {
  margin-bottom: 3%;
  width: 90%;
  font-size: 3.5vw;
  color: #f8f7fc;
  font-weight: 800;
}

.intro__description {
  width: 100%;
  font-size: 1.5vw;
  color: #e8e8e8;
  font-weight: 400;
}

.intro__image {
  margin-top: 3%;
  width: 50vw;
}

.course__lessons {
  margin: auto;
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.course__lesson {
  padding: 0 2%;
  box-sizing: border-box;
  margin-bottom: 2%;
  width: 100%;
  height: 7vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f7fc;
  border-radius: 5px;
}

.course__lesson-content {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.lesson__number {
  margin-right: 2vw;
  font-size: 4vw;
  color: #516f8c;
  font-weight: 700;
}

.lesson__heading {
  font-size: 2.3vw;
  color: #516f8c;
  font-weight: 300;
}
</style>
