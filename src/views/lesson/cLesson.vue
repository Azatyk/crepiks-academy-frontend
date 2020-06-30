<template>
  <div class="lesson__page">
    <div class="content">
      <div class="lesson__title">
        <span class="lesson__topic">Тема урока:</span> {{ lesson.title }}
      </div>
      <div class="lesson">
        <video :src="lesson.video" controls class="lesson__player"></video>
        <div class="lesson__tabs-container">
          <a-tabs default-active-key="1" class="lesson__tabs">
            <a-tab-pane key="1" tab="Описание" class="tab-text">
              {{ lesson.description }}
            </a-tab-pane>
            <a-tab-pane key="2" tab="Ссылки и файлы" class="tab-text">
              <a
                :href="link"
                class="lesson__link"
                v-for="(link, index) in lesson.links"
                :key="index"
              >
                {{ link }}
              </a>
            </a-tab-pane>
          </a-tabs>
        </div>
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
import { mapGetters } from "vuex";
import { Tabs } from "ant-design-vue";
import { TabPane } from "ant-design-vue/lib/tabs/index";

export default {
  components: {
    "a-tabs": Tabs,
    "a-tab-pane": TabPane
  },
  data() {
    return {
      lesson: {},
      lessons: [],
      id: {
        courseId: this.$route.params.courseId,
        lessonId: this.$route.params.lessonId
      }
    };
  },
  computed: mapGetters(["isLoggedIn"]),
  mounted() {
    this.$store
      .dispatch("getLesson", this.id)
      .then(res => (this.lesson = res.data));
    this.$store
      .dispatch("getLessons", this.id.courseId)
      .then(res => (this.lessons = res.data));
  },
  watch: {
    $route() {
      this.id.courseId = this.$route.params.courseId;
      this.id.lessonId = this.$route.params.lessonId;
      this.$store
        .dispatch("getLesson", this.id)
        .then(res => (this.lesson = res.data));
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
.lesson__page {
  padding: 0.1px;
}

.content {
  margin: auto;
  margin-top: 15vh;
  width: 85%;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

.lesson {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.lesson__title {
  width: 100%;
  height: 3vw;
  font-size: 1.2vw;
  color: #516f8c;
  text-align: left;
}

.lesson__topic {
  color: #fc7979;
}

.lesson__link {
  margin-bottom: 0.5vw;
  width: 10%;
  display: block;
  color: #516f8c;
  font-weight: 300;
}

.lesson__active-button {
  color: white;
  background-color: #fc7979;
}

.lesson__player {
  margin-bottom: 3%;
  width: 100%;
  outline: none;
  border-radius: 10px;
}

.lesson__tabs-container {
  margin-bottom: 5vw;
}

.tab-text {
  font-size: 1.3vw;
  color: #516f8c;
  font-weight: 300;
}

.navigation {
  padding: 2.5% 1%;
  padding-bottom: 1%;
  padding-left: 2%;
  width: 25%;
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
  margin: auto;
  margin-bottom: 2vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.navigation-lesson__point {
  margin-right: 5%;
  width: 13px;
  height: 13px;
  border: 1px solid #516f8c;
  border-radius: 50%;
}

.router-link-active .navigation-lesson__point {
  background-color: #fc7979;
  border: 1px solid #fc7979;
}

.navigation-lesson__title {
  margin-bottom: 0;
  font-size: 1vw;
  color: #516f8c;
  font-weight: 500;
}

@media (max-width: 1024px) {
  .content {
    flex-direction: column;
  }

  .lesson__title {
    height: 7vw;
    font-size: 3.5vw;
  }

  .lesson {
    width: 100%;
  }

  .lesson__player {
    font-size: 3vw;
  }

  .lesson__tabs-container {
    width: 100%;
  }

  .lesson__tabs {
    font-size: 5vw !important;
  }

  .tab-text {
    font-size: 3vw;
  }

  .navigation {
    margin-bottom: 10%;
    padding: 3% 5%;
    padding-bottom: 1%;
    width: 100%;
  }

  .navigation-lesson__point {
    margin-right: 3%;
    width: 22px;
    height: 22px;
  }

  .navigation-lesson__title {
    font-size: 3vw;
  }
}
</style>
