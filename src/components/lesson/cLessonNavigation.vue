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
          :to="
            '/app/courses/' + $route.params.courseId + '/lessons/' + lesson.id
          "
          class="navigation__lesson-link"
        >
          <div class="navigation__lesson">
            <span class="navigation__lesson-number">{{ lesson.id }}</span
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
  methods: {
    changeNavigationPosition() {
      this.isNavigationMenuOpen = !this.isNavigationMenuOpen;
      if (this.isNavigationMenuOpen) {
        this.$emit("open-navigation");
      } else {
        this.$emit("close-navigation");
      }
    }
  },
  watch: {
    isOpen() {
      if (!this.isOpen) {
        this.isNavigationMenuOpen = false;
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
  width: 500px;
  background-color: white;
  z-index: 5;
  transition: 200ms ease-in-out;

  &__content {
    padding: 50px 0 0 40px;
  }

  &__logo {
    margin-bottom: 70px;
    color: $color-1;
    font-size: 30px;
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
    border-right: 1px solid $color-9;
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
      font-size: 18px;
      color: $color-5;
      transform: rotate(180deg);
      transition: 200ms ease-in-out;
      opacity: 0.7;
    }
  }

  &__lesson {
    margin-bottom: 15px;
    font-size: 17px;
    color: $color-5;
    transition: 200ms ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }

    &-number {
      margin-right: 10px;
    }

    &-link {
      text-decoration: none;
    }
  }

  &__closed {
    left: -450px;
    transition: 200ms ease-in-out;

    .navigation__button-icon {
      transform: rotate(0deg);
    }
  }
}

.navClosed {
  left: -450px;
  transition: 200ms ease-in-out;
}

.interactive__navigation-target:hover > .interactive__navigation-icon {
  color: #1e272e !important;
  transition: 200ms ease-in-out;
}

.black__background {
  position: absolute;
  top: 0;
  margin-left: 50px;
  height: 100vh;
  width: calc(100% - 50px);
  background-color: #1e272e;
  opacity: 0.2;
  transition: 200ms ease-in-out;
  z-index: 2;
}

.navClosed ~ .interactive__content {
  filter: none;
  transition: 200ms ease-in-out;
}
</style>
