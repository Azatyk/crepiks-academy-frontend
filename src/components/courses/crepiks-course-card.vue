<template>
  <div class="course-card-wrapper">
    <div class="free-block" v-if="courseFreeProp">
      <div class="free-block-label">Бесплатно</div>
    </div>
    <div class="course-card">
      <div class="card-image-wrapper">
        <img class="card-image" :src="course.iconPath" :alt="course.title" />
      </div>
      <div class="card-text">
        <div>
          <h2 class="card-text-title">{{ course.title }}</h2>
          <p class="card-text-description">
            {{ course.description.substring(0, 99) + ".." }}
          </p>
        </div>
        <div
          class="card-link"
          v-if="!course.soon && $route.fullPath !== '/app/courses/' + course.id"
          @click="$emit('course-opened')"
        >
          <span class="card-link card-link-text">Перейти к курсу</span>
          <i class="bx bx-right-arrow-alt card-link-icon"></i>
        </div>
        <div class="card-link card-link-soon" v-else>Скоро</div>
      </div>
    </div>
    <div class="course-progression" :class="{ progression: progression }">
      <div class="course-progression-text">
        Пройдено тем {{ completedLessons.length }} из
        {{ course.lessons.length }}
      </div>
      <div class="course-card-progression">
        <div :style="fill" class="course-card-progression-fill"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object
    },
    courseFreeProp: {
      type: Number,
      default: 0
    },
    progression: {
      type: Boolean,
      required: false,
      default: false
    },
    completedLessons: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  computed: {
    fill() {
      return (
        "width: " +
        (this.completedLessons.length / this.course.lessons.length) * 100 +
        "%"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.course-card-wrapper {
  width: 400px;
  z-index: 2;
  position: relative;
}

.course-card {
  display: flex;
  flex-direction: row;

  &-progression {
    width: 100%;
    border-radius: 20px;
    height: 7px;
    background-color: #e5e5e8;
    margin-top: 10px;

    &-fill {
      border-radius: 15px;
      width: 0;
      height: 100%;
      background-color: $primary;
    }
  }
}

.course-progression {
  display: none;
  margin-top: 10px;

  &-text {
    font-size: 14px;
    color: $light-dark;
  }
}

.free-block {
  position: absolute;
  left: -20px;
  top: -20px;
  width: 440px;
  height: 133px;
  border: 2px solid $primary;
  border-radius: 10px;
  z-index: -1;

  &-label {
    position: absolute;
    top: -10px;
    right: 20px;
    width: 90px;
    display: block;
    color: $primary;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    background-color: $background;
  }
}

.progression {
  display: block;
}

.card-image {
  &-wrapper {
    margin-right: 10px;
    width: 226px;
  }

  width: 100%;
}

.card-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &-title {
    margin-bottom: 5px;
    color: $dark;
    font-size: 18px;
    font-weight: 500;
  }

  &-description {
    color: $dark;
    font-size: 13px;
    font-weight: 500;
    opacity: 0.6;
  }
}

.card-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: $primary;
  opacity: 0.7;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 3px;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 1;
  }

  &-text {
    margin-right: 5px;
    font-weight: 500;
  }

  &-icon {
    font-size: 18px;
  }

  &-soon {
    opacity: 0.6;
    cursor: default;

    &:hover {
      opacity: 0.6;
    }
  }
}

@media (max-width: 1024px) {
  .free-block {
    width: 107%;
  }
}

@media (max-width: 460px) {
  .card-text {
    &-title {
      font-size: 3.5vw;
    }

    &-description {
      font-size: 2.6vw;
    }
  }

  .card-link {
    font-size: 3.5vw;
  }
}

@media (max-width: 320px) {
  .card-text {
    &-title {
      font-size: 3.2vw;
    }

    &-description {
      font-size: 2.8vw;
      margin-bottom: 7px;
    }
  }

  .card-link {
    font-size: 3.1vw;
  }

  .card-image {
    width: 80px;
    height: 80px;
  }

  .free-block {
    height: 115px;
  }
}
</style>
