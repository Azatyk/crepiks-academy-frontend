<template>
  <div class="interactive__page">
    <div class="interactive__navigation-menu">
      <div class="navigation">
        <div class="navigation__logo">Crepiks</div>
      </div>
      <div class="interactive__navigation-target">
        <a-icon type="up" class="interactive__navigation-icon" />
      </div>
    </div>
    <div class="interactive__content">
      <div class="interactive__programming">
        <div class="interactive__lesson-editor">
          <div class="interactive-block__heading interactive__code-heading">
            Программный код
          </div>
          <prism-editor
            code="code"
            language="js"
            :lineNumbers="true"
          ></prism-editor>
        </div>
        <div class="interactive__lesson-instructions">
          <div
            class="interactive-block__heading interactive__instructions-heading"
          >
            Задания
          </div>
          <div class="intractive__instructions-content"></div>
        </div>
      </div>
      <div class="interactive__browser">
        <div class="interactive-block__heading interactive__browser-heading">
          Браузер
        </div>
        <iframe class="interactive__frame">
          Ваш браузер не поддерживает фреймы!
        </iframe>
        <div class="interactive__theory-button">
          Теория
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrismEditor from "vue-prism-editor";
import "prismjs";
import "prismjs/themes/prism.css";

export default {
  components: {
    PrismEditor
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
  width: 100%;
  height: 100vh;
}

.interactive__navigation-menu {
  position: fixed;
  left: 0;
  height: 100%;
  width: 500px;
  background-color: #d1d2d6;
  z-index: 3;
}

.interactive__navigation-target {
  position: absolute;
  right: 0;
  height: 100vh;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #d1d2d6;
}

.interactive__navigation-icon {
  font-size: 18px;
  color: #1e272e;
  transform: rotate(90deg);
}

.interactive__content {
  margin-left: 50px;
  height: 100vh;
  width: calc(100% - 50px);
  display: flex;
  flex-direction: row;
}

.interactive-block__heading {
  padding-left: 5%;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  font-size: 20px;
  color: #1e272e;
  display: flex;
  align-items: center;
}

.interactive__code-heading {
  border-bottom: 1px solid #d1d2d6;
}

.interactive__instructions-heading {
  border-top: 1px solid #d1d2d6;
}

.interactive__browser-heading {
  border-bottom: 1px solid #d1d2d6;
}

.interactive__programming {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.interactive__lesson-editor {
  width: 100%;
  height: 50%;
}

.editor {
  width: 100%;
  height: calc(100% - 50px);
}

.interactive__lesson-instructions {
  width: 100%;
  height: 50%;
}

.interactive__instructions-content {
  width: 100%;
  height: calc(100% - 50px);
}

.interactive__browser {
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #d1d2d6;
}

.interactive__frame {
  width: 100%;
  height: calc(100% - 100px);
  border: none;
}

.interactive__theory-button {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #1e272e;
  border-top: 1px solid #d1d2d6;
}
</style>
