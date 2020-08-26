<template>
  <div class="interactive__page">
    <div class="interactive__navigation-menu" :class="{ navClosed: !isOpen }">
      <div class="navigation">
        <router-link to="/app/home"
          ><div class="navigation__logo">
            Crepiks <span class="navigation__logo-thin">Academy</span>
          </div></router-link
        >
        <div class="navigation__lessons">
          <!-- <router-link v-for="(lesson, index) in lessons" :key="index">
        </router-link> -->
          <div class="navigation__lesson">
            <span class="navigation__lesson-number">1.</span>Основы HTML
          </div>
          <div class="navigation__lesson">
            <span class="navigation__lesson-number">2.</span>Как работает
            интернет
          </div>
          <div class="navigation__lesson">
            <span class="navigation__lesson-number">3.</span>Стилезуем страницу
          </div>
          <div class="navigation__lesson">
            <span class="navigation__lesson-number">4.</span>Делаем сайт
            интерактивным
          </div>
        </div>
      </div>
      <div class="interactive__navigation-target" @click="isOpen = !isOpen">
        <!-- <a-icon type="up" class="interactive__navigation-icon" /> -->
        <i class="fas fa-chevron-up interactive__navigation-icon"></i>
      </div>
    </div>
    <div class="black__background" @click="isOpen = false"></div>
    <div class="interactive__content" ref="interactiveContent">
      <div class="interactive__programming" ref="interactiveProgramming">
        <div class="interactive__lesson-editor" ref="lessonEditor">
          <div class="interactive-block__heading interactive__code-heading">
            Программный код
          </div>
          <codemirror
            class="interactive__code-editor"
            :code="codeHTML"
            v-model="codeHTML"
            :options="htmlOptions"
            v-if="isHTMLshowing"
          />
          <codemirror
            class="interactive__code-editor"
            :code="codeCSS"
            v-model="codeCSS"
            :options="cssOptions"
            v-else
          />
          <div class="interactive__files">
            <div
              class="interactive__html interactive__file-button"
              @click="isHTMLshowing = true"
              :class="{ 'interactive_active-button': isHTMLshowing }"
            >
              index.html
            </div>
            <div
              class="interactive__css interactive__file-button"
              @click="isHTMLshowing = false"
              :class="{ 'interactive_active-button': !isHTMLshowing }"
            >
              style.css
            </div>
          </div>
        </div>
        <div class="interactive__lesson-instructions" ref="lessonInstructions">
          <div
            class="drag-height"
            @mousedown="handleStartHeightResizing"
            @mouseup="handleEndHeightResizing"
          ></div>
          <div
            class="interactive-block__heading interactive__instructions-heading"
          >
            Задания
          </div>
          <div class="interactive__instructions-content">
            <div class="instructions__task">
              <span class="instructions__task-dash">—</span>Удалите
              закомментированный код на 13 строке
            </div>
            <div class="instructions__task">
              <span class="instructions__task-dash">—</span>На 15 строке
              добавьте кнопку &lt;button&gt;Это кнопка&lt;/button&gt;
            </div>
            <div class="instructions__task">
              <span class="instructions__task-dash">—</span>Оформите подписку на
              Crepiks Academy!
            </div>
          </div>
          <div class="instructions__hint" @click="isHintActive = true">
            Подсказка
          </div>
          <vs-dialog blur v-model="isHintActive">
            <div class="hint">
              <h1 class="hint__title">Подсказка</h1>
              <div class="hint__content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati incidunt sequi iusto autem explicabo minima
                repellendus. Distinctio, est, enim voluptatum obcaecati sequi
                itaque natus eius possimus labore dolorum dolorem laudantium
                quaerat cum voluptas ab praesentium ducimus vero quo? Neque
                voluptas accusantium dolore. Voluptatibus, maxime. Ad, labore
                non. Cum dolor, ipsa eveniet adipisci iure alias error quia
              </div>
            </div>
          </vs-dialog>
          <div class="instructions__button" @click="runCode">Выполнить</div>
        </div>
      </div>
      <div class="interactive__browser" ref="interactiveBrowser">
        <div
          class="drag-width"
          @mousedown="handleStartWidthResizing"
          @mouseup="handleEndWidthResizing"
        ></div>
        <div class="interactive__browser-content">
          <div class="interactive-block__heading interactive__browser-heading">
            Браузер
          </div>
          <!-- <div class="interactive__frame" ref="interactiveFrame"></div> -->
          <iframe
            src="/browser.html"
            name="browser"
            class="interactive__frame"
            id="interactiveFrame"
            noresize
          ></iframe>
          <div
            class="interactive__theory-button"
            @click="isTheoryActive = true"
          >
            Теория
          </div>
          <vs-dialog
            overflow-hidden
            auto-width
            full-screen
            v-model="isTheoryActive"
          >
            <div class="theory">
              <p class="theory__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente voluptatem commodi incidunt cupiditate asperiores
                tempora debitis aspernatur laudantium numquam, magni, quo
                laborum! Voluptatem adipisci tempore dolores facilis,
                consequuntur dolorum atque. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fugiat veniam, voluptatem earum
                autem impedit, recusandae porro officiis aperiam tempore in
                molestias atque itaque, deleniti laborum nam exercitationem ex
                aut cumque aliquid facere explicabo inventore id quibusdam
                praesentium? Nisi impedit consequuntur consectetur laboriosam
                assumenda! Aliquam optio commodi quaerat, quod magnam esse.
              </p>
              <p class="theory__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente voluptatem commodi incidunt cupiditate asperiores
                tempora debitis aspernatur laudantium numquam, magni, quo
                laborum! Voluptatem adipisci tempore dolores facilis,
                consequuntur dolorum atque. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fugiat veniam, voluptatem earum
                autem impedit, recusandae porro officiis aperiam tempore in
                molestias atque itaque, deleniti laborum nam exercitationem ex
                aut cumque aliquid facere explicabo inventore id quibusdam
                praesentium? Nisi impedit consequuntur consectetur laboriosam
                assumenda! Aliquam optio commodi quaerat, quod magnam esse.
              </p>
              <p class="theory__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente voluptatem commodi incidunt cupiditate asperiores
                tempora debitis aspernatur laudantium numquam, magni, quo
                laborum! Voluptatem adipisci tempore dolores facilis,
                consequuntur dolorum atque. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fugiat veniam, voluptatem earum
                autem impedit, recusandae porro officiis aperiam tempore in
                molestias atque itaque, deleniti laborum nam exercitationem ex
                aut cumque aliquid facere explicabo inventore id quibusdam
                praesentium? Nisi impedit consequuntur consectetur laboriosam
                assumenda! Aliquam optio commodi quaerat, quod magnam esse.
              </p>
              <p class="theory__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente voluptatem commodi incidunt cupiditate asperiores
                tempora debitis aspernatur laudantium numquam, magni, quo
                laborum! Voluptatem adipisci tempore dolores facilis,
                consequuntur dolorum atque. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fugiat veniam, voluptatem earum
                autem impedit, recusandae porro officiis aperiam tempore in
                molestias atque itaque, deleniti laborum nam exercitationem ex
                aut cumque aliquid facere explicabo inventore id quibusdam
                praesentium? Nisi impedit consequuntur consectetur laboriosam
                assumenda! Aliquam optio commodi quaerat, quod magnam esse.
              </p>
              <p class="theory__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente voluptatem commodi incidunt cupiditate asperiores
                tempora debitis aspernatur laudantium numquam, magni, quo
                laborum! Voluptatem adipisci tempore dolores facilis,
                consequuntur dolorum atque. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fugiat veniam, voluptatem earum
                autem impedit, recusandae porro officiis aperiam tempore in
                molestias atque itaque, deleniti laborum nam exercitationem ex
                aut cumque aliquid facere explicabo inventore id quibusdam
                praesentium? Nisi impedit consequuntur consectetur laboriosam
                assumenda! Aliquam optio commodi quaerat, quod magnam esse.
              </p>
              <p class="theory__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente voluptatem commodi incidunt cupiditate asperiores
                tempora debitis aspernatur laudantium numquam, magni, quo
                laborum! Voluptatem adipisci tempore dolores facilis,
                consequuntur dolorum atque. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fugiat veniam, voluptatem earum
                autem impedit, recusandae porro officiis aperiam tempore in
                molestias atque itaque, deleniti laborum nam exercitationem ex
                aut cumque aliquid facere explicabo inventore id quibusdam
                praesentium? Nisi impedit consequuntur consectetur laboriosam
                assumenda! Aliquam optio commodi quaerat, quod magnam esse.
              </p>
              <p class="theory__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente voluptatem commodi incidunt cupiditate asperiores
                tempora debitis aspernatur laudantium numquam, magni, quo
                laborum! Voluptatem adipisci tempore dolores facilis,
                consequuntur dolorum atque. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fugiat veniam, voluptatem earum
                autem impedit, recusandae porro officiis aperiam tempore in
                molestias atque itaque, deleniti laborum nam exercitationem ex
                aut cumque aliquid facere explicabo inventore id quibusdam
                praesentium? Nisi impedit consequuntur consectetur laboriosam
                assumenda! Aliquam optio commodi quaerat, quod magnam esse.
              </p>
              <p class="theory__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente voluptatem commodi incidunt cupiditate asperiores
                tempora debitis aspernatur laudantium numquam, magni, quo
                laborum! Voluptatem adipisci tempore dolores facilis,
                consequuntur dolorum atque. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fugiat veniam, voluptatem earum
                autem impedit, recusandae porro officiis aperiam tempore in
                molestias atque itaque, deleniti laborum nam exercitationem ex
                aut cumque aliquid facere explicabo inventore id quibusdam
                praesentium? Nisi impedit consequuntur consectetur laboriosam
                assumenda! Aliquam optio commodi quaerat, quod magnam esse.
              </p>
              <p class="theory__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente voluptatem commodi incidunt cupiditate asperiores
                tempora debitis aspernatur laudantium numquam, magni, quo
                laborum! Voluptatem adipisci tempore dolores facilis,
                consequuntur dolorum atque. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fugiat veniam, voluptatem earum
                autem impedit, recusandae porro officiis aperiam tempore in
                molestias atque itaque, deleniti laborum nam exercitationem ex
                aut cumque aliquid facere explicabo inventore id quibusdam
                praesentium? Nisi impedit consequuntur consectetur laboriosam
                assumenda! Aliquam optio commodi quaerat, quod magnam esse.
              </p>
            </div>
          </vs-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dialog from "vuesax/dist/vsDialog";
import "vuesax/dist/vuesax.css";

import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/htmlmixed/htmlmixed.js";
import "codemirror/theme/eclipse.css";

export default {
  components: {
    "vs-dialog": dialog,
    codemirror
  },

  data() {
    return {
      firstCode: "console.log('Hello, Crepiks!')",
      lesson: {},
      lessons: [],
      isOpen: false,
      isHTMLshowing: true,
      codeHTML: `<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body>
    <button>Кнопка</button>
  </body>
</html>`,
      codeCSS: `* {
  margin: 0;
  padding 0;
}
  
body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  padding: 10px 20px;
  width: 130px;
  height: 40px;
  border: none;
  text-align: center;
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
  transition: 150ms ease-in-out;
  outline: none;
}

button:hover {
  opacity: 0.5;
  transition: 150ms ease-in-out;
}`,
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
      isTheoryActive: false,
      isHintActive: false
    };
  },
  mounted() {
    this.runCode();
  },
  // mounted() {
  //   let container = this.$refs.interactiveProgramming,
  //     codeEditorBlock = this.$refs.lessonEditor,
  //     instructionsBlock = this.$refs.lessonInstructions;
  //   let offsetBottom = 50;
  //   codeEditorBlock.style.height = container.clientHeight - offsetBottom + "vh";
  //   instructionsBlock.style.height = offsetBottom + "vh";
  // },
  methods: {
    handleHeightResizing(e) {
      let container = this.$refs.interactiveProgramming,
        codeEditorBlock = this.$refs.lessonEditor,
        instructionsBlock = this.$refs.lessonInstructions;
      let offsetBottom = container.clientHeight - e.clientY;
      codeEditorBlock.style.height =
        container.clientHeight - offsetBottom + "px";
      instructionsBlock.style.height = offsetBottom + "px";
    },
    handleStartHeightResizing() {
      document.addEventListener("mousemove", this.handleHeightResizing);
    },
    handleEndHeightResizing() {
      document.removeEventListener("mousemove", this.handleHeightResizing);
    },

    handleWidthResizing(e) {
      let container = this.$refs.interactiveContent,
        programmingBlock = this.$refs.interactiveProgramming,
        browserBlock = this.$refs.interactiveBrowser;
      let offsetRight = container.clientWidth - e.clientX + 50;
      console.log("Ширина контейнера", container.clientWidth);
      programmingBlock.style.width = container.clientWidth - offsetRight + "px";
      browserBlock.style.width = offsetRight + "px";
    },
    handleStartWidthResizing() {
      document.addEventListener("mousemove", this.handleWidthResizing);
    },
    handleEndWidthResizing() {
      document.removeEventListener("mousemove", this.handleWidthResizing);
    },

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
  background-color: white;
  z-index: 3;
  transition: 200ms ease-in-out;
}

.navClosed {
  left: -450px;
  transition: 200ms ease-in-out;
}

.interactive__navigation-target {
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #d1d2d6;
  transition: 200ms ease-in-out;
  cursor: pointer;
}

.interactive__navigation-target:hover {
  background-color: #f5f5f5;
  transition: 200ms ease-in-out;
}

.interactive__navigation-target:hover > .interactive__navigation-icon {
  color: #1e272e !important;
  transition: 200ms ease-in-out;
}

.interactive__navigation-icon {
  font-size: 18px;
  color: #747b80 !important;
  transform: rotate(270deg);
  transition: 200ms ease-in-out;
}

.navClosed .interactive__navigation-icon {
  transform: rotate(90deg);
  transition: 200ms ease-in-out;
}

.black__background {
  position: absolute;
  top: 0;
  margin-left: 50px;
  height: 100vh;
  width: calc(100% - 50px);
  background-color: #1e272e;
  opacity: 0.2;
  transition: 200ms ease-in-out;
  z-index: 2;
}

.navClosed ~ .black__background {
  opacity: 0;
  transition: 200ms ease-in-out;
  z-index: -1;
}

.interactive__content {
  margin-left: 50px;
  height: 100vh;
  width: calc(100% - 50px);
  display: flex;
  flex-direction: row;
  filter: blur(3px);
  transition: 200ms ease-in-out;
}

.navClosed ~ .interactive__content {
  filter: none;
  transition: 200ms ease-in-out;
}

.interactive-block__heading {
  padding-left: 3%;
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

.interactive__browser-heading {
  border-bottom: 1px solid #d1d2d6;
}

.interactive__programming {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.CodeMirror {
  height: 100%;
}

.interactive__code-editor {
  padding: 0;
  width: 100%;
  height: calc(100% - 100px);
}

.interactive__lesson-editor {
  width: 100%;
  height: 50%;
}

.interactive__files {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  border-top: 1px solid #d1d2d6;
}

.interactive__file-button {
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 300;
  color: #1e272e;
  transition: 200ms ease-in-out;
  cursor: pointer;
}

.interactive_active-button {
  background-color: #f5f5f5;
}

.interactive__file-button:hover {
  background-color: #f5f5f5;
  transition: 200ms ease-in-out;
}

.interactive__html {
  border-right: 1px solid #d1d2d6;
}

.interactive__lesson-instructions {
  position: relative;
  width: 100%;
  height: 50%;
}

.drag-height {
  width: 100%;
  height: 5px;
  border-top: 1px solid #d1d2d6;
  cursor: s-resize;
}

.drag-width {
  position: absolute;
  height: 100%;
  width: 5px;
  border-left: 1px solid #d1d2d6;
  cursor: w-resize;
}

.interactive__instructions-content {
  box-sizing: border-box;
  padding-left: 3%;
  padding-top: 3%;
  width: 100%;
}

.instructions__task {
  margin-bottom: 10px;
  font-size: 15px;
  color: #1e272e;
}

.instructions__task-dash {
  margin-right: 10px;
}

.instructions__hint {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50px;
  width: calc(100% - 160px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #1e272e;
  border-top: 1px solid #d1d2d6;
  transition: 200ms ease-in-out;
  cursor: pointer;
}

.instructions__hint:hover {
  background-color: #f5f5f5;
  transition: 200ms ease-in-out;
}

.hint {
  padding: 5%;
}

.hint__title {
  font-size: 30px;
  color: #1e272e;
  font-weight: 700;
}

.hint__content {
  font-size: 20px;
  color: #1e272e;
  font-weight: 300;
}

.instructions__button {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 50px;
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 300;
  color: white;
  background-color: #1e272e;
  transition: 200ms ease-in-out;
  cursor: pointer;
}

.instructions__button:hover {
  background-color: #424f59;
  transition: 200ms ease-in-out;
}

.interactive__browser {
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: row;
}

.interactive__browser-content {
  width: 100%;
  display: flex;
  flex-direction: column;
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
  cursor: pointer;
  transition: 200ms ease-in-out;
}

.vs-dialog__content {
  max-height: 100% !important;
  height: 100%;
}

.theory__paragraph {
  margin: 20px 0;
  position: relative;
  display: block;
  font-size: 20px;
}

.theory__title {
  margin-bottom: 50px;
  font-size: 50px;
  color: #1e272e;
  font-weight: 700;
}

.theory__content {
  font-size: 30px;
  color: #1e272e;
  font-weight: 300;
}

.interactive__theory-button:hover {
  background-color: #f5f5f5;
  transition: 200ms ease-in-out;
}

.navigation {
  padding: 50px 0 0 40px;
}

.navigation__logo {
  margin-bottom: 70px;
  font-size: 30px;
  color: #1e272e;
  font-weight: bold;
}

.navigation__logo-thin {
  font-weight: 300;
}

.navigation__lesson {
  margin-bottom: 15px;
  font-size: 17px;
  color: #1e272e;
  transition: 200ms ease-in-out;
  cursor: pointer;
}

.navigation__lesson:hover {
  color: #8e9599;
  transition: 200ms ease-in-out;
}

.navigation__lesson-number {
  margin-right: 10px;
}
</style>
