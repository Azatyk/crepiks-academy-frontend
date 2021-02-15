<template>
  <iframe
    src="/browser.html"
    name="browser"
    class="browser"
    ref="browserFrame"
    id="browserFrame"
    noresize
  ></iframe>
</template>

<script>
export default {
  props: {
    htmlCode: {
      type: String
    },
    cssCode: {
      type: String
    },

    lesson: {
      type: Object,
      required: true
    }
  },

  methods: {
    handleRunButton() {
      var iframe =
        this.$refs.browserFrame.contentDocument ||
        this.$refs.browserFrame.contentWindow.document; // Получаем сам frame (для метода для адаптивности к браузерам)

      this.runCode(iframe);
      this.checkLessonTasks(iframe);
    },

    runCode(iframe) {
      iframe.head.innerHTML = "";

      iframe.body.innerHTML = this.htmlCode;

      if (
        iframe.querySelector("link") &&
        iframe.querySelector("link").getAttribute("rel") == "stylesheet" &&
        iframe.querySelector("link").getAttribute("href") == "style.css"
      ) {
        iframe.head.innerHTML = `<style>${this.cssCode}</style>`;
      }
    },

    checkLessonTasks(iframe) {
      let globalTestFunctionAnswer = {
        isDone: false,
        messageHeading: "",
        messageContent: ""
      };

      for (let i = 0; i < this.lesson.tasks.length; i++) {
        let testFunction = new Function(
          "iframe",
          this.lesson.tasks[i].testFunction
        );

        let testFunctionAnswer = testFunction(iframe);

        if (testFunctionAnswer.isDone) {
          globalTestFunctionAnswer = testFunctionAnswer;
        } else {
          globalTestFunctionAnswer.isDone = false;
          this.$emit("return-task-result", {
            status: "error",
            text: testFunctionAnswer.messageContent
          });
          break;
        }
      }

      if (globalTestFunctionAnswer.isDone) {
        this.$emit("lesson-done"); // Вызываем emit чтобы поменять кнопку "Выполнить" на "Далее"
        // this.addCompletedLesson();
        this.$emit("return-task-result", {
          status: "success",
          text:
            "Отличная работа, вы можете увидеть результат выполнения кода в браузере и после этого перейти к следующему уроку"
        });
      }
    }

    // async addCompletedLesson() {
    //   if (!this.isLessonCompleted(this.lesson.id)) {
    //     let userId = this.userData.id;
    //     let lessonId = this.lesson.id;
    //     await this.$store.dispatch("addCompletedLesson", { userId, lessonId });
    //     this.$emit("update-completed-lessons");
    //   }
    // },
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.browser {
  width: 100%;
  min-height: calc(100vh - 100px);
  z-index: 3;
  background-color: white;
  border: none;
}
</style>
