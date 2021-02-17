<template>
  <div>
    <div class="user-profile">
      <div class="user-profile-info">
        <div class="user-profile-image">
          <img
            class="user-profile-image-locate"
            src="@/assets/images/profile-image.svg"
            alt=""
          />
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
            <div class="user-profile-button" @click="openChangePassword = true">
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
            progression="true"
            lessonsAll="32"
            lessonsDone="14"
          />
          <courseCard
            :image="secondCourseImage"
            :id="2"
            title="Продвинутая верстка сайтов"
            description="Узнайте все тонкости современной верстки сайтов от сеток до градиентов и создайте свой первый одностраничный сайт"
            class="user-profile-courses-card"
            progression="true"
            lessonsAll="20"
            lessonsDone="16"
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
      user: {
        firstName: null,
        lastName: null
      }
    };
  },
  computed: {
    ...mapGetters(["userData"])
  },
  mounted() {
    if (this.userData) {
      this.user = this.userData;
    }
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
    background-color: #ffffff;
    border-radius: 10px;
    position: relative;
    box-shadow: 50px 50px 100px rgba(0, 0, 0, 0.02);

    &-locate {
      width: 100px;
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      text-align: center;
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
</style>
