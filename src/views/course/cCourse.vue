<template>
  <div class="course-page">
    <div class="course__intro">
      <div class="course__text">
        <h1 class="intro__heading">{{ course.title }}</h1>
        <div class="intro__description">{{ course.description }}</div>
      </div>
      <!-- <img :src="course.image" :alt="course.title" class="intro__image" /> -->
    </div>
    <div class="course__lessons">
      <div
        class="course__lesson"
        v-for="(lesson, index) in lessons"
        :key="index"
      >
        <div class="course__lesson-content">
          <div class="lesson__number">{{ getLessonNumber(index + 1) }}</div>
          <h2 class="lesson__heading">{{ lesson.title }}</h2>
        </div>
        <s-button
          @click="$router.push('/app/courses/' + id + '/lessons/' + lesson.id)"
          class="lesson__button"
          >Перейти</s-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Button from "vuesax/dist/vsButton";
import "vuesax/dist/vuesax.css";

export default {
  components: {
    "s-button": Button
  },
  data() {
    return {
      id: this.$route.params.id,
      course: {},
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
  methods: {
    getLessonNumber(index) {
      if (String(index).length == 1) {
        return "0" + index;
      } else {
        return index;
      }
    }
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

<style scoped>
.course-page {
  margin: auto;
  margin-top: 2%;
  width: 100%;
  max-width: 1000px;
  height: auto;
}

.course__intro {
  margin-bottom: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.intro__heading {
  margin-bottom: 10px;
  width: 100%;
  font-size: 60px;
  color: #34495e;
  font-weight: 800;
}

.intro__description {
  width: 80%;
  font-size: 25px;
  color: #516f8c;
  font-weight: 400;
}

.intro__image {
  margin-top: 5%;
  width: 500px;
}

.course__lessons {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.course__lesson {
  box-sizing: border-box;
  margin-bottom: 20px;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
}

.course__lesson-content {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.lesson__number {
  margin-right: 30px;
  font-size: 60px;
  color: #34495e;
  font-weight: 700;
}

.lesson__heading {
  margin: 0;
  font-size: 30px;
  color: #34495e;
  font-weight: 300;
}

.lesson__button {
  padding: 0 20px;
  height: 40px;
  font-size: 17px;
}

@media (max-width: 1400px) {
  .course-page {
    padding: 0% 3%;
    margin-top: 100px;
    max-width: 760px;
    box-sizing: border-box;
  }

  .intro__heading {
    width: 100%;
    font-size: 43px;
  }

  .intro__description {
    width: 100%;
    font-size: 20px;
  }

  .course__lesson {
    margin-bottom: 5px;
  }

  .lesson__number {
    font-size: 50px;
  }

  .lesson__heading {
    font-size: 25px;
  }

  .intro__image {
    width: 330px;
  }

  .lesson__button {
    height: 35px;
    font-size: 15px;
  }
}

@media (max-width: 1024px) {
  .course-page {
    margin-top: 5%;
    max-width: 100%;
    width: 95%;
  }

  .course__intro {
    margin-bottom: 5%;
  }

  .intro__heading {
    font-size: 5.5vw;
  }

  .intro__image {
    width: 40vw;
  }

  .intro__description {
    width: 90%;
    font-size: 2.3vw;
  }

  .course__lessons {
    margin-bottom: 60px;
  }

  .lesson__number {
    font-size: 60px;
  }

  .lesson__heading {
    font-size: 27px;
  }

  .lesson__button {
    height: 37px;
    font-size: 17px;
  }
}

@media (max-width: 700px) {
  .course-page {
    margin-top: 5%;
  }

  .course__intro {
    margin-bottom: 10%;
    flex-direction: column-reverse;
  }

  .intro__image {
    width: 80%;
  }

  .course__text {
    margin-left: 0;
    width: 90%;
    text-align: center;
  }

  .intro__heading {
    margin: auto;
    font-size: 9vw;
  }

  .intro__description {
    width: 100%;
    font-size: 4.5vw;
  }

  .course__lesson {
    height: 70px;
  }

  .lesson__number {
    margin-right: 10px;
    font-size: 9vw;
  }

  .lesson__heading {
    font-size: 4vw;
  }

  .lesson__button {
    padding: 0 4%;
    height: 7.5vw;
    font-size: 3.3vw;
  }
}
</style>
