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
      <router-link :to="'/app/courses/' + course.id" class="about__button">{{
        $t("firstCourseButtonText")
      }}</router-link>
    </div>
    <img
      src="@/assets/images/firstCoursePreview.png"
      alt="Basic HTML & CSS"
      class="about__image"
    />
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true
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

  &__button {
    margin-top: 25px;
    padding: 8px 23px;
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
  }

  &__image {
    height: 80%;
    transition: 150ms ease-in-out;
  }
}
</style>
