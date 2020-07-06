<template>
  <div class="course-page">
    <div class="course__intro">
      <div class="course__text">
        <h1 class="intro__heading">{{ course.title }}</h1>
        <div class="intro__description">{{ course.description }}</div>
      </div>
      <img :src="course.image" :alt="course.title" class="intro__image" />
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
        <a-button
          type="primary"
          @click="$router.push('/app/courses/' + id + '/lessons/' + lesson._id)"
          class="lesson__button"
          >Перейти</a-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Button } from "ant-design-vue";

export default {
  components: {
    "a-button": Button
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
      .then(res => (this.course = res.data));
    this.$store.dispatch("getLessons", this.id).then(res => {
      this.lessons = res.data;
    });
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

@media (max-width: 1024px) {
  .course__intro {
    margin-top: 15%;
    width: 85%;
    justify-content: center;
  }

  .course__text {
    margin-right: 0;
    margin-left: 7%;
    width: auto;
  }

  .intro__heading {
    font-size: 6vw;
  }

  .intro__description {
    font-size: 2.5vw;
  }

  .intro__image {
    margin-right: 5%;
    width: 50%;
  }

  .course__lessons {
    width: 85%;
  }

  .course__lesson {
    margin-bottom: 7%;
  }

  .lesson__number {
    margin-right: 3vw;
    font-size: 6vw;
  }

  .lesson__heading {
    font-size: 3.2vw;
  }

  .lesson__button {
    padding: 0 3%;
    height: 5vw;
    font-size: 2.2vw;
  }
}

@media (max-width: 700px) {
  .course__intro {
    margin-top: 20%;
    margin-bottom: 20%;
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
    font-size: 7vw;
  }

  .intro__description {
    margin: auto;
    font-size: 4vw;
  }

  .lesson__number {
    font-size: 7vw;
  }

  .lesson__heading {
    font-size: 3.5vw;
  }

  .lesson__button {
    padding: 0 4%;
    height: 6.5vw;
    font-size: 3vw;
  }
}
</style>
