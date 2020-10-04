<template>
  <div class="editor" ref="lessonEditor">
    <div class="editor__heading">
      Программный код
    </div>
    <codemirror
      class="editor__editor"
      :class="{ 'editor__editor-full': !codeCSS }"
      :code="codeHTML"
      v-model="codeHTML"
      :options="htmlOptions"
      v-if="isHTMLshowing"
    />
    <codemirror
      class="editor__editor"
      :code="codeCSS"
      v-model="codeCSS"
      :options="cssOptions"
      v-show="codeCSS"
      v-else
    />
    <div class="editor__buttons" v-if="codeCSS">
      <div
        class="editor__button editor__button-html"
        @click="isHTMLshowing = true"
        :class="{ 'editor__button-active': isHTMLshowing }"
      >
        index.html
      </div>
      <div
        class="editor__button"
        @click="isHTMLshowing = false"
        :class="{ 'editor__button-active': !isHTMLshowing }"
      >
        style.css
      </div>
    </div>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/htmlmixed/htmlmixed.js";
import "codemirror/theme/eclipse.css";

export default {
  props: {
    lesson: {
      type: Object,
      required: true
    }
  },
  components: {
    codemirror
  },
  data() {
    return {
      isHTMLshowing: true,
      htmlOptions: {
        tabSize: 4,
        mode: "text/html",
        theme: "eclipse",
        lineNumbers: true,
        line: true
      },
      cssOptions: {
        tabSize: 2,
        mode: "text/css",
        theme: "eclipse",
        lineNumbers: true,
        line: true
      },
      codeHTML: "",
      codeCSS: ""
    };
  },
  watch: {
    lesson() {
      if (this.lesson.htmlCode) this.codeHTML = this.lesson.htmlCode;
      if (this.lesson.cssCode) this.codeCSS = this.lesson.cssCode;
    }
  },
  methods: {
    runCode() {
      let interactiveFrame = document.getElementById("interactiveFrame");
      let interactiveFrameBody;
      if (interactiveFrame.contentDocument) {
        interactiveFrameBody = interactiveFrame.contentDocument.getElementsByTagName(
          "body"
        )[0];
      } else if (interactiveFrame.contentWindow) {
        interactiveFrameBody = interactiveFrame.contentWindow.document.getElementsByTagName(
          "body"
        )[0];
      }

      interactiveFrameBody.innerHTML = `${this.codeHTML}
      <style>${this.codeCSS}</style>`;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.editor {
  width: 100%;
  height: 50%;

  &__heading {
    padding-left: 3%;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    font-size: 20px;
    color: $color-5;
    display: flex;
    align-items: center;
    border-bottom: 1px solid $color-9;
  }

  &__editor {
    padding: 0;
    width: 100%;
    height: calc(100% - 100px);

    &-full {
      height: calc(100% - 50px);
    }
  }

  &__buttons {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    border-top: 1px solid $color-9;
  }

  &__button {
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 300;
    color: $color-5;
    transition: 200ms ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: $color-3;
    }

    &-active {
      background-color: $color-3;
    }

    &-html {
      border-right: 1px solid $color-9;
    }
  }
}

.CodeMirror {
  width: 100%;
  height: 100%;
}
</style>
