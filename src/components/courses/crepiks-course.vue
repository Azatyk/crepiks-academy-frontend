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
            :src="course.imagePath"
            alt="Базовая верстка сайтов"
          />

          <h2 class="main-info-title">{{ course.title }}</h2>
          <p class="main-info-description">
            {{ course.description }}
          </p>
          <cButton class="main-info-button" @click="handleToLessonButton()"
            >Перейти к курсу</cButton
          >
        </div>
        <div class="course-lessons">
          <div class="course-lessons-labels">
            <div class="course-lessons-title">Темы курса</div>
            <div class="course-lessons-amount">
              {{ course.lessons.length }} темы
            </div>
          </div>
          <div class="course-lessons-list">
            <div
              class="lesson"
              v-for="(lesson, index) in course.lessons"
              :key="lesson.id"
              @click="handleExactLessonClick(lesson.id, lesson.free)"
            >
              <div class="lesson-title">
                <div class="lesson-title-number">{{ index + 1 }}.</div>
                <div class="lesson-title-text">{{ lesson.title }}</div>
              </div>
              <div
                class="lesson-status"
                :class="{
                  'lesson-status-completed': isLessonCompleted(lesson.id)
                }"
                v-if="userData.subscription.hasSubscription || lesson.free"
              >
                {{ isLessonCompleted(lesson.id) ? "Пройдено" : "Не пройден" }}
              </div>
              <div class="lesson-status" v-else>
                <i class="bx bxs-lock-alt lesson-status-lock"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <modal :isModalOpen="isModalOpen" @close-modal="isModalOpen = false">
        <div class="modal">
          <div class="modal-container">
            <h2 class="modal-title">Дальше нужен компьютер</h2>
            <div class="modal-text">
              Для начала курса тебе понадобится компьютер или ноутбук. Зачем?
              Дело в том, что писать код на телефоне не очень удобно, поэтому мы
              хотим, чтобы ты сразу привыкал к печати на клавиатуре
            </div>
            <div class="modal-image">
              <img
                class="modal-image-inner"
                src="@/assets/images/need-laptop-image.svg"
                alt="need-laptop-image"
              />
            </div>
          </div>
        </div>
      </modal>
    </vuescroll>
  </rightSideBlock>
</template>

<script>
import rightSideBlock from "@/components/common/crepiks-right-side-block";
import cButton from "@/components/common/crepiks-button";
import modal from "@/components/common/crepiks-modal";

import VLazyImage from "v-lazy-image";
import vuescroll from "vuescroll";

import { mapGetters } from "vuex";

export default {
  components: {
    rightSideBlock,
    cButton,
    VLazyImage,
    vuescroll,
    modal
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
        imagePath: "",
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
      },
      isModalOpen: false,
      isLastUncompletedLessonFree: false
    };
  },

  created() {
    if (this.isMobile) {
      this.ops.rail.size = "0px";
      this.ops.bar.size = "0px";
    }
  },

  computed: {
    ...mapGetters(["userData", "isMobile"])
  },

  methods: {
    handleToLessonButton() {
      if (this.isMobile) {
        this.isModalOpen = true;
      } else {
        this.$store
          .dispatch("getLesson", { lessonId: this.course.lessons[0].id })
          .then(() => {
            if (
              this.userData.subscription.hasSubscription ||
              this.isLastUncompletedLessonFree
            ) {
              if (this.id == 2) {
                // захардкоженное условие для отображения заголовков второго курса
                this.$emit("second-course-lesson-clicked");
              } else {
                this.$router.push(
                  "/app/courses/" +
                    this.id +
                    "/lessons/" +
                    this.getLastUncompletedLessonId()
                );
              }
            } else {
              this.$emit("need-buy-subscription-notification");
            }
          })
          .catch(err => {
            if (err.response.status == 403) {
              this.$emit("need-buy-subscription-notification");
            } else {
              this.$emit("getting-lesson-error-notification");
            }
          });
      }
    },

    handleExactLessonClick(lessonId, lessonFree) {
      if (this.isMobile) {
        this.isModalOpen = true;
      } else {
        if (this.userData.subscription.hasSubscription || Boolean(lessonFree)) {
          if (this.id == 2) {
            // захардкоженное условие для отображения заголовков второго курса
            this.$emit("second-course-lesson-clicked");
          } else {
            this.$router.push(
              "/app/courses/" + this.id + "/lessons/" + lessonId
            );
          }
        } else {
          this.$emit("need-buy-subscription-notification");
        }
      }
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
              this.isLastUncompletedLessonFree = this.course.lessons[
                i + 1
              ].free;
              return this.course.lessons[i + 1].id;
            }
          }
        }
      } else {
        return this.course.lessons[0].id;
      }
    }
  },

  watch: {
    isCourseOpen() {
      if (this.isCourseOpen) {
        this.skeletonLoading = true;
        this.$store
          .dispatch("getCourse", this.id)
          .then(res => {
            this.course = res.data.course;
            this.skeletonLoading = false;
          })
          .catch(() => {
            this.$emit("getting-course-error-notification");
          });

        const payload = {
          userId: this.userData.id,
          courseId: this.id
        };

        this.$store
          .dispatch("getCompletedLessons", payload)
          .then(res => (this.completedLessons = res.data.completedLessons));
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

    &-lock {
      font-size: 17px;
      opacity: 0.7;
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

.modal {
  width: 98%;

  &-container {
    width: 100%;
    height: 100%;
    padding: 0 30px;
    box-sizing: border-box;
  }

  &-title {
    font-size: 30px;
    line-height: 32px;
    color: $dark;
    opacity: 0.9;
  }

  &-text {
    margin-top: 20px;
    color: $light-dark;
    line-height: 26px;
  }

  &-image {
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}

@media (max-width: 375px) {
  .modal {
    &-image {
      margin-top: 95px;
    }
  }
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

@media (max-width: 320px) {
  .modal {
    &-title {
      font-size: 25px;
    }

    &-text {
      font-size: 14px;
      line-height: 20px;
    }

    &-image {
      margin-top: 30px;
    }
  }
}
</style>
