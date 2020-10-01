<template>
  <div class="instructions__container">
    <div class="instructions" ref="lessonInstructions">
      <!-- <div class="drag-height"></div> -->
      <div class="instructions__heading">
        Задания
      </div>
      <div class="instructions__content">
        <div class="instructions__task">
          <span
            v-for="(task, index) in lesson.tasks"
            :key="index"
            class="instructions__task-dash"
            >—</span
          >task
        </div>
      </div>
      <vs-dialog blur v-model="isHintActive">
        <div class="instructions__hint-dialog">
          <h1 class="instructions__hint-title">Подсказка</h1>
          <div class="instructions__hint-text">
            {{ lesson.hint || "" }}
          </div>
          <div class="hint__dialog-button" @click="isHintActive = false">
            Понятно
          </div>
        </div>
      </vs-dialog>
    </div>
    <div class="instructions__buttons">
      <div class="instructions__buttons-hint" @click="isHintActive = true">
        Подсказка
      </div>
      <div
        class="instructions__buttons-run"
        @click="$emit('run-code-button-clicked')"
      >
        Выполнить
      </div>
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
    padding-left: 3%;
    padding-top: 3%;
    width: 100%;
    height: calc(100% - 50px);
    border-radius: 10px;
    background-color: $color-4;
  }

  &__task {
    margin-bottom: 10px;
    font-size: 15px;
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
    }
  }

  &__hint {
    &-dialog {
      padding: 5%;
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
      font-size: 30px;
      border-radius: 30px;
      background-color: $color-1;
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
