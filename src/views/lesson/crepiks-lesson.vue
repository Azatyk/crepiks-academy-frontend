<template>
  <transition name="fadeIn" appear>
    <div
      class="lesson"
      @keydown.right="isCodeEditorScreen = false"
      @keydown.left="isCodeEditorScreen = true"
    >
      <notification
        :isActive="isNotificationOpen"
        :heading="notificationHeading"
        :text="notificationText"
        :status="notificationStatus"
        @close-notification="isNotificationOpen = false"
      />
      <navigation
        :isNavigationOpen="isNavigationOpen"
        @navigation-closed="isNavigationOpen = false"
        :lessons="lessons"
        :completedLessons="completedLessons"
        :lesson="lesson"
        @need-buy-subscription-notification="
          notificationHeading = 'Доступно по подписке';
          notificationText =
            'Необходимо приобрести подписку чтобы перейти к этому уроку';
          notificationStatus = 'warning';
          isNotificationOpen = true;
        "
      />
      <theory
        :isTheoryOnly="isTheoryOnly"
        :isTheoryOpen="isTheoryOpen"
        :isLessonLast="CheckIsLessonLast"
        :lesson="lesson"
        :lessons="lessons"
        :isLoading="isLoading"
        @theory-closed="isTheoryOpen = false"
        @navigation-opened="isNavigationOpen = true"
        @add-completed-lessons="addCompletedLesson()"
        @need-buy-subscription-notification="
          notificationHeading = 'Доступно по подписке';
          notificationText =
            'Необходимо приобрести подписку чтобы перейти к этому уроку';
          notificationStatus = 'warning';
          isNotificationOpen = true;
        "
      />
      <div class="lesson-screens">
        <div
          class="code-editor-screen lesson-screen-first"
          :class="{ 'first-active': isCodeEditorScreen }"
        >
          <filesNavigation
            @index-opened="
              isHtmlExist = true;
              isHtmlShowing = true;
            "
            @styles-opened="
              isCssExist = true;
              isHtmlShowing = false;
            "
          />
          <div class="code-editor-screen-content">
            <codeEditorHeader
              :isHtmlShowing="isHtmlShowing"
              :isHtmlExist="isHtmlExist"
              :isCssExist="isCssExist"
              @navigation-opened="isNavigationOpen = true"
              @hint-opened="isHintOpen = true"
              @index-clicked="isHtmlShowing = true"
              @styles-clicked="isHtmlShowing = false"
              @index-closed="
                isHtmlExist = false;
                isHtmlShowing = false;
              "
              @styles-closed="
                isCssExist = false;
                isHtmlShowing = true;
              "
              @switch-browser="isCodeEditorScreen = false"
            />
            <div
              class="code-editor-container"
              :class="{
                'code-editor-container-center': !isHtmlExist && !isCssExist
              }"
            >
              <codemirror
                class="code-editor"
                :code="htmlCode"
                v-model="htmlCode"
                :options="htmlOptions"
                v-if="isHtmlShowing && isHtmlExist"
              />
              <codemirror
                class="code-editor"
                :code="cssCode"
                v-model="cssCode"
                :options="cssOptions"
                v-if="!isHtmlShowing && isCssExist"
              />
              <img
                v-if="!isHtmlExist && !isCssExist"
                src="@/assets/images/lesson-empty-image.svg"
                alt="Откройте файл"
                class="code-editor-container-empty-image"
              />
              <span
                v-if="!isHtmlExist && !isCssExist"
                class="code-editor-container-empty-title"
                >Все файлы закрыты</span
              >
            </div>
            <lessonTasks :lesson="lesson" :lessons="lessons" />
            <hint
              :isOpen="isHintOpen"
              :hintBlocks="lesson.hintBlocks"
              :hintBlocksContent="lesson.hintBlocksContent"
              @close-hint="isHintOpen = false"
            />
          </div>
        </div>
        <div
          class="lesson-screen lesson-screen-second"
          :class="{ 'first-active': isCodeEditorScreen }"
        >
          <browserHeader
            @navigation-opened="isNavigationOpen = true"
            @switch-editor="isCodeEditorScreen = true"
          />
          <browser
            :htmlCode="htmlCode"
            :cssCode="cssCode"
            :lesson="lesson"
            :completedLessons="completedLessons"
            @return-task-result="showTaskResult"
            @lesson-done="isLessonDone = true"
            @add-completed-lessons="addCompletedLesson()"
          />
        </div>
        <taskNotification
          :isActive="isTaskNotificationOpen"
          :status="taskNotificationStatus"
          :text="taskNotificationText"
          @close-notification="isTaskNotificationOpen = false"
        />
      </div>
      <lessonFooter
        :lessons="lessons"
        @theory-opened="isTheoryOpen = true"
        @run-button-clicked="handleRunButton()"
        :isLessonDone="isLessonDone"
        @need-buy-subscription-notification="
          notificationHeading = 'Доступно по подписке';
          notificationText =
            'Необходимо приобрести подписку чтобы перейти к этому уроку';
          notificationStatus = 'warning';
          isNotificationOpen = true;
        "
      />
    </div>
  </transition>
</template>

<script>
import notification from "@/components/common/crepiks-notification";
import navigation from "@/components/lesson/crepiks-lesson-navigation";
import theory from "@/components/lesson/crepiks-lesson-theory";
import hint from "@/components/lesson/crepiks-lesson-hint";

import filesNavigation from "@/components/lesson/crepiks-lesson-files-navigation";
import codeEditorHeader from "@/components/lesson/crepiks-code-editor-header";
import lessonTasks from "@/components/lesson/crepiks-lesson-tasks";
import lessonFooter from "@/components/lesson/crepiks-lesson-footer";

import taskNotification from "@/components/lesson/crepiks-task-notification";

import browserHeader from "@/components/lesson/crepiks-browser-header";
import browser from "@/components/lesson/crepiks-browser";

import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/htmlmixed/htmlmixed.js";
import "codemirror/theme/eclipse.css";

import { mapGetters } from "vuex";

export default {
  components: {
    notification,
    filesNavigation,
    codeEditorHeader,
    lessonTasks,
    lessonFooter,
    taskNotification,
    navigation,
    theory,
    browserHeader,
    browser,
    codemirror,
    hint
  },

  data() {
    return {
      isNotificationOpen: false,
      notificationHeading: "",
      notificationText: "",
      notificationStatus: "",
      isLessonDone: false,
      isTheoryOnly: false,
      isLoading: true,
      lesson: {
        title: "",
        theoryBlocks: [],
        theoryBlocksContent: [],
        hintBlocks: [],
        hintBlocksContent: [],
        description: "",
        tasks: [
          {
            descriptionRu: ""
          }
        ],
        successMessage: ""
      },
      lessons: [
        {
          id: null,
          title: ""
        }
      ],
      completedLessons: [],
      isNavigationOpen: false,
      isHintOpen: false,
      isTheoryOpen: true,
      isTaskNotificationOpen: false,
      taskNotificationStatus: null,
      taskNotificationText: null,
      isCodeEditorScreen: true,
      isHtmlShowing: true,
      isHtmlExist: true,
      isCssExist: true,
      htmlCode: "",
      htmlOptions: {
        tabSize: 4,
        mode: "text/html",
        theme: "eclipse",
        lineNumbers: true,
        line: true
      },
      cssCode: "",
      cssOptions: {
        tabSize: 2,
        mode: "text/css",
        theme: "eclipse",
        lineNumbers: true,
        line: true
      }
    };
  },

  created() {
    document.addEventListener("keydown", this.handleArrowsButtons);
  },

  destroyed() {
    document.removeEventListener("keydown", this.handleArrowsButtons);
  },

  async mounted() {
    let courseId = this.$route.params.courseId;

    await this.$store
      .dispatch("getLessons", courseId)
      .then(res => (this.lessons = res.data.course.lessons));

    await this.getLesson();
    await this.getCompletedLessons();

    if (!this.lesson.description) {
      this.isTheoryOnly = true;
    } else {
      this.isTheoryOnly = false;
      this.runCode();
    }
  },

  computed: {
    ...mapGetters([
      "userData",
      "isAdSidebarLinkActive",
      "isAdNotificationActive"
    ]),

    CheckIsLessonLast() {
      if (this.lesson.id == this.lessons[this.lessons.length - 1].id) {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    handleArrowsButtons(event) {
      if (event.code == "ArrowRight") {
        this.isCodeEditorScreen = false;
      } else if (event.code == "ArrowLeft") {
        this.isCodeEditorScreen = true;
      }
    },

    async getLesson() {
      let courseId = this.$route.params.courseId;
      let lessonId = this.$route.params.lessonId;

      await this.$store
        .dispatch("getLesson", { courseId, lessonId })
        .then(res => {
          this.lesson.id = res.data.lesson.id;
          this.lesson.courseId = res.data.lesson.courseId;
          this.lesson.title = res.data.lesson.title;
          this.lesson.description = res.data.lesson.description;
          this.lesson.htmlCode = res.data.lesson.htmlCode;
          this.lesson.cssCode = res.data.lesson.cssCode;
          this.lesson.tasks = res.data.lesson.tasks;
          this.lesson.successMessage = res.data.lesson.successMessage;

          if (res.data.lesson.theoryBlocks)
            this.lesson.theoryBlocks = res.data.lesson.theoryBlocks;
          if (res.data.lesson.theoryBlocksContent)
            this.lesson.theoryBlocksContent =
              res.data.lesson.theoryBlocksContent;
          if (res.data.lesson.hintBlocks)
            this.lesson.hintBlocks = res.data.lesson.hintBlocks;
          if (res.data.lesson.hintBlocksContent)
            this.lesson.hintBlocksContent = res.data.lesson.hintBlocksContent;
          this.htmlCode = this.lesson.htmlCode;
          this.cssCode = this.lesson.cssCode;
        })
        .catch(err => {
          if (err.response.status == 403) {
            this.$router.push("/app/courses");
          } else {
            this.notificationHeading = "Что-то пошло не так";
            this.notificationText =
              "Пожалуйста, перезагрузи интернет и всё должно заработать";
            this.notificationStatus = "error";
            this.isNotificationOpen = true;
          }
        })
        .finally(() => (this.isLoading = false));
    },

    async getCompletedLessons() {
      const payload = {
        userId: this.userData.id,
        courseId: this.$route.params.courseId
      };

      await this.$store.dispatch("getCompletedLessons", payload).then(res => {
        this.completedLessons = res.data.completedLessons;
        if (!this.isAdSidebarLinkActive && this.completedLessons.length == 3) {
          this.$store.commit("setAdNotification", true);
        }
      });
    },

    handleRunButton() {
      for (let child of this.$children) {
        if (child.$options._componentTag == "browser") {
          child.handleRunButton();
        }
      }
    },

    runCode() {
      for (let child of this.$children) {
        if (child.$options._componentTag == "browser") {
          child.runCode();
        }
      }
    },

    showTaskResult(result) {
      this.taskNotificationStatus = result.status;
      this.taskNotificationText = result.text;
      this.isTaskNotificationOpen = true;
    },

    async addCompletedLesson() {
      if (!this.isLessonCompleted(this.lesson.id)) {
        let userId = this.userData.id;
        let lessonId = this.lesson.id;
        await this.$store.dispatch("addCompletedLesson", { userId, lessonId });
        await this.getCompletedLessons();
      }
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

.lesson {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &-screens {
    width: 200vw;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

  &-screen {
    width: 100vw;
    height: calc(100vh - 50px);

    &-first {
      transform: translateX(-100vw);
      background-color: rgba(0, 0, 0, 0.2);
      transition: 400ms ease-in-out;
    }

    &-second {
      display: flex;
      flex-direction: column;
      transform: translateX(-100vw);
      background-color: rgba(0, 0, 0, 0.4);
      transition: 400ms ease-in-out;
    }
  }
}

.first-active {
  transform: translateX(0);
}

.code-editor-screen {
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: row;
  background-color: $white;

  &-content {
    width: calc(100% - 240px);
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}

.code-editor-container {
  width: 100%;
  height: calc(100vh - 100px);

  &-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &-empty-image {
    margin-bottom: 40px;
    width: 500px;
  }

  &-empty-title {
    color: $dark;
    font-size: 30px;
    font-weight: 500;
    opacity: 0.6;
  }
}

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 2s;
}
.fadeIn-enter,
.fadeIn-leave-to {
  opacity: 0;
}
</style>

<style lang="scss">
.CodeMirror {
  width: calc(100vw - 240px) !important;
  height: calc(100vh - 120px) !important;
  overflow: scroll;
  z-index: 1 !important;
}
</style>
