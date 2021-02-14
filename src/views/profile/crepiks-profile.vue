<template>
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
          title="Базовая верстка сайтов"
          description="Узнайте как создаются сайты с нуля и создайте базовую верстку сайта с помощью HTML и CSS всего за пару вечеров"
          button="Перейти к курсу"
          class="user-profile-courses-card"
          progression="true"
          lessonsAll="32"
          lessonsDone="14"
        />
        <courseCard
          :image="secondCourseImage"
          title="Продвинутая верстка сайтов"
          description="Узнайте все тонкости современной верстки сайтов от сеток до градиентов и создайте свой первый одностраничный сайт"
          button="Перейти к курсу"
          class="user-profile-courses-card"
          progression="true"
          lessonsAll="20"
          lessonsDone="16"
        />
      </div>
    </div>
    <rightSideBlock
      :isOpen="openProfileEdit"
      @close-block="openProfileEdit = false"
    >
      <div class="right-block">
        <h2 class="right-block-heading">Редактирование профиля</h2>
        <div class="right-block-container">
          <cInput
            class="right-block-input"
            title="Имя"
            v-model="user.firstName"
            :value="user.firstName"
          />
          <cInput
            class="right-block-input"
            title="Фамилия"
            v-model="user.lastName"
            :value="user.lastName"
          />
          <cInput
            class="right-block-input"
            title="Почта"
            type="email"
            v-model="user.email"
            :value="user.email"
            :maxlength="max"
          />
          <cButton
            class="right-block-button"
            text="Изменить"
            @click="changeUserData"
          />
        </div>
      </div>
    </rightSideBlock>
    <rightSideBlock
      :isOpen="openChangePassword"
      @close-block="openChangePassword = false"
    >
      <div class="right-block">
        <h2 class="right-block-heading">Изменение пароля</h2>
        <div class="right-block-container">
          <cInput class="right-block-input" title="Старый пароль" />
          <cInput class="right-block-input" title="Новый пароль" />
          <cInput class="right-block-input" title="Повторите новый пароль" />
          <cButton class="right-block-button" text="Изменить" />
        </div>
      </div>
    </rightSideBlock>
  </div>
</template>

<script>
import courseCard from "@/components/courses/crepiks-course-card";

import firstCourseImage from "@/assets/images/basic-markup-image-small.png";
import secondCourseImage from "@/assets/images/pro-markup-image-small.png";

import rightSideBlock from "@/components/common/crepiks-right-side-block";
import cInput from "@/components/common/crepiks-input";
import cButton from "@/components/common/crepiks-button";

import { mapGetters } from "vuex";

export default {
  components: {
    courseCard,
    rightSideBlock,
    cInput,
    cButton
  },
  data() {
    return {
      firstCourseImage: firstCourseImage,
      secondCourseImage: secondCourseImage,
      openProfileEdit: false,
      openChangePassword: false,
      max: 34,
      user: {
        firstName: null,
        lastName: null,
        email: null
      },
      userId: null
    };
  },
  methods: {
    changeUserData() {
      let updatedData = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email
      };

      let id = this.userId;
      this.$store
        .dispatch("changeUserData", { id, updatedData })
        .then(() => (this.isProfileLoading = false))
        .catch(err => console.log(err));
    }
  },
  computed: {
    ...mapGetters(["userData"])
  },
  mounted() {
    if (this.userData) {
      this.user = this.userData;
      this.userId = this.user.id;
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
    margin-top: 3px;
    font-size: 16px;
    font-weight: 500;
  }

  &-buttons {
    margin-top: 20px;
  }

  &-button {
    color: $primary;
    font-size: 12px;
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

.right-block {
  padding: 30px 0;
  box-sizing: border-box;

  &-heading {
    font-weight: 500;
    font-size: 30px;
  }

  &-input {
    margin-top: 20px;
  }

  &-button {
    margin-top: 40px;
  }
}

@media (max-width: 1200px) {
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
