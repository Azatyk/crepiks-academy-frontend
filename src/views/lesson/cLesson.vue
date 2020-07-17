<template>
  <div class="interactive__page">
    <div class="interactive__navigation-menu" :class="{ navClosed: !isOpen }">
      <div class="navigation">
        <router-link to="/app/courses"
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
        <a-icon type="up" class="interactive__navigation-icon" />
      </div>
    </div>
    <div class="black__background" @click="isOpen = false"></div>
    <div class="interactive__content" ref="interactiveContent">
      <div class="interactive__programming" ref="interactiveProgramming">
        <div class="interactive__lesson-editor" ref="lessonEditor">
          <div class="interactive-block__heading interactive__code-heading">
            Программный код
          </div>
          <prism-editor
            language="js"
            class="editor"
            code="console.log('Hello, World!')"
            :readonly="true"
          ></prism-editor>
        </div>
        <div class="interactive__lesson-instructions" ref="lessonInstructions">
          <div
            class="dragHeight"
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
        </div>
      </div>
      <div class="interactive__browser" ref="interactiveBrowser">
        <div
          class="dragWidth"
          @mousedown="handleStartWidthResizing"
          @mouseup="handleEndWidthResizing"
        ></div>
        <div class="interactive__browser-content">
          <div class="interactive-block__heading interactive__browser-heading">
            Браузер
          </div>
          <iframe class="interactive__frame">
            Ваш браузер не поддерживает фреймы!
          </iframe>
          <div class="interactive__theory-button" @click="isModalActive = true">
            Теория
          </div>
          <vs-dialog full-screen blur v-model="isModalActive">
            <div class="theory">
              <h1 class="theory__title">Основы HTML</h1>
              <div class="theory__content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati incidunt sequi iusto autem explicabo minima
                repellendus. Distinctio, est, enim voluptatum obcaecati sequi
                itaque natus eius possimus labore dolorum dolorem laudantium
                quaerat cum voluptas ab praesentium ducimus vero quo? Neque
                voluptas accusantium dolore. Voluptatibus, maxime. Ad, labore
                non. Cum dolor, ipsa eveniet adipisci iure alias error quia
                dolorem, illum recusandae atque debitis ut, esse tenetur
                praesentium quisquam a vitae inventore labore consectetur
                aspernatur. Sapiente nobis consectetur, assumenda error
                cupiditate vel doloremque accusamus delectus. Unde omnis
                aspernatur amet ipsa? Beatae numquam tempora illum, ex, voluptas
                impedit nulla eaque facilis, sequi repellendus repudiandae.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati incidunt sequi iusto autem explicabo minima
                repellendus. Distinctio, est, enim voluptatum obcaecati sequi
                itaque natus eius possimus labore dolorum dolorem laudantium
                quaerat cum voluptas ab praesentium ducimus vero quo? Neque
                voluptas accusantium dolore. Voluptatibus, maxime. Ad, labore
                non. Cum dolor, ipsa eveniet adipisci iure alias error quia
                dolorem, illum recusandae atque debitis ut, esse tenetur
                praesentium quisquam a vitae inventore labore consectetur
                aspernatur. Sapiente nobis consectetur, assumenda error
                cupiditate vel doloremque accusamus delectus. Unde omnis
                aspernatur amet ipsa? Beatae numquam tempora illum, ex, voluptas
                impedit nulla eaque facilis, sequi repellendus repudiandae.
              </div>
            </div>
          </vs-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "prismjs";
import "prismjs/themes/prism.css";
import PrismEditor from "vue-prism-editor";
import dialog from "vuesax/dist/vsDialog";
import "vuesax/dist/vuesax.css";

export default {
  components: {
    PrismEditor,
    "vs-dialog": dialog
  },

  data() {
    return {
      code: "console.log('Hello, Crepiks!')",
      lesson: {},
      lessons: [],
      isOpen: false,
      isModalActive: false
    };
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
      let offsetRight = container.clientWidth - e.clientX;
      programmingBlock.style.width = container.clientWidth - offsetRight + "px";
      browserBlock.style.width = offsetRight + "px";
    },
    handleStartWidthResizing() {
      document.addEventListener("mousemove", this.handleWidthResizing);
    },
    handleEndWidthResizing() {
      document.removeEventListener("mousemove", this.handleWidthResizing);
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

<style scoped>
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
  opacity: 0.5;
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

.interactive__editor {
  margin-top: -7px;
  height: 300px;
}

.interactive__lesson-editor {
  width: 100%;
  height: 50%;
}

.interactive__lesson-instructions {
  width: 100%;
  height: 50%;
}

.editor {
  width: 100%;
  height: calc(100% - 50px);
}

.dragHeight {
  width: 100%;
  height: 5px;
  border-top: 1px solid #d1d2d6;
  cursor: s-resize;
}

.dragWidth {
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

.theory {
  padding: 5%;
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
