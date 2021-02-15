<template>
  <div class="lesson-footer">
    <button class="lesson-footer-theory" @click="$emit('theory-opened')">
      Теория
    </button>
    <button
      class="lesson-footer-check"
      :class="{ 'lesson-footer-check-complete': isLessonDone }"
      @click="
        isLessonDone ? nextLessonButtonHandler() : $emit('run-button-clicked')
      "
    >
      {{ isLessonDone ? "Далее" : "Проверить" }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isLessonDone: {
      type: Boolean,
      default: false
    },

    lessons: {
      type: Array,
      required: true
    }
  },

  methods: {
    nextLessonButtonHandler() {
      let currentLessonId = Number(this.$route.params.lessonId); // сначала мы определяем какой будет роут следующего урока
      let courseId = Number(this.$route.params.courseId);
      let nextLessonId;

      this.lessons.forEach(lesson => {
        if (lesson.id == currentLessonId)
          nextLessonId = this.lessons[this.lessons.indexOf(lesson) + 1].id;
      });

      this.$router.push(`/app/courses/${courseId}/lessons/${nextLessonId}`); // а потом пушим на этот самый роут

      // Отображаем код в браузере при переходе на следующий урок
      // for (let child of this.$children) {
      //   if (child.$options._componentTag == "cBrowser") {
      //     child.runCode();
      //   }
      // }
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
    width: 100%;
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
      opacity: 0.6;
    }
  }

  &-check {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 30px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $dark;
    font-size: 16px;
    font-weight: 500;
    border: none;
    border-left: 1px solid $border;
    border-top: 1px solid $border;
    background-color: $background;
    z-index: 3;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }

    &-complete {
      color: $white;
      border-color: $primary;
      background-color: $primary;
    }
  }
}
</style>
