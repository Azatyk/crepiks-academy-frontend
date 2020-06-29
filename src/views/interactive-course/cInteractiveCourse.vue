<template>
  <div class="interactive__page">
    <div class="interactive__content">
      <div class="interactive__description">
        <div class="interactive__lesson-text">
          <div class="interactive-block__heading">Теория</div>
        </div>
        <div class="interactive__lesson-instructions">
          <div class="interactive-block__heading">Задания</div>
        </div>
      </div>
      <div class="interactive__lesson-editor">
        <div class="interactive-block__heading">Программный код</div>
        <MonacoEditor
          class="editor"
          v-model="code"
          theme="vs"
          language="javascript"
          @change="onChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MonacoEditor from "vue-monaco";

export default {
  components: {
    MonacoEditor
  },

  data() {
    return {
      code: "console.log('Hello, Crepiks!')"
    };
  },
  methods: {
    onChange(value) {
      console.log(value);
    }
  }
};
</script>

<style>
.interactive__page {
  padding: 0.1px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
}

.interactive__content {
  margin: auto;
  margin-top: 10vh;
  width: 100%;
  max-width: 1440px;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.interactive__description {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
}

.interactive__lesson-text {
  width: 100%;
  height: 70%;
  overflow: auto;
  box-shadow: 0 0 10px #0000004d;
  z-index: 3;
}

.interactive__lesson-instructions {
  width: 100%;
  height: 30%;
  overflow: auto;
  box-shadow: 0 0 10px #0000004d;
  z-index: 3;
}

.interactive-block__heading {
  padding: 0.5% 0;
  padding-left: 2%;
  width: 100%;
  color: #f8f7fc;
  font-size: 1vw;
  background-color: #34495e;
}

.interactive__lesson-editor {
  width: 50%;
  height: 100%;
  box-sizing: border-box;
}

.editor {
  width: 100%;
  height: 100%;
  /* box-shadow: 0 0  10px #0000004d; */
}
</style>
