<template>
  <rightSideBlock
    :isOpen="isCourseOpen"
    @close-block="$emit('close-course-block')"
  >
    <div v-if="this.skeletonLoading" class="skeleton">
      <div class="skeleton-image">
        <PuSkeleton :count="1" height="200px" width="100%"></PuSkeleton>
      </div>
      <div class="skeleton-heading">
        <PuSkeleton :count="1" height="30px" width="100%"></PuSkeleton>
      </div>
      <div class="skeleton-text">
        <PuSkeleton :count="1" height="100px" width="100%"></PuSkeleton>
      </div>
      <div class="skeleton-button">
        <PuSkeleton :count="1" height="50px" width="100%"></PuSkeleton>
      </div>
      <div class="skeleton-lessons-heading">
        <PuSkeleton :count="1" height="70px" width="100%"></PuSkeleton>
      </div>
      <div class="skeleton-lessons-blocks">
        <PuSkeleton :count="5" height="40px" width="100%"></PuSkeleton>
      </div>
    </div>
    <vuescroll :ops="ops">
      <div class="course-content">
        <div class="main-info">
          <v-lazy-image
            class="main-info-image"
            :src="course.iconPath"
            alt="Базовая верстка сайтов"
          />

          <h2 class="main-info-title">{{ course.title.ru }}</h2>
          <p class="main-info-description">
            {{ course.description.ru }}
          </p>
          <cButton
            text="Перейти к курсу"
            class="main-info-button"
            @click="handleToLessonButton()"
          />
        </div>
        <div class="course-lessons">
          <div class="course-lessons-labels">
            <div class="course-lessons-title">Темы курса</div>
            <div class="course-lessons-amount">
              {{ course.lessons.length }} темы
            </div>
          </div>
          <div class="course-lessons-list">
            <router-link
              class="lesson"
              v-for="(lesson, index) in course.lessons"
              :key="lesson.id"
              :to="'/app/courses/' + id + '/lessons/' + lesson.id"
            >
              <div class="lesson-title">
                <div class="lesson-title-number">{{ index + 1 }}.</div>
                <div class="lesson-title-text">{{ lesson.title.ru }}</div>
              </div>
              <div
                class="lesson-status"
                :class="{
                  'lesson-status-completed': isLessonCompleted(lesson.id)
                }"
              >
                {{ isLessonCompleted(lesson.id) ? "Пройдено" : "Не пройден" }}
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </vuescroll>
  </rightSideBlock>
</template>

<script>
import rightSideBlock from "@/components/common/crepiks-right-side-block";
import cButton from "@/components/common/crepiks-button";

import VLazyImage from "v-lazy-image";
import vuescroll from "vuescroll";

import { mapGetters } from "vuex";

export default {
  components: {
    rightSideBlock,
    cButton,
    VLazyImage,
    vuescroll
  },

  props: {
    isCourseOpen: {
      type: Boolean,
      default: false
    },

    id: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      course: {
        title: {
          ru: ""
        },
        description: {
          ru: ""
        },
        iconPath: "",
        lessons: [
          {
            id: null,
            title: {
              ru: ""
            }
          }
        ]
      },
      skeletonLoading: null,
      completedLessons: [{ id: null }],
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
          opacity: 0.0,
          size: "10px",
          specifyBorderRadius: "10px",
          gutterOfEnds: null,
          gutterOfSide: "0px",
          keepShow: false
        },
        bar: {
          showDelay: 1000,
          onlyShowBarOnScroll: true,
          keepShow: false,
          background: "#2d2c2c",
          opacity: 0.3,
          hoverStyle: false,
          specifyBorderRadius: "5px",
          minSize: 0,
          size: "10px",
          disable: false
        }
      }
    };
  },

  created() {
    if (this.isMobile) {
      this.ops.rail.size = "0px";
      this.ops.bar.size = "0px";
    }
  },

  watch: {
    async isCourseOpen() {
      if (this.isCourseOpen) {
        this.skeletonLoading = true;
        await this.$store
          .dispatch("getCourse", this.id)
          .then(res => {
            this.course = res.data.course;
            this.skeletonLoading = false;
          })
          .catch(() => {
            this.$emit("getting-course-error-notification");
          });

        await this.$store
          .dispatch("getCompletedLessons", this.userData.id)
          .then(res => (this.completedLessons = res.data.completedLessons));
      }
    }
  },

  computed: {
    ...mapGetters(["userData", "isMobile"])
  },

  methods: {
    handleToLessonButton() {
      this.$store
        .dispatch("getLesson", { lessonId: this.course.lessons[0].id })
        .then(() => {
          this.$router.push(
            "/app/courses/" +
              this.id +
              "/lessons/" +
              this.getLastUncompletedLessonId()
          );
        })
        .catch(err => {
          if (err.response.status == 403) {
            this.$emit("need-subscription-notification");
          } else {
            this.$emit("getting-lesson-error-notification");
          }
        });
    },

    isLessonCompleted(lessonId) {
      for (let i = 0; i < this.completedLessons.length; i++) {
        if (this.completedLessons[i].id == lessonId) {
          return true;
        }
      }
    },

    getLastUncompletedLessonId() {
      if (this.completedLessons.length > 0) {
        if (this.completedLessons.length == this.course.lessons.length) {
          return this.course.lessons[0].id;
        } else {
          const lastCompletedLessonId = this.completedLessons[
            this.completedLessons.length - 1
          ].id;

          for (let i = 0; i < this.course.lessons.length; i++) {
            if (this.course.lessons[i].id == lastCompletedLessonId) {
              return this.course.lessons[i + 1].id;
            }
          }
        }
      } else {
        return this.course.lessons[0].id;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.course {
  &-content {
    padding-bottom: 50px;
    padding-right: 30px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
}

.main-info {
  margin-bottom: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;

  &-image {
    margin-bottom: 25px;
    width: 100%;
  }

  &-title {
    margin-bottom: 10px;
    color: $dark;
    font-size: 30px;
    font-weight: 600;
    opacity: 0.9;
  }

  &-description {
    margin-bottom: 20px;
    color: $dark;
    font-size: 16px;
    font-weight: 500;
    opacity: 0.7;
  }

  &-button {
    width: 170px;
  }
}

.course-lessons {
  width: 100%;
  display: flex;
  flex-direction: column;

  &-labels {
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &-title {
    color: $dark;
    font-size: 20px;
    font-weight: 500;
    opacity: 0.9;
  }

  &-amount {
    color: $dark;
    font-size: 15px;
    font-weight: 400;
    opacity: 0.7;
  }

  &-list {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}

.lesson {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  &-title {
    display: flex;
    flex-direction: row;
    color: $dark;
    font-size: 16px;
    opacity: 0.7;

    &-number {
      margin-right: 7px;
    }
  }

  &-status {
    color: $dark;
    font-size: 12px;
    opacity: 0.6;

    &-completed {
      color: $primary;
    }
  }
}

.skeleton {
  padding: 30px 0;
  box-sizing: border-box;
  width: 100%;

  &-heading {
    margin-top: 30px;
  }

  &-text {
    margin-top: 20px;
  }

  &-button {
    margin-top: 20px;
  }

  &-lessons {
    &-heading {
      margin-top: 50px;
    }

    &-blocks {
      margin-top: 20px;
    }
  }
}

.v-lazy-image {
  height: 250px;
  filter: blur(8px);
  background-color: #e5e5e8;
  border-radius: 10px;
  transition: filter 0.5s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}

@media (max-width: 500px) {
  .main-info {
    margin-bottom: 50px;

    &-title {
      font-size: 25px;
    }

    &-description {
      font-size: 13px;
    }

    &-button {
      font-size: 14px;
      padding: 8px 10px;
      border-radius: 7px;
    }
  }

  .course-lessons {
    &-title {
      font-size: 16px;
    }

    &-labels {
      margin-bottom: 20px;
    }
  }

  .lesson {
    &-title {
      font-size: 13px;
    }
  }
  .v-lazy-image {
    height: auto;
  }
}

@media (max-width: 414px) {
  .course-content {
    padding-right: 0;
  }

  .v-lazy-image {
    height: auto;
  }
}
</style>
