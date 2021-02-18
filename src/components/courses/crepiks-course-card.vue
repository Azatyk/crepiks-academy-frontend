<template>
  <div class="course-card-wrapper">
    <div class="course-card">
      <img class="card-image" :src="image" :alt="title" />
      <div class="card-text">
        <h2 class="card-text-title">{{ title }}</h2>
        <p class="card-text-description">{{ description }}</p>
        <div
          class="card-link"
          v-if="!isSoon && $route.fullPath !== '/app/courses/' + id"
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
        Пройдено уроков {{ completedLessons.length }} из {{ lessons.length }}
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
    image: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    isSoon: {
      type: Boolean,
      default: false
    },
    id: {
      type: Number
    },
    progression: {
      type: Boolean,
      required: false,
      default: false
    },
    lessons: {
      type: Array,
      required: false,
      default: () => []
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
        (this.completedLessons.length / this.lessons.length) * 100 +
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
  margin-top: 20px;

  &-text {
    font-size: 14px;
    color: $light-dark;
  }
}

.progression {
  display: block;
}

.card-image {
  margin-right: 10px;
  height: 100px;
  width: 100px;
}

.card-text {
  display: flex;
  flex-direction: column;

  &-title {
    margin-bottom: 5px;
    color: $dark;
    font-size: 18px;
    font-weight: 500;
  }

  &-description {
    margin-bottom: 10px;
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
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 1;
  }

  &-text {
    margin-right: 5px;
    font-size: 14px;
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

@media (max-width: 460px) {
  .card-text {
    &-title {
      font-size: 3.5vw;
    }

    &-description {
      font-size: 3vw;
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
}
</style>
