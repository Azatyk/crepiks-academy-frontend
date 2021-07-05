<template>
  <div
    class="lesson-theory"
    :class="{
      'lesson-theory-open': isTheoryOpen,
      'lesson-theory-only': isTheoryOnly
    }"
  >
    <span class="lesson-theory-navigation" @click="$emit('navigation-opened')"
      >Список тем</span
    >
    <i
      v-if="!isTheoryOnly"
      class="bx bx-x lesson-theory-close"
      @click="$emit('theory-closed')"
    ></i>
    <vuescroll :ops="ops">
      <div class="content-full">
        <div class="skeleton" v-if="isLoading">
          <div class="skeleton-title">
            <PuSkeleton :count="1" height="46px" width="100%"></PuSkeleton>
          </div>
          <div class="skeleton-paragraph">
            <PuSkeleton :count="7" height="15px" width="100%"></PuSkeleton>
          </div>
          <div class="skeleton-paragraph">
            <PuSkeleton :count="7" height="15px" width="100%"></PuSkeleton>
          </div>
          <div class="skeleton-paragraph">
            <PuSkeleton :count="7" height="15px" width="100%"></PuSkeleton>
          </div>
          <div class="skeleton-paragraph">
            <PuSkeleton :count="7" height="15px" width="100%"></PuSkeleton>
          </div>
        </div>
        <div class="content" v-else>
          <h1 class="lesson-theory-title">{{ lesson.title }}</h1>
          <runtime-text
            :blocks="lesson.theoryBlocks"
            :contentTexts="lesson.theoryBlocksContent"
          />
          <codemirror v-if="false" />
          <cButton
            :isBold="true"
            size="big"
            class="lesson-theory-button"
            @click="
              isTheoryOnly ? handleTheoryButton() : $emit('theory-closed')
            "
            >{{
              isLessonLast
                ? "Завершить курс"
                : isTheoryOnly
                ? "Следующая тема"
                : "Перейти к заданию"
            }}</cButton
          >
        </div>
      </div>
    </vuescroll>
  </div>
</template>

<script>
import cButton from "@/components/common/crepiks-button";

import vuescroll from "vuescroll";
import runtimeText from "@/components/lesson/crepiks-lesson-runtime-text";

export default {
  props: {
    isTheoryOnly: {
      type: Boolean,
      required: true
    },
    isTheoryOpen: {
      type: Boolean,
      default: false
    },
    isLessonLast: {
      type: Boolean,
      default: false
    },
    lesson: {
      type: Object
    },
    lessons: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean
    }
  },

  components: {
    cButton,
    vuescroll,
    "runtime-text": runtimeText
  },

  data() {
    return {
      ops: {
        vuescroll: {
          mode: "native"
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: false,
          scrollingY: true,
          speed: 300,
          easing: "easeInOutQuint",
          verticalNativeBarPos: "right"
        },
        rail: {
          background: "#2d2c2c",
          opacity: 0.2,
          size: "13px",
          specifyBorderRadius: "10px",
          gutterOfEnds: null,
          gutterOfSide: "8px",
          keepShow: false
        },
        bar: {
          showDelay: 1000,
          onlyShowBarOnScroll: true,
          keepShow: true,
          background: "#2d2c2c",
          opacity: 0.3,
          hoverStyle: false,
          specifyBorderRadius: "5px",
          minSize: 0,
          size: "13px",
          disable: false
        }
      },
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
      }
    };
  },

  methods: {
    handleTheoryButton() {
      if (this.isLessonLast) {
        this.$emit("add-completed-lessons");
        this.$router.push("/app/courses/");
      } else {
        let courseId = this.$route.params.courseId;
        let currentLessonId = Number(this.$route.params.lessonId);
        let nextLessonId;

        this.lessons.forEach(lesson => {
          if (lesson.id == currentLessonId) {
            nextLessonId = this.lessons[this.lessons.indexOf(lesson) + 1].id;
          }
        });

        this.$emit("add-completed-lessons");

        this.$router.push(
          "/app/courses/" + courseId + "/lessons/" + nextLessonId
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.lesson-theory {
  position: fixed;
  bottom: -99.5vh;
  left: 0;
  right: 0;
  margin: auto;
  width: 99%;
  height: 99.5vh;
  display: flex;
  justify-content: center;
  border-radius: 10px 10px 0 0;
  background-color: $white;
  z-index: 3;
  transition: transform 400ms ease-in-out;
  will-change: transform;

  &-only {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }

  &-open {
    -moz-transform: translateY(-99.5vh);
    -ms-transform: translateY(-99.5vh);
    -webkit-transform: translateY(-99.5vh);
    -o-transform: translateY(-99.5vh);
    transform: translateY(-99.5vh);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.2);
  }

  &-navigation {
    position: absolute;
    top: 4%;
    left: 3%;
    color: $primary;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    z-index: 3;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }

  &-close {
    position: absolute;
    top: 4%;
    right: 3%;
    font-size: 35px;
    opacity: 0.6;
    cursor: pointer;
    z-index: 3;

    &:hover {
      opacity: 0.9;
    }
  }

  &-title {
    margin-bottom: 30px;
    color: $dark;
    font-size: 40px;
    font-weight: 700;
  }

  &-button {
    width: 220px;
  }
}

.content {
  padding: 100px 0;
  margin: auto;
  width: 750px;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  &-full {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
}

.skeleton {
  padding: 100px 0;
  box-sizing: border-box;
  margin: auto;
  width: 750px;

  &-title {
    width: 40%;
  }

  &-paragraph {
    width: 100%;
    margin-top: 30px;
  }
}
</style>
