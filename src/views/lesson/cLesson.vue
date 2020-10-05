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
        <cCodeEditor :lesson="lesson" />
        <cLessonInstructions
          :lesson="lesson"
          @run-code-button-clicked="runCodeChildMethod"
        />
      </div>
      <cBrowser :lesson="lesson" />
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
      isNavigationOpen: false
    };
  },

  mounted() {
    let courseId = this.$route.params.courseId;
    let lessonId = this.$route.params.lessonId;

    this.$store
      .dispatch("getLesson", { courseId, lessonId })
      .then(res => (this.lesson = res.data.lesson));

    this.$store
      .dispatch("getLessons", courseId)
      .then(res => (this.lessons = res.data.lessons));
  },

  methods: {
    runCodeChildMethod() {
      for (let child of this.$children) {
        if (child.$options._componentTag == "cCodeEditor") {
          child.runCode();
        }
      }
    },

    getLesson() {
      let courseId = this.$route.params.courseId;
      let lessonId = this.$route.params.lessonId;

      this.$store
        .dispatch("getLesson", { courseId, lessonId })
        .then(res => (this.lesson = res.data.lesson));

      this.$store
        .dispatch("getLessons", courseId)
        .then(res => (this.lessons = res.data.lessons));

      for (let child of this.$children) {
        if (child.$options._componentTag == "cBrowser") {
          child.isTheoryActive = true;
        }
      }
    }
  }
  // mounted() {
  //   let container = this.$refs.interactiveProgramming,
  //     codeEditorBlock = this.$refs.lessonEditor,
  //     instructionsBlock = this.$refs.lessonInstructions;
  //   let offsetBottom = 50;
  //   codeEditorBlock.style.height = container.clientHeight - offsetBottom + "vh";
  //   instructionsBlock.style.height = offsetBottom + "vh";
  // },
  // mounted() {
  //   this.$store
  //     .dispatch("getLesson", this.id)
  //     .then((res) => (this.lesson = res.data));
  //   this.$store
  //     .dispatch("getLessons", this.id.courseId)
  //     .then((res) => (this.lessons = res.data));
  // },
  // methods: {
  //   mounted() {
  //     this.$store
  //       .dispatch("getLesson", this.id)
  //       .then((res) => (this.lesson = res.data));
  //     this.$store
  //       .dispatch("getLessons", this.id.courseId)
  //       .then((res) => (this.lessons = res.data));
  //   },
  // },
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
    margin-left: 50px;
    height: 100vh;
    width: calc(100% - 50px);
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
}
</style>
