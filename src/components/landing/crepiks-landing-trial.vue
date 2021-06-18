<template>
  <div class="trial">
    <notification
      :heading="notificationHeading"
      :text="notificationText"
      :status="notificationStatus"
      :isActive="isNotificationActive"
      @close-notification="isNotificationActive = false"
    />
    <h2 class="trial-title">
      Хочешь попробовать? <span class="trial-title-green">Дерзай</span>
    </h2>
    <p class="trial-text">
      Перепиши или скопируй этот код
      <span class="trial-text-dark"
        >&#60;h1&#62;Hello, World!&#60;/h1&#62;</span
      >
      в редактор кода и нажми «Проверить».
    </p>
    <p class="trial-text">
      В мини браузере ты увидите результат выполнения кода, а автоматический
      тест оповестит о решении задания.‎
    </p>
    <div class="trial-editor">
      <div class="trial-editor-block">
        <div class="trial-editor-title">Редактор кода</div>
        <div class="trial-editor-content">
          <codemirror
            class="trial-editor-editor"
            :code="htmlCode"
            v-model="htmlCode"
            :options="htmlOptions"
          />
          <button class="trial-editor-button" @click="handleRunButton">
            Проверить
          </button>
        </div>
      </div>
      <div class="trial-editor-block">
        <div class="trial-editor-title trial-editor-heading">
          Мини браузер
        </div>
        <div class="trial-editor-content">
          <iframe
            src="/landingBrowser.html"
            name="browser"
            class="trial-editor-browser"
            ref="browserFrame"
            id="browserFrame"
            noresize
          ></iframe>
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

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.trial {
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &-title {
    color: $dark;
    font-size: 50px;
    width: 85%;

    &-green {
      color: $primary;
    }
  }

  &-text {
    color: $light-dark;
    margin-top: 25px;
    font-size: 30px;
    width: 85%;
    line-height: 44px;

    &-dark {
      color: $dark;
    }
  }

  &-editor {
    width: 85%;
    margin-top: 80px;
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

@media (max-width: 1100px) {
  .trial {
    margin-top: 100px;

    &-title {
      font-size: 35px;
    }

    &-text {
      font-size: 22px;
      line-height: 35px;
    }
  }
}

@media (max-width: 720px) {
  .trial {
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

@media (max-width: 414px) {
  .trial {
    height: fit-content;
    margin-top: 300px;

    &-title {
      font-size: 26px;
      line-height: 35px;
    }

    &-text {
      font-size: 20px;
      line-height: 33px;
      margin-top: 16px;
    }

    &-editor {
      margin-top: 20px;

      &-block {
        height: 40vh;
      }
    }
  }
}

@media (max-width: 320px) {
  .trial {
    height: fit-content;

    &-title {
      font-size: 23px;
      line-height: 30px;
    }

    &-text {
      font-size: 18px;
      line-height: 30px;
    }

    &-editor {
      &-block {
        height: 50vh;
      }
    }
  }
}
</style>

<style lang="scss">
.trial-editor-editor .CodeMirror {
  height: 100% !important;
  border-radius: 0 0 0 15px;
  z-index: 1 !important;
  width: 100% !important;
}

.trial-editor-editor .CodeMirror-scroll {
  padding-bottom: 0 !important;
  overflow: hidden !important;
}

.trial-editor-editor .CodeMirror-gutters {
  background-color: #ffffff;
}

@media (max-width: 414px) {
  .CodeMirror-scroll {
    width: 272px !important;
  }
}
</style>
