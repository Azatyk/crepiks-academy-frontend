<template>
  <transition name="fadeIn" appear mode="in-out">
    <div class="courses-page">
      <notification
        :heading="notificationHeading"
        :text="notificationText"
        :status="notificationStatus"
        :isActive="isNotificationActive"
        @close-notification="isNotificationActive = false"
        @open-notification="isNotificationActive = true"
      />
      <ad-notification
        :heading="adNotificationHeading"
        :text="adNotificationText"
        :image-path="adNotificationImagePath"
        :isActive="isLocalAdNotificationActive"
        @close-notification="isLocalAdNotificationActive = false"
      />
      <profileLink />
      <div class="courses-half">
        <div class="search-input">
          <input
            type="text"
            class="input"
            placeholder="Найди интерактив по душе"
          />
          <div class="button-container">
            <cButton @click="handleSearchButton" size="small">Найти</cButton>
          </div>
        </div>
        <div class="courses-list" v-if="isLoading">
          <div class="skeleton" v-for="index in 3" :key="index">
            <PuSkeleton
              :count="1"
              height="100px"
              width="100px"
              class="skeleton-image"
            ></PuSkeleton>
            <div class="skeleton-container">
              <div class="skeleton-title">
                <PuSkeleton :count="1" height="20px" width="100%"></PuSkeleton>
              </div>
              <div class="skeleton-description">
                <PuSkeleton :count="1" height="40px" width="100%"></PuSkeleton>
              </div>
              <div class="skeleton-button">
                <PuSkeleton :count="1" height="20px" width="100%"></PuSkeleton>
              </div>
            </div>
          </div>
        </div>
        <div class="courses-list" v-else>
          <courseCard
            class="course-card-block"
            v-for="(course, index) in courses"
            :key="index"
            :course="course"
            :courseFreeProp="course.lessons[0] ? course.lessons[0].free : 0"
            @course-opened="
              openCourseId = course.id;
              isCourseOpen = true;
            "
          />
        </div>
      </div>
      <div class="empty-half">
        <img
          class="empty-half-image"
          src="@/assets/images/empty-course-image.png"
          alt="Выберите курс"
        />
      </div>
      <course
        :isCourseOpen="isCourseOpen"
        :id="openCourseId"
        @open-course-block="isCourseOpen = true"
        @close-course-block="isCourseOpen = false"
        @need-subscription-notification="
          notificationHeading = 'Курс доступен по подписке';
          notificationText =
            'Оформите подписку для получения доступа к этому и всем остальным курсам Crepiks';
          notificationStatus = 'error';
          isNotificationActive = true;
        "
        @getting-lesson-error-notification="
          notificationHeading = 'Что-то пошло не так';
          notificationText =
            'Проверьте ваше подключение к интернету и попробуйте снова';
          notificationStatus = 'error';
          isNotificationActive = true;
        "
        @getting-course-error-notification="
          notificationHeading = 'Что-то пошло не так';
          notificationText =
            'Проверьте ваше подключение к интернету и попробуйте снова';
          notificationStatus = 'error';
          isCourseOpen = false;
          isNotificationActive = true;
        "
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
import cButton from "@/components/common/crepiks-button";
import courseCard from "@/components/courses/crepiks-course-card";

import course from "@/components/courses/crepiks-course";
import profileLink from "@/components/profile-link/crepiks-profile-link";
import notification from "@/components/common/crepiks-notification";

import adNotification from "@/components/common/crepiks-ad-notification";
import adNotificationImage from "@/assets/images/ad-notification-carrot-image.png";

import { mapGetters } from "vuex";

export default {
  components: {
    cButton,
    courseCard,
    course,
    profileLink,
    notification,
    "ad-notification": adNotification
  },

  data() {
    return {
      courses: [],
      isCourseOpen: false,
      openCourseId: 0,
      notificationHeading: "",
      notificationText: "",
      notificationStatus: "",
      isNotificationActive: false,
      adNotificationHeading: "",
      adNotificationText: "",
      adNotificationImagePath: "",
      isLocalAdNotificationActive: false,
      adNotificationImage: adNotificationImage,
      isLoading: true
    };
  },

  computed: mapGetters(["isAdNotificationActive", "isAdSidebarLinkActive"]),

  mounted() {
    if (this.isAdNotificationActive && !this.isAdSidebarLinkActive) {
      this.openAdNotification();
      this.$store.commit("setAdNotification", false);
      this.$store.commit("setAdSidebarLink", true);
    }
    this.getCourses();
  },

  methods: {
    openAdNotification() {
      setTimeout(() => {
        this.adNotificationHeading = "Уже 10 уроков? А ты быстрый!";
        this.adNotificationText =
          "Прямо сейчас ты прошел 10 уроков интерактива «Базовая верстка», а значит ты стал ближе к своей цели, стать программистом. Следующие уроки будут доступны после приробретения подписки. У нас для тебя кое-что есть, жми «Подробнее»";
        this.adNotificationImagePath = this.adNotificationImage;
        this.isLocalAdNotificationActive = true;
      }, 2000);
    },

    getCourses() {
      this.$store
        .dispatch("getCourses")
        .then(res => {
          this.courses = res.data.courses;
          this.isLoading = false;
        })
        .catch(() => {
          this.isNotificationActive = true;
          this.notificationHeading = "Не удалось получить курсы";
          this.notificationStatus = "error";
          this.notificationText =
            "Проверьте ваше подключение к интернету и попробуйте снова";
        });
    },

    handleSearchButton() {
      this.notificationHeading = "Поиск не активен";
      this.notificationText =
        "Сейчас ты можешь увидеть все активные интерактивы перед собой, поэтому смысла в поиске немного";
      this.notificationStatus = "warning";
      this.isNotificationActive = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.courses-page {
  position: relative;
  padding-top: 50px;
  padding-left: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.courses-half {
  width: 40%;
  display: flex;
  flex-direction: column;
}

.empty-half {
  width: 60%;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;

  &-image {
    width: 65%;
  }
}

.search-input {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.input {
  padding: 0 15px;
  height: 40px;
  width: 300px;
  box-sizing: border-box;
  color: $dark;
  border: none;
  border-radius: 10px 0 0 10px;
  outline: none;
  background-color: #f0eff4;
  opacity: 0.6;
  transition: 200ms ease-in-out;

  &:focus {
    padding-left: 20px;
  }
}

.button-container {
  padding: 0 5px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 10px 10px 0;
  background-color: #f0eff4;
  opacity: 0.7;
}

.courses-list {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}

.course-card-block {
  margin-bottom: 60px;
}

.skeleton {
  display: flex;
  width: 100%;
  margin-bottom: 60px;

  &-wrapper {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
  }

  &-image {
    margin-right: 10px;
  }

  &-container {
    width: 100%;
  }

  &-title {
    margin-bottom: 5px;
  }

  &-description {
    margin-bottom: 10px;
  }
}

@media (max-width: 1024px) {
  .empty-half {
    display: none;
  }

  .courses-list {
    box-sizing: border-box;
  }

  .courses-half {
    width: 100%;
  }

  .courses-page {
    padding: 0 5%;
    padding-top: 120px;
  }

  .free-block {
    width: 100%;
    left: 0;
  }

  .search-input {
    width: 100%;
  }

  .input {
    width: 100%;
  }

  .course-card-block {
    width: 95%;
  }
}

@media (max-width: 414px) {
  .courses-page {
    padding-top: 90px;
    padding-bottom: 30px;
  }

  .courses-list {
    padding-left: 5%;
  }

  .courses-half {
    width: 100%;
  }
}

@media (max-width: 374px) {
  .free-block {
    height: 115px;
  }

  .courses-half {
    width: 100%;
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
