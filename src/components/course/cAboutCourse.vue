<template>
  <div class="about">
    <!-- <div class="about__text">
      <div class="about__text-title">{{ course.title.ru }}</div>
      <div class="about__text-description">{{ course.description.ru }}</div>
      <router-link :to="'/app/courses/' + course.id" class="about__button"
        >Начать обучение</router-link
      >
    </div>
    <img :src="course.iconPath" :alt="course.title.ru" class="about__image" /> -->
    <div class="about__text">
      <div class="about__text-title">{{ $t("firstCourseTitle") }}</div>
      <div class="about__text-description">
        {{ $t("firstCourseDescription") }}
      </div>
      <div class="about__buttons">
        <div class="about__button" @click="handleCertificateButton">
          Получить сертификат
        </div>
        <a
          v-if="isLessonsCompleted"
          class="about__button about__button-download"
          :href="`https://api.crepiks.com/${certificatePath}`"
          download
        >
          <i class="bx bx-download about__button-icon"></i>
        </a>
      </div>
      <vs-dialog class="about__dialog" not-padding v-model="isCertificateOpen">
        <img
          :src="`https://api.crepiks.com/${certificatePath}`"
          alt="Сертификат"
          class="about__dialog-image"
        />
      </vs-dialog>
    </div>
    <img
      src="@/assets/images/firstCoursePreview.png"
      alt="Basic HTML & CSS"
      class="about__image"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    course: {
      type: Object,
      required: true
    }
  },

  computed: mapGetters(["userData"]),

  data() {
    return {
      lessons: [],
      completedLessons: [],
      isLessonsCompleted: false,
      isCertificateOpen: false,
      certificatePath: ""
    };
  },

  mounted() {
    this.$store.dispatch("getCertificate", this.userData.id).then(res => {
      console.log(res.data);
      this.certificatePath = res.data.certificates[0].fileUrl;
    });
  },

  methods: {
    async handleCertificateButton() {
      await this.checkCompletedLessons();
      if (this.isLessonsCompleted) {
        this.isCertificateOpen = true;
      } else {
        this.openNotNotification();
      }
    },

    async checkCompletedLessons() {
      const loading = this.$vs.loading();

      let courseId = this.$route.params.id;

      await this.$store
        .dispatch("getLessons", courseId)
        .then(res => (this.lessons = res.data.course.lessons));

      await this.$store
        .dispatch("getCompletedLessons", this.userData.id)
        .then(res => (this.completedLessons = res.data.completedLessons));

      if (this.lessons.length == this.completedLessons.length) {
        this.isLessonsCompleted = true;
      }

      loading.close();
    },

    openNotNotification() {
      this.openNotification(
        "top-center",
        "danger",
        "Пройдите курс",
        "Для получения сертификата вам нужно пройти весь курс"
      );
    },

    openNotification(
      position = "top-center",
      color = null,
      title = "",
      text = "",
      duration = 5000
    ) {
      this.$vs.notification({
        duration,
        position,
        color,
        title,
        text
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.about {
  margin: 5vh 0;
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: $color-6;
  border-radius: 30px;
  box-shadow: 7px 7px 7px 0px $color-7;
  transition: 200ms ease-in-out;

  &:hover {
    transform: translateX(-15px) translateY(-15px);
    box-shadow: 20px 20px 7px 0px $color-7;
  }

  &:hover .about__image {
    transform: translateX(-10px) translateY(-10px);
  }

  &__text {
    margin-left: 4%;
    margin-right: 5%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    &-title {
      margin-bottom: 10px;
      width: 110%;
      font-size: 38px;
      font-weight: bold;
      color: $color-5;
    }

    &-description {
      font-size: 20px;
      color: $color-5;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: row;
  }

  &__button {
    margin-top: 25px;
    padding: 8px 23px;
    display: inline-block;
    font-size: 20px;
    color: $color-4;
    text-decoration: none;
    border: 3px solid $color-2;
    border-radius: 20px;
    background-color: $color-2;
    transition: 150ms ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
      color: $color-2;
      background-color: $color-6;
    }

    &-download {
      margin-left: 15px;
    }
  }

  &__image {
    height: 80%;
    transition: 150ms ease-in-out;
  }

  &__dialog {
    &-image {
      position: relative;
      width: 800px;
      display: block;
    }
  }

  @media (max-width: 1024px) {
    & {
      padding: 3% 3%;
      height: auto;
      box-sizing: border-box;

      &__text {
        &-title {
          font-size: 33px;
        }

        &-description {
          font-size: 18px;
        }
      }

      &__button {
        font-size: 18px;
      }

      &__image {
        width: 40%;
        height: auto;
      }
    }

    @media (max-width: 650px) {
      & {
        padding: 5% 8%;
        width: auto;
        flex-direction: column-reverse;

        &__text {
          margin: 0;
          margin-top: 40px;
          width: 100%;

          &-title {
            width: 100%;
            font-size: 6.5vw;
          }

          &-description {
            font-size: 4vw;
          }
        }

        &__image {
          width: 100%;
        }
      }
    }
  }
}
</style>
