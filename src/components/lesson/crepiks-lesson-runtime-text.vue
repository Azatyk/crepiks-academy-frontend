<template>
  <div>
    <runtimeTemplate
      v-for="(theoryBlock, index) in theoryBlocks"
      class="block"
      :key="index"
      :template="theoryBlock"
    ></runtimeTemplate>
    <codemirror v-if="false" />
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/htmlmixed/htmlmixed.js";
import "codemirror/theme/eclipse.css";

import runtimeTemplate from "v-runtime-template";

export default {
  props: {
    theoryBlocks: {
      type: Array,
      required: true
    },
    theoryBlocksContent: {
      type: Array,
      required: true
    }
  },

  components: {
    codemirror,
    runtimeTemplate
  },

  data() {
    return {
      contentTexts: this.theoryBlocksContent,
      html: {
        readOnly: true,
        tabSize: 4,
        mode: "text/html",
        theme: "eclipse",
        lineNumbers: true,
        line: true
      },
      css: {
        readOnly: true,
        tabSize: 2,
        mode: "text/css",
        theme: "eclipse",
        lineNumbers: true,
        line: true
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.theory-text {
  margin-bottom: 50px;
  color: $dark;
  font-size: 20px;
  line-height: 150%;
}

.theory-code-editor .CodeMirror {
  width: 750px !important;
  height: auto !important;
  box-sizing: border-box;
  font-size: 18px;
  border-radius: 10px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);
  z-index: 3 !important;
}

.theory-code-editor .CodeMirror-code {
  padding: 20px 0;
  box-sizing: border-box;
}

.theory-code-editor .CodeMirror-cursor {
  display: none;
}

.theory-code-editor .CodeMirror-linenumbers {
  padding: 20px 0;
  box-sizing: border-box;
  background-color: $white;
}

.block {
  margin-bottom: 20px;
  width: 100%;
}
</style>
