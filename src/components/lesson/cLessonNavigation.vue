<template>
  <div
    class="navigation"
    :class="{ navigation__closed: !isNavigationMenuOpen }"
  >
    <div class="navigation__content">
      <router-link to="/app/home" class="navigation__logo-link"
        ><div class="navigation__logo">
          Crepiks <span class="navigation__logo-thin">Academy</span>
        </div></router-link
      >
      <div class="navigation__lessons">
        <router-link
          v-for="(lesson, index) in lessons"
          :key="index"
          class="navigation__lesson-link"
          :to="`/app/courses/${$route.params.courseId}/lessons/${lesson.id}`"
        >
          <div class="navigation__lesson">
            <span
              class="navigation__lesson-number"
              :class="{
                'navigation__lesson-number-completed': isLessonCompleted(
                  lesson.id
                )
              }"
              >{{ index + 1 }}</span
            >{{ lesson.title.ru }}
          </div>
        </router-link>
      </div>
    </div>
    <div class="navigation__button" @click="changeNavigationPosition">
      <i class="bx bxs-chevron-right navigation__button-icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lessons: {
      type: Array,
      required: true
    },
    completedLessons: {
      type: Array,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      isNavigationMenuOpen: false
    };
  },

  watch: {
    isOpen() {
      if (!this.isOpen) {
        this.isNavigationMenuOpen = false;
      }
    },

    $route() {
      this.$emit("change-route");
      this.changeNavigationPosition();
    }
  },

  methods: {
    changeNavigationPosition() {
      this.isNavigationMenuOpen = !this.isNavigationMenuOpen;
      if (this.isNavigationMenuOpen) {
        this.$emit("open-navigation");
      } else {
        this.$emit("close-navigation");
      }
    },

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

.navigation {
  position: fixed;
  left: 0;
  height: 100%;
  width: 430px;
  border-radius: 0 30px 30px 0;
  background-color: $color-6;
  z-index: 5;
  transition: 200ms ease-in-out;

  &__content {
    padding: 50px 0 100px 40px;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  &__lessons {
    height: 100%;
    width: 100%;
    overflow: scroll;
  }

  &__logo {
    margin-bottom: 50px;
    color: $color-1;
    font-size: 35px;
    font-weight: bold;

    &-thin {
      font-weight: 300;
    }

    &-link {
      text-decoration: none;
    }
  }

  &__button {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 30px 30px 0;
    background-color: $color-6;
    transition: 200ms ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: $color-3;
      transition: 200ms ease-in-out;

      .navigation__button-icon {
        opacity: 1;
      }
    }

    &-icon {
      font-size: 30px;
      color: $color-5;
      transform: rotate(180deg);
      transition: 200ms ease-in-out;
      opacity: 0.7;
    }
  }

  &__lesson {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    color: $color-5;
    transition: 200ms ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: 0.6;

      .navigation__lesson-number {
        transform: translateX(2px) translateY(2px);
        box-shadow: 2px 2px 7px 0px $color-7;
      }
    }

    &-number {
      margin-right: 15px;
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $color-4;
      border-radius: 10px;
      box-shadow: 4px 4px 7px 0px $color-7;
      transition: 150ms ease-in-out;

      &-completed {
        color: $color-6;
        background-color: #2ecc71;
      }
    }

    &-link {
      text-decoration: none;
    }
  }

  &__closed {
    left: -380px;
    border-radius: 0 30px 30px 0;
    transition: 200ms ease-in-out;

    .navigation__button-icon {
      transform: rotate(0deg);
    }
  }
}

.router-link-active .navigation__lesson-number {
  color: $color-6;
  background-color: #f1c40f;
}
</style>
