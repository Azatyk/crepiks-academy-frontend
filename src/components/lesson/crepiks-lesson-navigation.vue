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
    <h2 class="navigation-title">
      Тема {{ getLessonIndex() + 1 }}: {{ lesson.title }}
    </h2>
    <div class="navigation-divide-line"></div>
    <vuescroll :ops="ops">
      <div class="navigation-lessons-list">
        <div
          class="navigation-lesson"
          v-for="(lesson, index) in lessons"
          :key="lesson.id"
          @click="handleExactLessonClick(lesson.id, lesson.free)"
          :to="
            '/app/courses/' + $route.params.courseId + '/lessons/' + lesson.id
          "
        >
          <div class="navigation-lesson-text">
            <span class="navigation-lesson-number">{{ index + 1 }}.</span>
            <span class="navigation-lesson-title">{{ lesson.title }}</span>
          </div>
          <div
            class="navigation-lesson-status"
            :class="{
              'navigation-lesson-status-completed': isLessonCompleted(
                lesson.id
              ),
              'navigation-lesson-status-current':
                $route.params.lessonId == lesson.id
            }"
            v-if="userData.subscription.hasSubscription || lesson.free"
          >
            {{
              $route.params.lessonId != lesson.id
                ? isLessonCompleted(lesson.id)
                  ? "Пройдено"
                  : "Не пройдено"
                : "Текущая тема"
            }}
          </div>
          <div class="navigation-lesson-status" v-else>
            <i class="bx bxs-lock-alt navigation-lesson-status-lock"></i>
          </div>
        </div>
      </div>
    </vuescroll>
  </div>
</template>

<script>
import vuescroll from "vuescroll";

import { mapGetters } from "vuex";

export default {
  props: {
    lessons: {
      type: Array
    },
    lesson: {
      type: Object
    },

    completedLessons: {
      type: Array
    },
    isNavigationOpen: {
      type: Boolean,
      default: false
    }
  },

  components: {
    vuescroll
  },

  data() {
    return {
      ops: {
        vuescroll: {
          mode: "native"
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: false,
          scrollingY: true,
          speed: 300,
          easing: "easeInOutQuint",
          verticalNativeBarPos: "right"
        },
        rail: {
          background: "#2d2c2c",
          opacity: 0.0,
          size: "10px",
          specifyBorderRadius: "10px",
          gutterOfEnds: null,
          gutterOfSide: "0px",
          keepShow: false
        },
        bar: {
          showDelay: 1000,
          onlyShowBarOnScroll: true,
          keepShow: false,
          background: "#2d2c2c",
          opacity: 0.3,
          hoverStyle: false,
          specifyBorderRadius: "5px",
          minSize: 0,
          size: "10px",
          disable: false
        }
      }
    };
  },

  computed: {
    ...mapGetters(["userData"])
  },

  methods: {
    isLessonCompleted(lessonId) {
      for (let i = 0; i < this.completedLessons.length; i++) {
        if (this.completedLessons[i].id == lessonId) {
          return true;
        }
      }
    },

    getLessonIndex() {
      for (let i = 0; i < this.lessons.length; i++) {
        if (this.lessons[i].id == this.lesson.id) return i;
      }
    },

    handleExactLessonClick(lessonId, lessonFree) {
      if (this.userData.subscription.hasSubscription || Boolean(lessonFree)) {
        this.$router.push(
          "/app/courses/" + this.$route.params.courseId + "/lessons/" + lessonId
        );
      } else {
        this.$emit("need-buy-subscription-notification");
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
  transition: transform 300ms ease-in-out;
  will-change: transform;
  z-index: 4;

  &-open {
    -moz-transform: translateX(100%);
    -ms-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    -o-transform: translateX(100%);
    transform: translateX(100%);
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
    margin: 25px 0;
    padding-right: 30px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
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
      width: 75%;
      display: flex;
      flex-direction: row;
      color: $dark;
      font-size: 17px;
      line-height: 140%;
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

      &-lock {
        font-size: 17px;
        opacity: 0.7;
      }
    }
  }
}
</style>
