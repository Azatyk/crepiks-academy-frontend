<template>
  <div
    class="lesson-theory"
    :class="{
      'lesson-theory-open': isTheoryOpen,
      'lesson-theory-only': isTheoryOnly
    }"
  >
    <span class="lesson-theory-navigation" @click="$emit('navigation-opened')"
      >Список уроков</span
    >
    <i
      v-if="!isTheoryOnly"
      class="bx bx-x lesson-theory-close"
      @click="$emit('theory-closed')"
    ></i>
    <div class="content-full">
      <div class="content">
        <h1 class="lesson-theory-title">{{ lesson.title.ru }}</h1>
        <p class="lesson-theory-text" v-html="lesson.theory.ru"></p>
        <cButton
          :text="isTheoryOnly ? 'Следующий урок' : 'Перейти к заданию'"
          :isBold="true"
          size="big"
          class="lesson-theory-button"
          @click="isTheoryOnly ? handleTheoryButton() : $emit('theory-closed')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import cButton from "@/components/common/crepiks-button";

export default {
  props: {
    isTheoryOnly: {
      type: Boolean,
      required: true
    },
    isTheoryOpen: {
      type: Boolean,
      default: false
    },
    lesson: {
      type: Object
    },
    lessons: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      isLessonLast: false
    };
  },

  components: {
    cButton
  },

  methods: {
    handleTheoryButton() {
      if (this.isLessonLast) {
        this.addCompletedLesson();
        this.$router.push("/app/courses/" + this.$route.params.courseId);
      } else {
        let courseId = this.$route.params.courseId;
        let currentLessonId = Number(this.$route.params.lessonId);
        let nextLessonId;

        this.lessons.forEach(lesson => {
          if (lesson.id == currentLessonId) {
            nextLessonId = this.lessons[this.lessons.indexOf(lesson) + 1].id;
          }
        });

        this.$emit("add-completed-lessons");

        this.$router.push(
          "/app/courses/" + courseId + "/lessons/" + nextLessonId
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.lesson-theory {
  position: fixed;
  bottom: -99.5vh;
  left: 0;
  right: 0;
  margin: auto;
  width: 99%;
  height: 99.5vh;
  display: flex;
  justify-content: center;
  border-radius: 10px 10px 0 0;
  background-color: $white;
  z-index: 3;
  transition: transform 400ms ease-in-out;
  will-change: transform;

  &-only {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }

  &-open {
    -moz-transform: translateY(-99.5vh);
    -ms-transform: translateY(-99.5vh);
    -webkit-transform: translateY(-99.5vh);
    -o-transform: translateY(-99.5vh);
    transform: translateY(-99.5vh);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.2);
  }

  &-navigation {
    position: absolute;
    top: 4%;
    left: 3%;
    color: $primary;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }

  &-close {
    position: absolute;
    top: 4%;
    right: 3%;
    font-size: 35px;
    opacity: 0.6;
    cursor: pointer;
    z-index: 3;

    &:hover {
      opacity: 0.9;
    }
  }

  &-title {
    margin-bottom: 30px;
    color: $dark;
    font-size: 40px;
    font-weight: 600;
  }

  &-text {
    margin-bottom: 50px;
    color: $dark;
    font-size: 22px;
  }

  &-button {
    width: 220px;
  }
}

.content {
  padding: 100px 0;
  margin: auto;
  width: 800px;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  &-full {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: scroll;
  }
}
</style>
