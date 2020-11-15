<template>
  <div class="browser__container" ref="interactiveBrowser">
    <!-- <div class="drag-width"></div> -->
    <div class="browser">
      <div class="browser__heading">
        Браузер
      </div>
      <div class="browser__content">
        <iframe
          src="/browser.html"
          name="browser"
          class="browser__frame"
          ref="browserFrame"
          id="browserFrame"
          noresize
        ></iframe>
        <vs-dialog
          scroll
          blur
          overflow-hidden
          :not-close="isTheoryOnly"
          :prevent-close="isTheoryOnly"
          full-screen
          v-model="isTheoryActive"
        >
          <div class="browser__theory-navigation browser-navigation">
            <div
              @click="isTheoryNavigationOpen = !isTheoryNavigationOpen"
              class="browser-navigation__button"
            >
              <i
                v-if="!isTheoryNavigationOpen"
                class="bx bx-menu browser-navigation__icon"
              ></i>
              <i v-else class="bx bx-x browser-navigation__icon"></i>
            </div>
            <div
              class="browser-navigation__content"
              :class="{
                'browser-navigation__content-close': !isTheoryNavigationOpen
              }"
            >
              <div class="browser-navigation__logo">
                Crepiks
                <div class="browser-navigation__logo-thin">
                  Academy
                </div>
              </div>
              <div
                @click="$router.push('/app/home')"
                class="browser-navigation__back"
              >
                <i class="bx bx-arrow-back browser-navigation__back-icon"></i>
                На главную
              </div>
              <div class="browser-navigation__lessons">
                <router-link
                  v-for="(lesson, index) in lessons"
                  :key="index"
                  class="browser-navigation__lesson"
                  :to="
                    `/app/courses/${$route.params.courseId}/lessons/${lesson.id}`
                  "
                >
                  <div
                    class="browser-navigation__lesson-number"
                    :class="{
                      'browser-navigation__lesson-number-completed': isLessonCompleted(
                        lesson.id
                      )
                    }"
                  >
                    {{ index + 1 }}
                  </div>
                  {{ lesson.title.ru }}
                </router-link>
              </div>
            </div>
          </div>
          <div
            class="browser__theory"
            :class="{ 'browser__theory-blur': isTheoryNavigationOpen }"
            @click="isTheoryNavigationOpen = false"
          >
            <div class="browser__theory-text">
              <h1 class="browser__theory-title">{{ lesson.title.ru }}</h1>
              <p
                class="browser__theory-description"
                v-html="lesson.theory.ru"
              ></p>
              <button
                class="browser__theory-text-button"
                @click="handleTheoryButton"
                v-show="lesson.theory.ru"
              >
                {{
                  isLessonLast
                    ? "Завершить курс"
                    : isTheoryOnly
                    ? lesson.nextButtonText.ru || "Далее"
                    : lesson.nextButtonText.ru || "Перейти к заданию"
                }}
              </button>
            </div>
          </div>
        </vs-dialog>
      </div>
    </div>
    <div class="browser__theory-button" @click="isTheoryActive = true">
      Теория
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    lesson: {
      type: Object,
      required: true
    },
    isLessonLast: {
      type: Boolean,
      required: true
    },
    lessons: {
      type: Array,
      required: true
    },
    completedLessons: {
      type: Array,
      required: true
    },
    htmlCode: {
      type: String,
      default: ""
    },
    cssCode: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isTheoryActive: true,
      isTheoryOnly: true,
      isTheoryNavigationOpen: false
    };
  },
  watch: {
    lesson() {
      this.isTheoryOnly = Boolean(!this.lesson.description.ru);
    },

    $route() {
      this.isTheoryNavigationOpen = false;
    }
  },

  async mounted() {
    this.$emit("lesson-not-done");
  },

  computed: mapGetters(["userData"]),

  methods: {
    handleTheoryButton() {
      if (this.isLessonLast) {
        this.addCompletedLesson();
        this.$router.push("/app/courses/" + this.$route.params.courseId);
      } else {
        if (this.isTheoryOnly) {
          let courseId = this.$route.params.courseId;
          let currentLessonId = Number(this.$route.params.lessonId);
          let nextLessonId;

          this.lessons.forEach(lesson => {
            if (lesson.id == currentLessonId) {
              nextLessonId = this.lessons[this.lessons.indexOf(lesson) + 1].id;
            }
          });

          this.addCompletedLesson();

          this.$router.push(
            "/app/courses/" + courseId + "/lessons/" + nextLessonId
          );

          // Отображаем код в браузере при переходе на следующий урок
        } else {
          this.isTheoryActive = false;
        }
      }
    },

    async handleRunButton() {
      var iframe =
        this.$refs.browserFrame.contentDocument ||
        this.$refs.browserFrame.contentWindow.document; // Получаем сам frame (для метода для адаптивности к браузерам)

      await this.runCode(iframe);
      this.checkLessonTasks(iframe);
    },

    runCode() {
      var iframe =
        this.$refs.browserFrame.contentDocument ||
        this.$refs.browserFrame.contentWindow.document; // Получаем сам frame (для метода для адаптивности к браузерам)

      iframe.head.innerHTML = "";

      iframe.body.innerHTML = this.htmlCode;
      // console.log(this.htmlCode);
      if (
        iframe.querySelector("link") &&
        iframe.querySelector("link").getAttribute("rel") == "stylesheet" &&
        iframe.querySelector("link").getAttribute("href") == "style.css"
      ) {
        iframe.head.innerHTML = `<style>${this.cssCode}</style>`; // Закидываем код, заметь, что стили задаются через html тег style, к сожалению пока что это единственное решение
      }
    },

    checkLessonTasks(iframe) {
      let globalTestFunctionAnswer = {
        isDone: false,
        messageHeading: "",
        messageContent: ""
      }; // Переменная говорит сама за себя, она нужно чтобы знать какое уведомление показывать пользователю и когда вызывать emit для смены кнопки

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
          this.openNotification(
            "top-center",
            "danger",
            testFunctionAnswer.messageHeading,
            testFunctionAnswer.messageContent
          );

          break;
        }
      }

      if (globalTestFunctionAnswer.isDone) {
        this.$emit("lesson-done"); // Вызываем emit чтобы поменять кнопку "Выполнить" на "Далее"
        this.openNotification(
          "top-center",
          "#2ecc71",
          "Отличная работа!",
          "Задание успешно выполнено, а значит, пора идти дальше"
        );
      }

      this.addCompletedLesson();
    },

    async addCompletedLesson() {
      if (!this.isLessonCompleted(this.lesson.id)) {
        let userId = this.userData.id;
        let lessonId = this.lesson.id;
        await this.$store.dispatch("addCompletedLesson", { userId, lessonId });
        this.$emit("update-completed-lessons");
      }
    },

    openNotification(
      position = "top-center",
      color = null,
      title = "",
      text = "",
      duration = 5000
    ) {
      this.$vs.notification({
        duration,
        position,
        color,
        title,
        text
      });
    },

    isLessonCompleted(lessonId) {
      for (let i = 0; i < this.completedLessons.length; i++) {
        if (this.completedLessons[i].id == lessonId) {
          return true;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.browser {
  width: 100%;
  height: 92%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  background-color: $color-6;

  &__container {
    margin: 3vh 1%;
    margin-left: 0.5%;
    width: 48%;
    height: 94vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__content {
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: $color-4;
  }

  &__heading {
    padding-left: 3%;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: $color-5;
    font-size: 20px;
  }

  &__frame {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: none;
  }

  &-navigation {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 3;

    &__button {
      position: absolute;
      left: 2vw;
      top: 0.5vw;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      box-shadow: 7px 7px 7px 0px $color-7;
      background-color: $color-6;
      transition: 150ms ease-in-out;
      cursor: pointer;
      z-index: 3;

      &:hover {
        transform: translateX(2px) translateY(2px);
        box-shadow: 4px 4px 7px 0px $color-7;
      }
    }

    &__icon {
      font-size: 20px;
      color: $color-5;
    }

    &__content {
      position: fixed;
      padding: 5% 2%;
      left: 2vw;
      width: 350px;
      height: 90vh;
      box-sizing: border-box;
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      transition: 200ms ease-in-out;
      border-radius: 30px;
      background-color: $color-6;
      box-shadow: 7px 7px 7px 0px $color-7;
      transform-origin: 8% 4%;
      transition: 200ms ease-in-out;

      &-close {
        transform: scale(0);
      }
    }

    &__logo {
      margin-top: 20px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: row;
      color: $color-1;
      font-size: 30px;
      font-weight: 500;
      text-decoration: none;

      &-thin {
        margin-left: 5px;
        font-weight: 300;
      }
    }

    &__back {
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      color: $color-2;
      font-size: 20px;
      cursor: pointer;
      transition: 200ms ease-in-out;

      &:hover {
        opacity: 0.6;
      }

      &-icon {
        margin-right: 5px;
      }
    }

    &__lessons {
      margin-left: -10px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      overflow: scroll;
    }

    &__lesson {
      margin-bottom: 10px;
      padding: 0 5%;
      padding-left: 10px;
      height: 50px;
      width: 95%;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      border-radius: 30px;
      color: $color-5;
      font-size: 19px;
      text-decoration: none;
      transition: 150ms ease-in-out;
      cursor: pointer;

      &:hover {
        opacity: 0.7;

        .browser-navigation__lesson-number {
          transform: translateY(2px) translateX(2px);
          box-shadow: 2px 2px 7px 0px $color-7;
        }
      }

      &-number {
        margin-right: 15px;
        height: 35px;
        width: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background-color: $color-4;
        box-shadow: 4px 4px 7px 0px $color-7;
        transition: 150ms ease-in-out;

        &-completed {
          color: $color-4;
          background-color: #2ecc71;
        }
      }
    }
  }

  &__theory {
    margin: auto;
    margin-top: 5vh;
    width: 100%;
    max-width: 800px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    transition: 150ms ease-in-out;

    &-blur {
      filter: blur(3px);
    }

    &-title {
      margin-bottom: 40px !important;
      width: auto;
      color: $color-5;
      font-size: 30px;
      font-weight: 500;
    }

    &-description {
      margin-bottom: 50px;
      width: auto;
      color: $color-5;
      font-size: 25px;
      font-weight: 400;
      line-height: 1.3;
    }

    &-text-button {
      margin-bottom: 40px;
      padding: 7px 24px;
      color: $color-4;
      font-size: 23px;
      border: 2px solid $color-2;
      border-radius: 10px;
      background-color: $color-2;
      transition: 150ms ease-in-out;
      cursor: pointer;

      &:hover {
        color: $color-2;
        background-color: $color-4;
      }
    }

    &-button {
      width: 100%;
      height: 6%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      color: $color-5;
      border-radius: 10px;
      background-color: $color-6;
      transition: 200ms ease-in-out;
      cursor: pointer;

      &:hover {
        background-color: $color-4;
      }
    }

    &-title {
      margin-bottom: 50px;
      font-size: 50px;
      color: $color-5;
      font-weight: 700;
    }

    &-text {
      font-size: 30px;
      color: $color-5;
      font-weight: 300;
    }
  }
}

.router-link-active .browser-navigation__lesson-number {
  color: $color-4;
  background-color: #f1c40f;
}
// .drag-width {
//   width: 5px;
//   height: 100%;
//   border-left: 1px solid $color-9;
//   // cursor: w-resize;
// }
</style>
