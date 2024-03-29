<template>
  <transition name="fadeIn" appear>
    <div>
      <notification
        :heading="notificationHeading"
        :text="notificationText"
        :status="notificationStatus"
        :isActive="isNotificationActive"
        @close-notification="isNotificationActive = false"
        @open-notification="isNotificationActive = true"
      />
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
            <div class="user-profile-container">
              <i class="bx bx-phone user-profile-icon"></i>
              <span class="user-profile-text">{{
                user.phoneNumber ? "+" + user.phoneNumber : "-"
              }}</span>
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
              <div class="user-profile-button" @click="logout">
                <span class="user-profile-button">Выйти</span>
              </div>
            </div>
            <div
              :class="
                hasSubscription
                  ? 'user-profile-subscription user-profile-subscription-active'
                  : 'user-profile-subscription'
              "
            >
              {{ hasSubscription ? "Подписка активна" : "Подписка не активна" }}
            </div>
            <router-link
              v-if="!hasSubscription"
              to="/app/subscription"
              class="user-profile-link"
              >Активировать подписку</router-link
            >
            <span v-else class="user-profile-expired"
              >Истекает: {{ user.subscription.expiredDate }}</span
            >
          </div>
        </div>
        <div class="user-profile-courses">
          <h2 class="user-profile-courses-heading">Мои курсы</h2>
          <div class="user-profile-courses-container" v-if="isLoading">
            <div v-for="index in 3" :key="index">
              <div class="skeleton">
                <PuSkeleton
                  :count="1"
                  height="100px"
                  width="100px"
                  class="skeleton-image"
                ></PuSkeleton>
                <div class="skeleton-wrapper">
                  <div class="skeleton-title">
                    <PuSkeleton
                      :count="1"
                      height="20px"
                      width="100%"
                    ></PuSkeleton>
                  </div>
                  <div class="skeleton-description">
                    <PuSkeleton
                      :count="1"
                      height="40px"
                      width="100%"
                    ></PuSkeleton>
                  </div>
                  <div class="skeleton-button">
                    <PuSkeleton
                      :count="1"
                      height="20px"
                      width="100%"
                    ></PuSkeleton>
                  </div>
                </div>
              </div>
              <div class="skeleton-progression">
                <PuSkeleton :count="1" height="38px" width="100%"></PuSkeleton>
              </div>
            </div>
          </div>
          <div class="user-profile-courses-container" v-else>
            <courseCard
              v-for="course in courses"
              :key="course.id"
              :course="course"
              :courseFreeProp="0"
              @course-opened="
                openCourseId = course.id;
                isCourseOpen = true;
              "
              class="user-profile-courses-card"
              :progression="true"
              :completedLessons="course.completedLessons"
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
        :isCourseOpen="isCourseOpen"
        :id="openCourseId"
        @open-course-block="isCourseOpen = true"
        @close-course-block="isCourseOpen = false"
        @need-buy-subscription-notification="
          notificationHeading = 'Доступно по подписке';
          notificationText =
            'Необходимо приобрести подписку чтобы перейти к этому уроку';
          notificationStatus = 'warning';
          isNotificationActive = true;
        "
        @second-course-lesson-clicked="
          notificationHeading = 'Курс на данный момент недоступен';
          notificationText =
            'В скором времени проблемы будут решены и вам откроется доступ к курсу';
          notificationStatus = 'warning';
          isNotificationActive = true;
        "
      />
    </div>
  </transition>
</template>

<script>
import courseCard from "@/components/courses/crepiks-course-card";
import course from "@/components/courses/crepiks-course";
import notification from "@/components/common/crepiks-notification";

import firstCourseImage from "@/assets/images/basic-markup-image-small.png";
import secondCourseImage from "@/assets/images/pro-markup-image-small.png";

import profileEdit from "@/components/profile/crepiks-profile-edit";
import changePassword from "@/components/profile/crepiks-change-password";

import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  components: {
    courseCard,
    course,
    profileEdit,
    changePassword,
    notification
  },
  data() {
    return {
      firstCourseImage: firstCourseImage,
      isCourseOpen: false,
      openCourseId: 0,
      notificationHeading: "",
      notificationText: "",
      notificationStatus: "",
      isNotificationActive: false,
      secondCourseImage: secondCourseImage,
      openProfileEdit: false,
      openChangePassword: false,
      courses: [],
      user: {},
      hasSubscription: false,
      subscriptionExpiredAt: null,
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
      randomNumber: null,
      isLoading: true
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
  mounted() {
    if (this.userData) {
      this.user = this.userData;
      this.hasSubscription = this.userData.subscription.hasSubscription;
    }

    this.randomNumber = Math.floor(Math.random() * this.colors.length);

    this.$store.dispatch("getOneUserCourses", this.userData.id).then(res => {
      if (this.hasSubscription) {
        this.courses = res.data.courses;
      } else {
        for (let i = 0; i < res.data.courses.length; i++) {
          if (
            res.data.courses[i].lessons[0] &&
            res.data.courses[i].lessons[0].free
          ) {
            this.courses.push(res.data.courses[i]);
          }
        }
      }
      this.isLoading = false;
    });
  },
  watch: {
    userData() {
      this.user = this.userData;
    },

    openProfileEdit() {
      if (this.openProfileEdit) {
        this.openChangePassword = false;
        this.isCourseOpen = false;
      }
    },

    openChangePassword() {
      if (this.openChangePassword) {
        this.openProfileEdit = false;
        this.isCourseOpen = false;
      }
    },

    isCourseOpen() {
      if (this.isCourseOpen) {
        this.openProfileEdit = false;
        this.openChangePassword = false;
      }
    }
  },
  methods: mapMutations(["logout"])
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

  &-container:first-child {
    margin-top: 0;
  }

  &-container {
    display: flex;
    width: 100%;
    color: $dark;
    opacity: 0.6;
    margin-top: 10px;
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

  &-button:last-child {
    display: none;
    color: #e74c3c;
    opacity: 0.9;
  }

  &-subscription {
    margin: 40px 0 15px 0;
    padding: 12px 20px;
    box-sizing: border-box;
    color: $primary;
    font-weight: 700;
    font-size: 15px;
    text-align: center;
    border: 1px solid $primary;
    border-radius: 8px;

    &-active {
      color: $white;
      background-color: $primary;
    }
  }

  &-link {
    color: $primary;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }

  &-expired {
    color: $dark;
    font-size: 15px;
    font-weight: 500;
    opacity: 0.5;
  }

  &-courses {
    &-heading {
      font-weight: 400;
    }

    &-container {
      margin-top: 30px;
    }

    &-card:first-child {
      margin-top: 0;
    }

    &-card {
      margin-top: 30px;
    }
  }
}

.skeleton {
  width: 400px;
  display: flex;
  margin-top: 30px;

  &-image {
    margin-right: 10px;
  }

  &-wrapper {
    width: 100%;
  }

  &-title {
    margin-bottom: 5px;
  }

  &-description {
    margin-bottom: 10px;
  }

  &-progression {
    margin-top: 10px;
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
        padding-top: 4px;
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

    &-button:last-child {
      display: block;
    }
  }

  .skeleton {
    width: 100%;
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
