<template>
  <div
    class="lesson-navigation"
    :class="{ 'lesson-navigation-open': isNavigationOpen }"
  >
    <div class="navigation-header">
      <router-link to="/app/courses" class="back-link">
        <i class="bx bx-left-arrow-alt back-link-icon"></i>
        <span class="back-link-title">В главное меню</span>
      </router-link>
      <i
        class="bx bx-x navigation-header-close"
        @click="$emit('navigation-closed')"
      ></i>
    </div>
    <h2 class="navigation-title">Урок 3: Первый HTML</h2>
    <div class="navigation-divide-line"></div>
    <div class="navigation-lessons-list">
      <router-link
        class="navigation-lesson"
        v-for="(lesson, index) in lessons"
        :key="lesson.id"
        :to="'/app/courses/' + $route.params.courseId + '/lessons/' + lesson.id"
      >
        <div class="navigation-lesson-text">
          <span class="navigation-lesson-number">{{ index + 1 }}.</span>
          <span class="navigation-lesson-title">{{ lesson.title.ru }}</span>
        </div>
        <div
          class="navigation-lesson-status"
          :class="{
            'navigation-lesson-status-completed': isLessonCompleted(lesson.id),
            'navigation-lesson-status-current':
              $route.params.lessonId == lesson.id
          }"
        >
          {{
            $route.params.lessonId != lesson.id
              ? isLessonCompleted(lesson.id)
                ? "Пройдено"
                : "Не пройдено"
              : "Текущий урок"
          }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lessons: {
      type: Array
    },
    completedLessons: {
      type: Array
    },
    isNavigationOpen: {
      type: Boolean,
      default: false
    }
  },

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

.lesson-navigation {
  position: fixed;
  left: -500px;
  top: 0;
  padding: 30px 35px;
  width: 500px;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: $white;
  transition: 300ms ease-in-out;
  z-index: 4;

  &-open {
    left: 0;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  }
}

.navigation-header {
  margin-bottom: 35px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &-close {
    color: $dark;
    font-size: 25px;
    opacity: 0.5;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
}

.back-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: $primary;
  text-decoration: none;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.6;
  }

  &-icon {
    margin-right: 7px;
    font-size: 22px;
    opacity: 0.7;
  }

  &-title {
    font-size: 16px;
  }
}

.navigation {
  &-title {
    margin-bottom: 25px;
    color: $dark;
    font-size: 28px;
    font-weight: 600;
  }

  &-divide-line {
    width: 100%;
    height: 2px;
    background-color: #f3f3f3;
  }

  &-lessons-list {
    padding: 25px 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }

  &-lesson {
    margin-bottom: 23px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.8;
    }

    &-text {
      display: flex;
      flex-direction: row;
      color: $dark;
      font-size: 17px;
      opacity: 0.6;

      &-current {
        opacity: 0.9;
      }
    }

    &-number {
      margin-right: 10px;
    }

    &-status {
      color: $dark;
      font-size: 12px;
      opacity: 0.6;

      &-completed {
        color: $primary;
        opacity: 1;
      }

      &-current {
        color: #3498db;
        opacity: 1;
      }
    }
  }
}
</style>
