<template>
  <div class="lesson__page">
    <cLessonNavigation
      :lessons="lessons"
      :isOpen="isNavigationOpen"
      @open-navigation="isNavigationOpen = true"
      @close-navigation="isNavigationOpen = false"
      @change-route="getLesson"
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
          @change-html-code="code.htmlCode = $event"
          @change-css-code="code.cssCode = $event"
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
        :htmlCode="code.htmlCode"
        :cssCode="code.cssCode"
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
        }
      },
      lessons: [],
      isNavigationOpen: false,
      frameCode: {},
      code: {
        htmlCode: null,
        cssCode: null
      },
      isLessonDone: false
    };
  },

  async mounted() {
    let courseId = this.$route.params.courseId;
    let lessonId = this.$route.params.lessonId;

    await this.$store
      .dispatch("getLesson", { courseId, lessonId })
      .then(res => (this.lesson = res.data.lesson));

    this.$store
      .dispatch("getLessons", courseId)
      .then(res => (this.lessons = res.data.course.lessons));

    for (let child of this.$children) {
      if (child.$options._componentTag == "cCodeEditor") {
        this.code.htmlCode = child.codeHTML;
        this.code.cssCode = child.codeCSS;
      }
    }

    this.getWrittenCode();
  },

  // async beforeRouteLeave() {
  //   console.log('wtf')
  //   await this.getLesson();
  //   this.getWrittenCode();
  // },

  methods: {
    getLesson() {
      let courseId = this.$route.params.courseId;
      let lessonId = this.$route.params.lessonId;

      this.$store
        .dispatch("getLesson", { courseId, lessonId })
        .then(res => (this.lesson = res.data.lesson));

      this.$store
        .dispatch("getLessons", courseId)
        .then(res => (this.lessons = res.data.course.lessons));

      for (let child of this.$children) {
        if (child.$options._componentTag == "cBrowser") {
          child.isTheoryActive = true;
        }
      }
    },

    getWrittenCode() {
      for (let child of this.$children) {
        if (child.$options._componentTag == "cBrowser") {
          child.handleRunButton();
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
