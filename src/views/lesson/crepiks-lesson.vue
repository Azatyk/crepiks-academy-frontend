<template>
  <div class="lesson">
    <div class="lesson-screens">
      <div
        class="code-editor-screen lesson-screen-first"
        :class="{ 'first-active': isCodeEditorScreen }"
      >
        <filesNavigation />
      </div>
      <div
        class="lesson-screen lesson-screen-second"
        :class="{ 'first-active': isCodeEditorScreen }"
      ></div>
    </div>
    <lessonFooter />
  </div>
</template>

<script>
import filesNavigation from "@/components/lesson/crepiks-lesson-files-navigation";
import lessonFooter from "@/components/lesson/crepiks-lesson-footer";

export default {
  components: {
    filesNavigation,
    lessonFooter
  },

  data() {
    return {
      isCodeEditorScreen: true
    };
  },

  mounted() {
    document.addEventListener("keydown", function(event) {
      if (event.code == "ArrowRight") {
        this.isCodeEditorScreen = false;
      } else if (event.code == "ArrowLeft") {
        this.isCodeEditorScreen = true;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.lesson {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &-screens {
    width: 200vw;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

  &-screen {
    width: 100vw;
    height: calc(100vh - 50px);

    &-first {
      transform: translateX(-100vw);
      background-color: rgba(0, 0, 0, 0.2);
      transition: 400ms ease-in-out;
    }

    &-second {
      transform: translateX(-100vw);
      background-color: rgba(0, 0, 0, 0.4);
      transition: 400ms ease-in-out;
    }
  }
}

.first-active {
  transform: translateX(0);
}

.code-editor-screen {
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: row;
  background-color: $white;
}
</style>
