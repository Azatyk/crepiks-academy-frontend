<template>
  <transition name="fadeIn" appear>
    <div>
      <div class="user-profile">
        <div class="user-profile-info">
          <div class="user-profile-image" :style="imageBackground">
            <div class="user-profile-image-body" :style="imageBody">
              <div class="user-profile-image-eyes">
                <div class="user-profile-image-eye">
                  <div class="user-profile-image-eye-inner" :style="imageBody">
                    <div class="user-profile-image-pupil"></div>
                  </div>
                </div>
                <div class="user-profile-image-eye">
                  <div
                    class="user-profile-image-eye-inner user-profile-image-eye-inner-right"
                    :style="imageBody"
                  >
                    <div class="user-profile-image-pupil"></div>
                  </div>
                </div>
              </div>
              <div class="user-profile-image-laptop">
                <i class="bx bxl-apple user-profile-image-laptop-icon"></i>
              </div>
            </div>
          </div>
          <div class="user-profile-info-container">
            <div class="user-profile-container">
              <i class="bx bx-user-circle user-profile-icon"></i>
              <span class="user-profile-text"
                >{{ user.lastName }} {{ user.firstName }}</span
              >
            </div>
            <div class="user-profile-container user-profile-container-email">
              <i class="bx bx-mail-send user-profile-icon"></i>
              <span class="user-profile-text">{{ user.email }}</span>
            </div>
            <div class="user-profile-buttons">
              <div class="user-profile-button" @click="openProfileEdit = true">
                Редактировать профиль
              </div>
              <div
                class="user-profile-button"
                @click="openChangePassword = true"
              >
                Изменить пароль
              </div>
            </div>
            <div class="user-profile-subscription">Подписка не активна</div>
          </div>
        </div>
        <div class="user-profile-courses">
          <h2 class="user-profile-courses-heading">Мои курсы</h2>
          <div class="user-profile-courses-container">
            <courseCard
              :image="firstCourseImage"
              :id="1"
              @course-opened="
                openCourseId = 1;
                isFirstCourseOpen = true;
              "
              title="Базовая верстка сайтов"
              description="Узнайте как создаются сайты с нуля и создайте базовую верстку сайта с помощью HTML и CSS всего за пару вечеров"
              class="user-profile-courses-card"
              :progression="true"
              :lessons="lessons"
              :completedLessons="completedLessons"
            />
            <courseCard
              :image="secondCourseImage"
              :id="2"
              title="Продвинутая верстка сайтов"
              description="Узнайте все тонкости современной верстки сайтов от сеток до градиентов и создайте свой первый одностраничный сайт"
              class="user-profile-courses-card"
              :progression="true"
              :lessons="lessons"
              :completedLessons="completedLessons"
            />
          </div>
        </div>
      </div>
      <profileEdit
        :isProfileEditOpen="openProfileEdit"
        @close-profile-block="openProfileEdit = false"
      />
      <changePassword
        :isOpenChangePassword="openChangePassword"
        @close-change-password-block="openChangePassword = false"
      />
      <course
        :isCourseOpen="isFirstCourseOpen"
        :id="openCourseId"
        @open-course-block="isFirstCourseOpen = true"
        @close-course-block="isFirstCourseOpen = false"
      />
    </div>
  </transition>
</template>

<script>
import courseCard from "@/components/courses/crepiks-course-card";
import course from "@/components/courses/crepiks-course";

import firstCourseImage from "@/assets/images/basic-markup-image-small.png";
import secondCourseImage from "@/assets/images/pro-markup-image-small.png";

import profileEdit from "@/components/profile/crepiks-profile-edit";
import changePassword from "@/components/profile/crepiks-change-password";

import { mapGetters } from "vuex";

export default {
  components: {
    courseCard,
    course,
    profileEdit,
    changePassword
  },
  data() {
    return {
      firstCourseImage: firstCourseImage,
      isFirstCourseOpen: false,
      openCourseId: 0,
      secondCourseImage: secondCourseImage,
      openProfileEdit: false,
      openChangePassword: false,
      lessons: [],
      completedLessons: [],
      user: {
        firstName: null,
        lastName: null
      },
      colors: [
        {
          background: "#34495e",
          body: "#f1c40f"
        },
        {
          background: "#1abc9c",
          body: "#2980b9"
        },
        {
          background: "#6c5ce7",
          body: "fdcb6e"
        },
        {
          background: "#ee5253",
          body: "#222f3e"
        },
        {
          background: "#54a0ff",
          body: "#1dd1a1"
        },
        {
          background: "#F97F51",
          body: "#1dd1a1"
        },
        {
          background: "#2C3A47",
          body: "#1dd1a1"
        },
        {
          background: "#2C3A47",
          body: "#1B9CFC"
        },
        {
          background: "#2C3A47",
          body: "#fa8231"
        },
        {
          background: "#fed330",
          body: "#303952"
        }
      ],
      randomNumber: null
    };
  },
  computed: {
    ...mapGetters(["userData"]),

    imageBody() {
      if (this.randomNumber) {
        return "background-color: " + this.colors[this.randomNumber].body + ";";
      } else {
        return "";
      }
    },

    imageBackground() {
      if (this.randomNumber) {
        return (
          "background-color: " + this.colors[this.randomNumber].background + ";"
        );
      } else {
        return "";
      }
    }
  },
  async mounted() {
    if (this.userData) {
      this.user = this.userData;
    }

    this.randomNumber = Math.floor(Math.random() * this.colors.length);

    await this.$store.dispatch("getLessons", 1).then(res => {
      this.lessons = res.data.course.lessons;
    });

    await this.$store
      .dispatch("getCompletedLessons", this.userData.id)
      .then(res => (this.completedLessons = res.data.completedLessons));
  },
  watch: {
    userData() {
      this.user = this.userData;
    },

    openProfileEdit() {
      if (this.openProfileEdit) {
        this.openChangePassword = false;
      }
    },

    openChangePassword() {
      if (this.openChangePassword) {
        this.openProfileEdit = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.user-profile {
  display: flex;
  justify-content: space-between;
  width: 900px;
  padding: 70px 50px;
  box-sizing: border-box;

  &-info {
    width: 300px;
    box-sizing: border-box;

    &-container {
      margin-top: 30px;
    }
  }

  &-image {
    width: 300px;
    height: 300px;
    background-color: #34495e;
    border-radius: 10px;
    position: relative;
    box-shadow: 50px 50px 100px rgba(0, 0, 0, 0.02);
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    overflow: hidden;

    &-body {
      position: relative;
      height: 70%;
      width: 205px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 70px 70px 0 0;
      background-color: #f1c40f;
      box-shadow: 0 0 60px rgba(0.2, 0.2, 0.2, 0.08);
    }

    &-eyes {
      width: 65%;
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
    }

    &-eye {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: relative;
      background-color: #ffffff;

      &-inner {
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        bottom: 2px;
        left: 50%;
        transform: translate(-30%);
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #f1c40f;
        box-shadow: 0px 0px 44px 1px rgba(0, 0, 0, 0.75);

        &-right {
          transform: translate(-70%);
        }
      }
    }

    &-pupil {
      background-color: #000000;
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }

    &-laptop {
      width: 75%;
      height: 90px;
      border-radius: 7px;
      margin-top: auto;
      margin-bottom: 0;
      position: relative;
      background-color: #b6b8b9;
      box-shadow: 0px 0px 68px rgb(0, 0, 0, 0.5);

      &-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 30px;
      }
    }
  }

  &-container {
    display: flex;
    width: 100%;
    color: $dark;
    opacity: 0.6;

    &-email {
      margin-top: 10px;
    }
  }

  &-icon {
    font-size: 22px;
    margin-right: 7px;
  }

  &-text {
    margin-top: 2px;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
  }

  &-buttons {
    margin-top: 20px;
  }

  &-button {
    color: $primary;
    font-size: 15px;
    margin-top: 10px;
    cursor: pointer;
  }

  &-button:hover {
    opacity: 0.8;
  }

  &-subscription {
    box-sizing: border-box;
    padding: 12px 20px;
    color: $primary;
    border: 1px solid $primary;
    text-align: center;
    font-weight: 700;
    font-size: 15px;
    margin-top: 40px;
    border-radius: 8px;
  }

  &-courses {
    &-heading {
      font-weight: 400;
    }

    &-container {
      margin-top: 30px;
    }

    &-card:last-child {
      margin-top: 60px;
    }
  }
}

@media (max-width: 1244px) {
  .user-profile {
    padding: 100px 5%;
    padding-top: 100px;
    width: 830px;
  }
}

@media (max-width: 1100px) {
  .user-profile {
    flex-direction: column;
    width: 100%;

    &-image {
      width: 220px;
      height: 220px;

      &-body {
        height: 85%;
      }
    }

    &-subscription {
      margin-top: 25px;
    }

    &-info {
      display: flex;
      width: 100%;

      &-container {
        margin-left: 50px;
        margin-top: 0;
        padding-top: 40px;
        box-sizing: border-box;
      }
    }

    &-courses {
      width: 100%;
      margin-top: 50px;

      &-card {
        width: 95%;
      }
    }
  }
}

@media (max-width: 525px) {
  .user-profile {
    &-image {
      width: 100%;
    }
    &-info {
      flex-direction: column;

      &-container {
        padding-top: 30px;
        margin-left: 0;
      }
    }
  }
}

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 1s;
}
.fadeIn-enter,
.fadeIn-leave-to {
  opacity: 0;
}
</style>
