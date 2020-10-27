<template>
  <div class="instructions__container">
    <div class="instructions" ref="lessonInstructions">
      <div class="instructions__heading">
        Задания
      </div>
      <div class="instructions__content">
        <div
          class="instructions__tasks-description"
          v-html="lesson.description.ru"
        ></div>
        <div
          class="instructions__task"
          v-for="(task, index) in lesson.tasks"
          :key="index"
        >
          <span class="instructions__task-dash">—</span>
          <span class="instructions__task-text">{{ task.description.ru }}</span>
        </div>
      </div>
    </div>
    <div class="instructions__buttons">
      <button class="instructions__buttons-hint" @click="isHintActive = true">
        Подсказка
      </button>
      <button
        class="instructions__buttons-run"
        :class="{ 'instructions__buttons-next': isNextButton }"
        @click="
          isNextButton
            ? $router.push(`courses/${courseId}/lessons/${lessonId + 1}`)
            : $emit('run-code-button-clicked')
        "
      >
        {{ isNextButton ? "Далее" : "Выполнить" }}
      </button>
    </div>
    <vs-dialog blur v-model="isHintActive">
      <div class="instructions__hint-dialog">
        <h1 class="instructions__hint-title">Подсказка</h1>
        <div class="instructions__hint-text" v-html="lesson.hint.ru"></div>
        <button
          class="instructions__hint__dialog-button"
          @click="isHintActive = false"
        >
          Понятно
        </button>
      </div>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  props: {
    lesson: {
      type: Object,
      required: true
    },
    isNextButton: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      isHintActive: false,
      courseId: this.$route.params.courseId,
      lessonId: this.$route.params.lessonId
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.instructions {
  position: relative;
  margin: 0 1%;
  width: 100%;
  height: 80%;
  border-radius: 10px;
  background-color: $color-6;

  &__container {
    width: 100%;
    height: 38%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__heading {
    padding-left: 3%;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: #1e272e;
    font-size: 20px;
  }

  &__content {
    box-sizing: border-box;
    padding: 3%;
    width: 100%;
    height: calc(100% - 50px);
    border-radius: 10px;
    background-color: $color-4;
    overflow: scroll;
  }

  &__tasks-description {
    margin-bottom: 20px;
    font-size: 18px;
  }

  &__task {
    margin-bottom: 10px;
    font-size: 18px;
    color: #1e272e;

    &-dash {
      margin-right: 10px;
    }
  }

  &__buttons {
    margin: 0 1%;
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &-hint {
      height: 100%;
      width: 76%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      color: $color-5;
      border: none;
      border-radius: 10px;
      background-color: $color-6;
      transition: 200ms ease-in-out;
      cursor: pointer;

      &:hover {
        background-color: $color-4;
      }
    }

    &-run {
      height: 100%;
      width: 21%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      font-size: 18px;
      color: $color-4;
      border: 3px solid $color-2;
      border-radius: 10px;
      background-color: $color-2;
      transition: 200ms ease-in-out;
      cursor: pointer;

      &:hover {
        color: $color-2;
        background-color: $color-4;
      }

      &-next {
        background-color: #2ecc71;
      }
    }
  }

  &__hint {
    &-dialog {
      padding: 5%;
      padding-bottom: 3%;
    }

    &-title {
      margin-bottom: 20px;
      font-size: 40px;
      color: $color-5;
      font-weight: 700;
    }

    &-text {
      margin-bottom: 25px;
      font-size: 25px;
      color: $color-5;
      font-weight: 300;
    }

    &__dialog-button {
      padding: 8px 22px;
      color: $color-4;
      font-size: 25px;
      border: 2px solid $color-2;
      border-radius: 15px;
      background-color: $color-2;
      transition: 150ms ease-in-out;
      cursor: pointer;

      &:hover {
        color: $color-1;
        background-color: $color-4;
      }
    }
  }
}

// .drag-height {
//   width: 100%;
//   height: 5px;
//   border-top: 1px solid $color-9;
//   cursor: s-resize;
// }
</style>
