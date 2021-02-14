<template>
  <rightSideBlock :isOpen="isCourseOpen">
    <i class="bx bx-x course-close" @click="$emit('close-course-block')"></i>
    <div class="course-content">
      <div class="main-info">
        <img
          class="main-info-image"
          :src="course.iconPath"
          alt="Базовая верстка сайтов"
        />
        <h2 class="main-info-title">{{ course.title.ru }}</h2>
        <p class="main-info-description">
          {{ course.description.ru }}
        </p>
        <cButton
          text="Перейти к курсу"
          class="main-info-button"
          @click="
            $router.push(
              '/app/courses/' +
                $route.params.id +
                '/lessons/' +
                course.lessons[0].id
            )
          "
        />
      </div>
      <div class="course-lessons">
        <div class="course-lessons-labels">
          <div class="course-lessons-title">Уроки курса</div>
          <div class="course-lessons-amount">
            {{ course.lessons.length }} урока
          </div>
        </div>
        <div class="course-lessons-list">
          <router-link
            class="lesson"
            v-for="(lesson, index) in course.lessons"
            :key="lesson.id"
            :to="
              '/app/courses/' + $route.params.courseId + '/lessons/' + lesson.id
            "
          >
            <div class="lesson-title">
              <div class="lesson-title-number">{{ index + 1 }}.</div>
              <div class="lesson-title-text">{{ lesson.title.ru }}</div>
            </div>
            <div
              class="lesson-status"
              :class="{
                'lesson-status-completed': isLessonCompleted(lesson.id)
              }"
            >
              {{ isLessonCompleted(lesson.id) ? "Пройдено" : "Не пройден" }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </rightSideBlock>
</template>

<script>
import rightSideBlock from "@/components/common/crepiks-right-side-block";
import cButton from "@/components/common/crepiks-button";

import { mapGetters } from "vuex";

export default {
  components: {
    rightSideBlock,
    cButton
  },

  props: {
    isCourseOpen: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      course: {
        title: {
          ru: ""
        },
        description: {
          ru: ""
        },
        iconPath: "",
        lessons: [
          {
            id: null,
            title: {
              ru: ""
            }
          }
        ]
      },
      completedLessons: [{ id: null }]
    };
  },

  mounted() {
    if (
      this.$route.fullPath == "/app/courses/1" ||
      this.$route.fullPath == "/app/courses/1/"
    ) {
      this.$emit("open-course-block");
    }
  },

  watch: {
    async isCourseOpen() {
      if (this.isCourseOpen) {
        const id = this.$route.params.id;
        await this.$store.dispatch("getCourse", id).then(res => {
          this.course = res.data.course;
        });

        await this.$store
          .dispatch("getCompletedLessons", this.userData.id)
          .then(res => (this.completedLessons = res.data.completedLessons));
      }
    }
  },

  computed: mapGetters(["userData"]),

  methods: {
    isLessonCompleted(lessonId) {
      for (let i = 0; i < this.completedLessons.length; i++) {
        if (this.completedLessons[i].id == lessonId) {
          return true;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.course {
  &-close {
    color: $dark;
    font-size: 25px;
    opacity: 0.4;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

  &-content {
    padding-bottom: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }
}

.main-info {
  margin-top: 30px;
  margin-bottom: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;

  &-image {
    margin-bottom: 25px;
    width: 100%;
  }

  &-title {
    margin-bottom: 10px;
    color: $dark;
    font-size: 30px;
    font-weight: 600;
    opacity: 0.9;
  }

  &-description {
    margin-bottom: 20px;
    color: $dark;
    font-size: 16px;
    font-weight: 500;
    opacity: 0.7;
  }

  &-button {
    width: 170px;
  }
}

.course-lessons {
  width: 100%;
  display: flex;
  flex-direction: column;

  &-labels {
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &-title {
    color: $dark;
    font-size: 20px;
    font-weight: 500;
    opacity: 0.9;
  }

  &-amount {
    color: $dark;
    font-size: 15px;
    font-weight: 400;
    opacity: 0.7;
  }

  &-list {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}

.lesson {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  &-title {
    display: flex;
    flex-direction: row;
    color: $dark;
    font-size: 16px;
    opacity: 0.7;

    &-number {
      margin-right: 7px;
    }
  }

  &-status {
    color: $dark;
    font-size: 12px;
    opacity: 0.6;

    &-completed {
      color: $primary;
    }
  }
}

@media (max-width: 1024px) {
  .course {
    width: 60%;
    right: -60%;

    &-open {
      right: 0;
    }
  }
}

@media (max-width: 750px) {
  .course {
    width: 100%;
    right: -100%;

    &-open {
      right: 0;
    }
  }
}

@media (max-width: 414px) {
  .course {
    padding: 30px 30px;
  }
}
</style>
