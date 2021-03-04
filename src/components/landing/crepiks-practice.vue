<template>
  <div class="practice">
    <notification
      :heading="notificationHeading"
      :text="notificationText"
      :status="notificationStatus"
      :isActive="isNotificationActive"
      @close-notification="isNotificationActive = false"
    />
    <div class="practice-content">
      <h2 class="practice-heading">
        Чего ждать? Попробуем что-нибудь написать.
      </h2>
      <p class="practice-paragraph">
        Перепешите или скопируйте этот код на 10 строку
        <span class="practice-paragraph-bold"
          >&#60;h1&#62;Hello, World!&#60;/h1&#62;</span
        >
        и нажмите "Проверить". В мини браузере увидите результат выполнения
        кода, а автоматический тест оповестит вас о решении задания.
      </p>
      <div class="practice-editor">
        <div class="practice-editor-block">
          <div class="practice-editor-title">Редактор кода</div>
          <div class="practice-editor-content">
            <codemirror
              class="practice-editor-editor"
              :code="htmlCode"
              v-model="htmlCode"
              :options="htmlOptions"
            />
            <button class="practice-editor-button" @click="handleRunButton">
              Проверить
            </button>
          </div>
        </div>
        <div class="practice-editor-block">
          <div class="practice-editor-title practice-editor-heading">
            Мини браузер
          </div>
          <div class="practice-editor-content">
            <iframe
              src="/landingBrowser.html"
              name="browser"
              class="practice-editor-browser"
              ref="browserFrame"
              id="browserFrame"
              noresize
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import notification from "@/components/common/crepiks-notification";

import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/htmlmixed/htmlmixed.js";
import "codemirror/theme/eclipse.css";

export default {
  components: {
    notification,
    codemirror
  },

  data() {
    return {
      notificationHeading: "",
      notificationText: "",
      notificationStatus: "",
      isNotificationActive: false,
      htmlCode:
        "<!DOCTYPE html>\n" +
        '<html lang="en">\n' +
        "<head>\n" +
        '    <meta charset="UTF-8">\n' +
        '    <link rel="stylesheet" href="styles.css" />\n' +
        "    <title>First site</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "    <!-- Код вставьте на 10 строку (строка ниже) -->\n" +
        "    \n" +
        "</body>\n" +
        "</html>\n",
      htmlOptions: {
        tabSize: 4,
        mode: "text/html",
        theme: "eclipse",
        lineNumbers: true,
        line: true
      },
      cssCode:
        "body {" +
        "  padding: 0;" +
        "  margin: 0;" +
        "  width: 100%;" +
        "  height: 100%;" +
        "  display: flex;" +
        "  justify-content: center;" +
        "  align-items: center;" +
        "  background-color: transparent;" +
        "}" +
        "" +
        "h1 {" +
        '  font-family: "Roboto", sans-serif;' +
        "  font-size: 50px;" +
        "  font-weight: bold;" +
        "  color: 333;" +
        "}"
    };
  },

  methods: {
    testFunction(iframe) {
      let heading = iframe.querySelector("h1");
      if (heading && heading.innerHTML == "Hello, World!") {
        return {
          status: "success",
          heading: "Отличная работа!",
          text:
            'В мини браузере вы можете увидеть надпись "Hello, World!". Это и есть результат выполнения вашего кода.'
        };
      } else {
        return {
          status: "error",
          heading: "Задание не выполнено",
          text:
            'Убедитесь, что вы правильно скопировали или переписали код "Hello, World!" на 10 строку.'
        };
      }
    },

    handleRunButton() {
      var iframe =
        this.$refs.browserFrame.contentDocument ||
        this.$refs.browserFrame.contentWindow.document;

      iframe.head.innerHTML = "";

      iframe.body.innerHTML = this.htmlCode;

      if (
        iframe.querySelector("link") &&
        iframe.querySelector("link").getAttribute("rel") == "stylesheet" &&
        iframe.querySelector("link").getAttribute("href") == "styles.css"
      ) {
        iframe.head.innerHTML = `<style>${this.cssCode}</style>`;
      }

      const testResult = this.testFunction(iframe);

      this.notificationStatus = testResult.status;
      this.notificationHeading = testResult.heading;
      this.notificationText = testResult.text;
      this.isNotificationActive = true;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.practice {
  width: 100%;
  height: fit-content;
  padding: 15vh 12%;
  box-sizing: border-box;
  background-color: $background;
  text-align: left;

  &-content {
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
  }

  &-heading {
    color: $dark;
    font-weight: 400;
    font-size: 35px;
  }

  &-paragraph {
    width: 85%;
    color: $dark;
    padding-top: 20px;
    font-size: 22px;
    font-weight: 400;
    opacity: 0.7;
    line-height: 130%;

    &-bold {
      font-weight: 400;
    }
  }

  &-editor {
    width: 100%;
    margin-top: 5vh;
    border-radius: 15px;
    display: flex;
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.02);

    &-block {
      width: 50%;
      height: 70vh;
      background-color: $white;
      border-radius: 15px 0 0 15px;
      border: 1px solid #d1d2d6;
      border-top: 0;
      border-left: 0;
      border-bottom: 0;
      position: relative;
    }

    &-block:last-child {
      border-radius: 0 15px 15px 0;
      border-right: 0;
    }

    &-title {
      width: 100%;
      font-size: 14px;
      font-weight: 400;
      padding: 20px 20px;
      box-sizing: border-box;
      border: 1px solid #d1d2d6;
      border-top: 0;
      border-left: 0;
      border-right: 0;
      border-radius: 15px 0 0 0;
    }

    &-heading {
      border-radius: 0 15px 0 0;
    }

    &-content {
      width: 100%;
      height: calc(100% - 57px);
    }

    &-editor {
      height: 100%;
    }

    &-browser {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 0 0 15px 0;
    }

    &-button {
      font-size: 17px;
      color: $primary;
      background-color: transparent;
      height: fit-content;
      border: 0;
      padding: 15px 20px;
      position: absolute;
      right: 0;
      bottom: 0;
      font-weight: 500;
      z-index: 2;
      transition: 200ms ease-in-out;

      &:hover {
        opacity: 0.6;
      }
    }
  }
}

@media (min-width: 1500px) {
  .practice {
    &-heading {
      font-size: 2.6vw;
    }

    &-paragraph {
      font-size: 1.2vw;
    }
  }
}

@media (max-width: 1000px) {
  .practice {
    padding: 15vh 5%;
  }
}

@media (max-width: 720px) {
  .practice {
    &-editor {
      flex-direction: column;

      &-block {
        width: 100%;
        height: 50vh;
        border-right: 0;
        border-bottom: 1px solid #d1d2d6;
        border-radius: 15px 15px 0 0;
      }

      &-block:last-child {
        border-radius: 0 0 15px 15px;
        border-bottom: 0;
      }

      &-browser {
        border-radius: 0 0 15px 15px;
      }
    }
  }
}

@media (max-width: 550px) {
  .practice {
    padding: 10vh 5%;

    &-heading {
      width: 100%;
      font-size: 25px;
    }

    &-paragraph {
      width: 90%;
      font-size: 17px;
    }
  }
}
</style>

<style lang="scss">
.practice-editor-editor .CodeMirror {
  height: 100% !important;
  border-radius: 0 0 0 15px;
  z-index: 1 !important;
  width: 100% !important;
}

.practice-editor-editor .CodeMirror-scroll {
  padding-bottom: 0 !important;
  overflow: hidden !important;
}

.practice-editor-editor .CodeMirror-gutters {
  background-color: #ffffff;
}
</style>
