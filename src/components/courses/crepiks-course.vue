<template>
  <div class="course" :class="{ 'course-open': isCourseOpen }">
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
          @click="$router.push('/app/courses/1/lessons/1')"
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
          <div
            class="lesson"
            v-for="(lesson, index) in course.lessons"
            :key="lesson.id"
          >
            <div class="lesson-title">
              <div class="lesson-title-number">{{ index + 1 }}.</div>
              <div class="lesson-title-text">{{ lesson.title.ru }}</div>
            </div>
            <div class="lesson-status">Не пройден</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cButton from "@/components/common/crepiks-button";

export default {
  components: {
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
      }
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
    isCourseOpen() {
      if (this.isCourseOpen) {
        const id = this.$route.params.id;
        this.$store.dispatch("getCourse", id).then(res => {
          this.course = res.data.course;
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.course {
  position: fixed;
  right: -40%;
  top: 0;
  padding: 60px 50px;
  padding-bottom: 0;
  width: 40%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: $white;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  transition: 400ms ease-in-out;
  z-index: 3;

  &-open {
    right: 0;
  }

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
