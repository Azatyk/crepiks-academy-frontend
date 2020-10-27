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
              <router-link to="/app/home" class="browser-navigation__logo"
                >Crepiks
                <div class="browser-navigation__logo-thin">
                  Academy
                </div></router-link
              >
              <div class="browser-navigation__lessons">
                <router-link
                  v-for="(lesson, index) in lessons"
                  :key="index"
                  :to="
                    '/app/courses/' +
                      $route.params.courseId +
                      '/lessons/' +
                      lesson.id
                  "
                  class="browser-navigation__lesson"
                >
                  <div class="browser-navigation__lesson-number">
                    {{ lesson.id }}
                  </div>
                  {{ lesson.title.ru }}
                </router-link>
              </div>
            </div>
          </div>
          <div class="browser__theory">
            <div class="browser__theory-text">
              <h1 class="browser__theory-title">{{ lesson.title.ru }}</h1>
              <p
                class="browser__theory-description"
                v-html="lesson.theory.ru"
              ></p>
              <button
                class="browser__theory-text-button"
                @click="handleTheoryButton"
              >
                {{ lesson.nextButtonText.ru || "Перейти к заданию" }}
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
export default {
  props: {
    lesson: {
      type: Object,
      required: true
    },
    lessons: {
      type: Array,
      required: true
    },
    code: {
      type: Object,
      required: false
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
    }
  },
  methods: {
    handleTheoryButton() {
      if (this.isTheoryOnly) {
        let courseId = this.$route.params.courseId;
        let nextLessonId = Number(this.$route.params.lessonId) + 1;
        this.$router.push(
          "/app/courses/" + courseId + "/lessons/" + nextLessonId
        );
      } else {
        this.isTheoryActive = false;
      }
    },

    runCode() {
      let iframe =
        this.$refs.browserFrame.contentDocument ||
        this.$refs.browserFrame.contentWindow.document;

      iframe.body.innerHTML = this.code.htmlCode;
      iframe.head.innerHTML = `<style>${this.code.cssCode}</style>`;

      let testFunction = new Function(
        "iframe",
        this.lesson.tasks[0].testFunction
      );
      testFunction(iframe);
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
      width: 22vw;
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

      &-close {
        display: none;
        width: 10px;
        height: 10px;
      }
    }

    &__logo {
      margin-bottom: 30px;
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

    &__lessons {
      margin-left: -10px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      overflow: hidden;
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
      font-size: 18px;
      text-decoration: none;
      transition: 150ms ease-in-out;
      cursor: pointer;

      &:hover {
        box-shadow: 4px 4px 7px 0px $color-7;
        background-color: $color-4;
        transform: translateX(-2px) translateY(-2px);
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

// .drag-width {
//   width: 5px;
//   height: 100%;
//   border-left: 1px solid $color-9;
//   // cursor: w-resize;
// }
</style>
