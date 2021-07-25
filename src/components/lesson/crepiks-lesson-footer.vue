<template>
  <div class="lesson-footer">
    <button class="lesson-footer-theory" @click="$emit('theory-opened')">
      Теория
    </button>
    <button
      class="lesson-footer-button lesson-footer-run"
      @click="$emit('run-button-clicked')"
    >
      Выполнить
    </button>
    <button
      class="lesson-footer-button lesson-footer-check"
      :class="{ 'lesson-footer-check-complete': isLessonDone }"
      @click="
        isLessonDone ? nextLessonButtonHandler() : $emit('check-button-clicked')
      "
    >
      {{ isTestLesson ? "Завершить" : isLessonDone ? "Далее" : "Проверить" }}
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    isLessonDone: {
      type: Boolean,
      default: false
    },

    isTestLesson: {
      type: Boolean,
      default: false
    },

    lessons: {
      type: Array,
      required: true
    }
  },

  computed: {
    ...mapGetters(["userData"])
  },

  methods: {
    nextLessonButtonHandler() {
      let currentLessonId = Number(this.$route.params.lessonId); // сначала мы определяем какой будет роут следующей темф
      let courseId = Number(this.$route.params.courseId);
      let nextLessonId;
      let nextLessonFree;

      this.lessons.forEach(lesson => {
        if (lesson.id === currentLessonId) {
          nextLessonId = this.lessons[this.lessons.indexOf(lesson) + 1].id;
          nextLessonFree = this.lessons[this.lessons.indexOf(lesson) + 1].free;
        }
      });

      if (
        this.userData.subscription.hasSubscription ||
        Boolean(nextLessonFree)
      ) {
        this.$router.push(`/app/courses/${courseId}/lessons/${nextLessonId}`); // а потом пушим на этот самый роут
      } else {
        this.$emit("need-buy-subscription-notification");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.lesson-footer {
  position: relative;
  width: 100%;
  height: 50px;
  z-index: 2;

  &-theory {
    width: calc(100% - 150px);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $dark;
    font-size: 18px;
    font-weight: 500;
    border: none;
    border-top: 1px solid $border;
    outline: none;
    background-color: $background;
    opacity: 0.8;
    z-index: 2;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }

  &-button {
    position: absolute;
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $dark;
    font-size: 16px;
    font-weight: 500;
    border: none;
    outline: none;
    border-left: 1px solid $border;
    border-top: 1px solid $border;
    background-color: $background;
    z-index: 3;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }

  &-run {
    right: 150px;
    top: 0;
  }

  &-check {
    right: 0;
    top: 0;

    &-complete {
      color: $white;
      border-color: $primary;
      background-color: $primary;
    }
  }
}
</style>
