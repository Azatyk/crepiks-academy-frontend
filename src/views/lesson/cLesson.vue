<template>
  <div class="page">
    <cHeader type="common" />
    <div class="content">
      <div class="lesson">
        <video :src="lesson.video" controls class="lesson__player"></video>
        <div class="lesson__buttons">
          <cButton
            text="Текстовый конспект"
            class="lesson__button lesson__active-button"
          />
          <cButton text="Ссылки и файлы" class="lesson__button" />
        </div>
        <div class="lesson__text">{{ lesson.description }}</div>
      </div>
      <div class="navigation">
        <router-link
          v-for="(lesson, index) in lessons"
          :key="index"
          :to="'/courses/' + id.courseId + '/lessons/' + lesson._id"
          class="navigation-lesson__link"
        >
          <div class="navigation-lesson">
            <div class="navigation-lesson__point"></div>
            <h2 class="navigation-lesson__title">{{ lesson.title }}</h2>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import cHeader from "@/components/general/cHeader";
import cButton from "@/components/general/cButton";
import { mapGetters } from "vuex";

export default {
  components: {
    cHeader,
    cButton
  },
  // route: {
  //   canReuse: false, // force to reload data
  //   activate(transition) {
  //     console.log("Reload", transition);
  //   },
  // },
  data() {
    return {
      lessons: [],
      id: {
        courseId: this.$route.params.courseId,
        lessonId: this.$route.params.lessonId
      }
    };
  },
  computed: mapGetters(["isLoggedIn", "lesson", "course"]),
  mounted() {
    console.log("mounted");
    this.$store.dispatch("getLesson", this.id);
    this.$store.dispatch("getLessons", this.id.courseId).then(res => {
      this.lessons = res.data;
    });
  },
  // beforeRouteUpdate() {
  //   this.$store.dispatch("getLesson", this.id);
  //   this.$store.dispatch("getLessons", this.id.courseId).then((res) => {
  //     this.lessons = res.data;
  //   });
  // },
  watch: {
    $route() {
      (this.id.courseId = this.$route.params.courseId),
        (this.id.lessonId = this.$route.params.lessonId);
      this.$store.dispatch("getLesson", this.id);
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
  min-height: 100vh;
  height: auto;
  width: 100%;
  background-color: #f8f7fc;
}

.content {
  margin: auto;
  margin-top: 10vh;
  width: 90%;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}

.lesson {
  margin-right: 5%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.lesson__buttons {
  margin-bottom: 3%;
  height: 5vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.lesson__button {
  margin-right: 2%;
  color: white;
  background-color: #516f8c;
  box-shadow: none;
}

.lesson__active-button {
  color: white;
  background-color: #fc7979;
}

.lesson__text {
  width: 100%;
  font-size: 1.3vw;
  color: #516f8c;
  font-weight: 300;
}

.lesson__player {
  margin-bottom: 3%;
  width: 100%;
  outline: none;
  border-radius: 10px;
}

.navigation {
  padding: 3% 1%;
  padding-left: 2%;
  min-height: 50vh;
  width: 30%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
}

.navigation-lesson__link {
  width: 100%;
  text-decoration: none;
}

.navigation-lesson {
  margin-bottom: 5%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.navigation-lesson__point {
  margin-right: 3%;
  width: 15px;
  height: 15px;
  border: 1px solid #516f8c;
  border-radius: 50%;
}

.router-link-active .navigation-lesson__point {
  background-color: #fc7979;
  border: 1px solid #fc7979;
}

.navigation-lesson__title {
  font-size: 1.3vw;
  color: #516f8c;
  font-weight: 500;
}
</style>
