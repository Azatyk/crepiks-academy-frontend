<template>
  <div class="instructions" ref="lessonInstructions">
    <div class="drag-height"></div>
    <div class="instructions__heading">
      Задания
    </div>
    <div class="instructions__content">
      <div class="instructions__tasks-description">
        {{ lesson.description.ru }}
      </div>
      <div
        class="instructions__task"
        v-for="(task, index) in lesson.tasks"
        :key="index"
      >
        <span class="instructions__task-dash">—</span>
        <span class="instructions__task-text">{{ task.description.ru }}</span>
      </div>
    </div>
    <div class="instructions__hint" @click="isHintActive = true">
      <div class="instructions__hint-button">Подсказка</div>
    </div>
    <vs-dialog blur v-model="isHintActive">
      <div class="instructions__hint-dialog">
        <h1 class="instructions__hint-title">Подсказка</h1>
        <div class="instructions__hint-text">
          {{ lesson.hint.ru }}
        </div>
        <button
          class="instructions__hint__dialog-button"
          @click="isHintActive = false"
        >
          Понятно
        </button>
      </div>
    </vs-dialog>
    <div
      class="instructions__run-button"
      @click="$emit('run-code-button-clicked')"
    >
      Выполнить
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lesson: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isHintActive: false
    };
  }
  // handleHeightResizing(e) {
  //   let container = this.$refs.interactiveProgramming,
  //     codeEditorBlock = this.$refs.lessonEditor,
  //     instructionsBlock = this.$refs.lessonInstructions;
  //   let offsetBottom = container.clientHeight - e.clientY;
  //   codeEditorBlock.style.height =
  //     container.clientHeight - offsetBottom + "px";
  //   instructionsBlock.style.height = offsetBottom + "px";
  // },
  // handleStartHeightResizing() {
  //   document.addEventListener("mousemove", this.handleHeightResizing);
  // },
  // handleEndHeightResizing() {
  //   document.removeEventListener("mousemove", this.handleHeightResizing);
  // },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.instructions {
  position: relative;
  width: 100%;
  height: 50%;

  &__heading {
    padding-left: 3%;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: #1e272e;
    font-size: 20px;
    border-bottom: 1px solid $color-9;
  }

  &__content {
    box-sizing: border-box;
    padding: 3%;
    width: 100%;
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

  &__hint {
    &-button {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 50px;
      width: calc(100% - 160px);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      color: $color-5;
      border-top: 1px solid $color-9;
      transition: 200ms ease-in-out;
      cursor: pointer;

      &:hover {
        background-color: $color-3;
        transition: 200ms ease-in-out;
      }
    }

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
        transform: scale(1.05);
        color: $color-1;
        background-color: $color-4;
      }
    }
  }

  &__run-button {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 50px;
    width: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 300;
    color: $color-4;
    background-color: $color-1;
    transition: 200ms ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
}

.drag-height {
  width: 100%;
  height: 5px;
  border-top: 1px solid $color-9;
  cursor: s-resize;
}
</style>
