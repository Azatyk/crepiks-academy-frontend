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
import { mapGetters } from "vuex";

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
    },

    completedLessons: {
      type: Array,
      required: true
    }
  },

  computed: mapGetters(["userData"]),

  methods: {
    handleRunButton() {
      var iframe =
        this.$refs.browserFrame.contentDocument ||
        this.$refs.browserFrame.contentWindow.document; // Получаем сам frame (для метода для адаптивности к браузерам)

      this.runCode(iframe);
      this.checkLessonTasks(iframe);
    },

    runCode() {
      var iframe =
        this.$refs.browserFrame.contentDocument ||
        this.$refs.browserFrame.contentWindow.document; // Приходится получать iframe в этой функции, потому что этот метод мы вызываем отдельно от метода handleRunButton

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
        this.$emit("add-completed-lessons");
        this.$emit("return-task-result", {
          status: "success",
          text:
            "Отличная работа, вы можете увидеть результат выполнения кода в браузере и после этого перейти к следующему уроку"
        });
      }
    }
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
