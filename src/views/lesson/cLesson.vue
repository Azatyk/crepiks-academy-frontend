<template>
  <div class="lesson__page">
    <cLessonNavigation
      :lessons="lessons"
      :isOpen="isNavigationOpen"
      @open-navigation="isNavigationOpen = true"
      @close-navigation="isNavigationOpen = false"
      @change-route="handleChangeRoute"
    />
    <div
      class="lesson__blur-background"
      :class="{ 'lesson__blur-background-active': isNavigationOpen }"
      @click="isNavigationOpen = false"
    ></div>
    <div class="lesson__content" ref="interactiveContent">
      <div class="lesson__programming" ref="interactiveProgramming">
        <cCodeEditor
          :lesson="lesson"
          @change-html-code="lesson.htmlCode = $event"
          @change-css-code="lesson.cssCode = $event"
        />
        <cLessonInstructions
          :lesson="lesson"
          :lessons="lessons"
          :isNextButton="isLessonDone"
          @run-code-button-clicked="getWrittenCode"
        />
      </div>
      <cBrowser
        :lesson="lesson"
        :lessons="lessons"
        :htmlCode="lesson.htmlCode"
        :cssCode="lesson.cssCode"
        @lesson-done="isLessonDone = true"
        @lesson-not-done="isLessonDone = false"
      />
    </div>
  </div>
</template>

<script>
import cLessonNavigation from "@/components/lesson/cLessonNavigation";
import cCodeEditor from "@/components/lesson/cCodeEditor";
import cLessonInstructions from "@/components/lesson/cLessonInstructions";
import cBrowser from "@/components/lesson/cBrowser";

export default {
  components: {
    cLessonNavigation,
    cCodeEditor,
    cLessonInstructions,
    cBrowser
  },

  data() {
    return {
      lesson: {
        title: {
          ru: "",
          kz: "",
          en: ""
        },
        theory: {
          ru: "",
          kz: "",
          en: ""
        },
        description: {
          ru: "",
          kz: "",
          en: ""
        },
        hint: {
          ru: "",
          kz: "",
          en: ""
        },
        nextButtonText: {
          ru: "",
          kz: "",
          en: ""
        },
        htmlCode: null,
        cssCode: null
      },
      lessons: [],
      isNavigationOpen: false,
      frameCode: {},
      isLessonDone: false
    };
  },

  watch: {
    async $route() {
      const loading = this.$vs.loading();

      this.isLessonDone = false;
      await this.getLesson();
      this.updateLessonFrame();

      loading.close();
    }
  },

  async mounted() {
    const loading = this.$vs.loading();

    let courseId = this.$route.params.courseId;
    let lessonId = this.$route.params.lessonId;

    await this.$store
      .dispatch("getLesson", { courseId, lessonId })
      .then(res => (this.lesson = res.data.lesson));

    await this.$store
      .dispatch("getLessons", courseId)
      .then(res => (this.lessons = res.data.course.lessons));

    for (let child of this.$children) {
      if (child.$options._componentTag == "cCodeEditor") {
        this.lesson.htmlCode = child.codeHTML;
        this.lesson.cssCode = child.codeCSS;
      }
    }

    for (let child of this.$children) {
      // Отображаем код в браузере при первом создании урока
      if (child.$options._componentTag == "cBrowser") {
        child.runCode();
      }
    }

    loading.close();
  },

  methods: {
    handleChangeRoute() {
      this.getLesson();
    },

    async getLesson() {
      let courseId = this.$route.params.courseId;
      let lessonId = this.$route.params.lessonId;

      await this.$store
        .dispatch("getLesson", { courseId, lessonId })
        .then(res => {
          this.lesson = res.data.lesson;
        });

      this.$store
        .dispatch("getLessons", courseId)
        .then(res => (this.lessons = res.data.course.lessons));

      for (let child of this.$children) {
        if (child.$options._componentTag == "cBrowser") {
          child.isTheoryActive = true;
        }
      }

      for (let child of this.$children) {
        if (child.$options._componentTag == "cCodeEditor") {
          child.codeHTML = this.lesson.htmlCode;
          child.codeCSS = this.lesson.cssCode;
        }
      }
    },

    getWrittenCode() {
      for (let child of this.$children) {
        if (child.$options._componentTag == "cBrowser") {
          child.handleRunButton();
        }
      }
    },

    updateLessonFrame() {
      let newRoute = this.$route.path;

      if (newRoute.includes("/lessons/")) {
        for (let child of this.$children) {
          if (child.$options._componentTag == "cBrowser") {
            child.runCode();
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.lesson {
  &__page {
    width: 100%;
    height: 100vh;
    background-color: $color-6;
  }

  &__content {
    padding-left: 50px;
    height: 100vh;
    display: flex;
    flex-direction: row;
    /* filter: blur(3px); */
    background-color: $color-3-dark;
    transition: 200ms ease-in-out;
  }

  &__programming {
    margin: 3vh 1%;
    width: 48%;
    height: 94vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__blur-background {
    position: absolute;
    width: 100vw;
    height: 100%;
    background-color: $color-5;
    transition: 200ms ease-in-out;
    opacity: 0;
    z-index: -1;

    &-active {
      opacity: 0.2;
      z-index: 2;
    }
  }

  &__test-block {
    display: none;
  }
}
</style>
