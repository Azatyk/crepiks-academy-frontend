<template>
  <div
    class="lesson"
    @keydown.right="isCodeEditorScreen = false"
    @keydown.left="isCodeEditorScreen = true"
  >
    <navigation
      :isNavigationOpen="isNavigationOpen"
      @navigation-closed="isNavigationOpen = false"
      :lessons="lessons"
      :completedLessons="completedLessons"
    />
    <theory
      :isTheoryOpen="isTheoryOpen"
      @theory-closed="isTheoryOpen = false"
      @navigation-opened="isNavigationOpen = true"
    />
    <div class="lesson-screens">
      <div
        class="code-editor-screen lesson-screen-first"
        :class="{ 'first-active': isCodeEditorScreen }"
      >
        <filesNavigation
          @index-opened="
            isHtmlExist = true;
            isHtmlShowing = true;
          "
          @styles-opened="
            isCssExist = true;
            isHtmlShowing = false;
          "
        />
        <div class="code-editor-screen-content">
          <codeEditorHeader
            :isHtmlShowing="isHtmlShowing"
            :isHtmlExist="isHtmlExist"
            :isCssExist="isCssExist"
            @navigation-opened="isNavigationOpen = true"
            @index-clicked="isHtmlShowing = true"
            @styles-clicked="isHtmlShowing = false"
            @index-closed="
              isHtmlExist = false;
              isHtmlShowing = false;
            "
            @styles-closed="
              isCssExist = false;
              isHtmlShowing = true;
            "
            @switch-browser="isCodeEditorScreen = false"
          />
          <div
            class="code-editor-container"
            :class="{
              'code-editor-container-center': !isHtmlExist && !isCssExist
            }"
          >
            <codemirror
              class="code-editor"
              :code="startHtmlCode"
              v-model="htmlCode"
              :options="htmlOptions"
              v-if="isHtmlShowing && isHtmlExist"
            />
            <codemirror
              class="code-editor"
              :code="startCssCode"
              v-model="cssCode"
              :options="cssOptions"
              v-if="!isHtmlShowing && isCssExist"
            />
            <img
              v-if="!isHtmlExist && !isCssExist"
              src="@/assets/images/lesson-empty-image.svg"
              alt="Откройте файл"
              class="code-editor-container-empty-image"
            />
            <span
              v-if="!isHtmlExist && !isCssExist"
              class="code-editor-container-empty-title"
              >Все файлы закрыты</span
            >
          </div>
          <lessonTasks />
        </div>
      </div>
      <div
        class="lesson-screen lesson-screen-second"
        :class="{ 'first-active': isCodeEditorScreen }"
      >
        <browserHeader
          @navigation-opened="isNavigationOpen = true"
          @switch-editor="isCodeEditorScreen = true"
        />
        <browser />
      </div>
    </div>
    <lessonFooter @theory-opened="isTheoryOpen = true" />
  </div>
</template>

<script>
import navigation from "@/components/lesson/crepiks-lesson-navigation";
import theory from "@/components/lesson/crepiks-lesson-theory";

import filesNavigation from "@/components/lesson/crepiks-lesson-files-navigation";
import codeEditorHeader from "@/components/lesson/crepiks-code-editor-header";
import lessonTasks from "@/components/lesson/crepiks-lesson-tasks";
import lessonFooter from "@/components/lesson/crepiks-lesson-footer";

import browserHeader from "@/components/lesson/crepiks-browser-header";
import browser from "@/components/lesson/crepiks-browser";

import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/htmlmixed/htmlmixed.js";
import "codemirror/theme/eclipse.css";

import { mapGetters } from "vuex";

export default {
  components: {
    filesNavigation,
    codeEditorHeader,
    lessonTasks,
    lessonFooter,
    navigation,
    theory,
    browserHeader,
    browser,
    codemirror
  },

  data() {
    return {
      lesson: {},
      lessons: [
        {
          id: null,
          title: {
            ru: ""
          }
        }
      ],
      completedLessons: [],
      isNavigationOpen: false,
      isTheoryOpen: true,
      isCodeEditorScreen: true,
      isHtmlShowing: true,
      isHtmlExist: true,
      isCssExist: true,
      startHtmlCode:
        "<!DOCTYPE html>\n" +
        '<html lang="en">\n' +
        "<head>\n" +
        '    <meta charset="UTF-8">\n' +
        '    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
        "    <title>My site</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "    <h1>Hello, World!</h1>\n" +
        "</body>\n" +
        "</html>\n",
      htmlCode: "",
      htmlOptions: {
        tabSize: 4,
        mode: "text/html",
        theme: "eclipse",
        lineNumbers: true,
        line: true
      },
      startCssCode:
        "body {\n" +
        "  width: 100%;\n" +
        "  height: 100vh;\n" +
        "  display: flex;\n" +
        "  justify-content: center;\n" +
        "  align-items: center;\n" +
        "  background-color: #3498db;\n" +
        "  color: white;\n" +
        "}\n" +
        "\n" +
        "h1 {\n" +
        "  font-size: 40px;\n" +
        "  font-weight: bold;\n" +
        "}\n",
      cssCode: "",
      cssOptions: {
        tabSize: 2,
        mode: "text/css",
        theme: "eclipse",
        lineNumbers: true,
        line: true
      }
    };
  },

  async mounted() {
    document.addEventListener("keydown", function(event) {
      if (event.code == "ArrowRight") {
        this.isCodeEditorScreen = false;
      } else if (event.code == "ArrowLeft") {
        this.isCodeEditorScreen = true;
      }
    });

    let courseId = this.$route.params.courseId;
    let lessonId = this.$route.params.lessonId;

    await this.$store
      .dispatch("getLesson", { courseId, lessonId })
      .then(res => (this.lesson = res.data.lesson));

    await this.$store
      .dispatch("getLessons", courseId)
      .then(res => (this.lessons = res.data.course.lessons));

    await this.$store
      .dispatch("getCompletedLessons", this.userData.id)
      .then(res => (this.completedLessons = res.data.completedLessons));
  },

  computed: mapGetters(["userData"])
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
      display: flex;
      flex-direction: column;
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

  &-content {
    width: calc(100% - 240px);
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}

.code-editor-container {
  width: 100%;
  height: calc(100vh - 100px);

  &-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &-empty-image {
    margin-bottom: 40px;
    width: 500px;
  }

  &-empty-title {
    color: $dark;
    font-size: 30px;
    font-weight: 500;
    opacity: 0.6;
  }
}
</style>

<style lang="scss">
.CodeMirror {
  width: calc(100vw - 240px);
  height: calc(100vh - 100px);
  overflow: scroll;
  z-index: 1 !important;
}
</style>
