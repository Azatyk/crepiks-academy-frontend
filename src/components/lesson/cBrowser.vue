<template>
  <div class="browser__container" ref="interactiveBrowser">
    <!-- <div class="drag-width"></div> -->
    <div class="browser">
      <div class="browser__heading">
        Браузер
      </div>
      <div class="browser__content">
        <iframe
          src="/browser.html"
          name="browser"
          class="browser__frame"
          id="interactiveFrame"
          noresize
        ></iframe>
        <vs-dialog
          overflow-hidden
          auto-width
          full-screen
          blur
          v-model="isTheoryActive"
        >
          <div class="browser__theory">
            <div class="browser__theory-text">
              <h1 class="browser__theory-title">{{ lesson.title.ru }}</h1>
              <p class="browser__theory-description">{{ lesson.theory.ru }}</p>
              <button class="browser__theory-text-button">Круто!</button>
            </div>
          </div>
        </vs-dialog>
      </div>
    </div>
    <div class="browser__theory-button" @click="isTheoryActive = true">
      Теория
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
      isTheoryActive: false
    };
  }
  // methods: {
  //   handleWidthResizing(e) {
  //     let container = this.$refs.interactiveContent,
  //       programmingBlock = this.$refs.interactiveProgramming,
  //       browserBlock = this.$refs.interactiveBrowser;
  //     let offsetRight = container.clientWidth - e.clientX + 50;
  //     console.log("Ширина контейнера", container.clientWidth);
  //     programmingBlock.style.width = container.clientWidth - offsetRight + "px";
  //     browserBlock.style.width = offsetRight + "px";
  //   },
  //   handleStartWidthResizing() {
  //     document.addEventListener("mousemove", this.handleWidthResizing);
  //   },
  //   handleEndWidthResizing() {
  //     document.removeEventListener("mousemove", this.handleWidthResizing);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.browser {
  width: 100%;
  height: 92%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  background-color: $color-6;

  &__container {
    margin: 3vh 1%;
    margin-left: 0.5%;
    width: 48%;
    height: 94vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__content {
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: $color-4;
  }

  &__heading {
    padding-left: 3%;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: $color-5;
    font-size: 20px;
  }

  &__frame {
    width: 100%;
    height: calc(100% - 100px);
    border: none;
  }

  &__theory {
    margin: auto;
    margin-top: 5vh;
    width: 100%;
    max-width: 800px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;

    &-title {
      margin-bottom: 40px !important;
      width: auto;
      color: $color-5;
      font-size: 30px;
      font-weight: 500;
    }

    &-description {
      margin-bottom: 50px;
      width: auto;
      color: $color-5;
      font-size: 25px;
      font-weight: 400;
      line-height: 1.3;
    }

    &-text-button {
      padding: 7px 24px;
      color: $color-4;
      font-size: 23px;
      border-radius: 10px;
      background-color: $color-2;
      transition: 150ms ease-in-out;
      cursor: pointer;

      &:hover {
        color: $color-2;
        background-color: $color-4;
      }
    }

    &-button {
      width: 100%;
      height: 6%;
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

    &-title {
      margin-bottom: 50px;
      font-size: 50px;
      color: $color-5;
      font-weight: 700;
    }

    &-text {
      font-size: 30px;
      color: $color-5;
      font-weight: 300;
    }
  }
}

// .drag-width {
//   width: 5px;
//   height: 100%;
//   border-left: 1px solid $color-9;
//   // cursor: w-resize;
// }
</style>
