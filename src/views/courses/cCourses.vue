<template>
  <div class="courses-page">
    <div class="courses-half">
      <div class="search-input">
        <input
          type="text"
          class="input"
          placeholder="Чему хотите научиться?"
          disabled
        />
        <div class="button-container">
          <cButton text="Найти" size="small" :isDisabled="true" />
        </div>
      </div>
      <div class="courses-list">
        <div class="free-block">
          <div class="free-block-label">Бесплатно</div>
        </div>
        <courseCard
          class="course-card-block"
          :image="firstCourseImage"
          title="Базовая верстка сайтов"
          description="Узнайте как создаются сайты с нуля и создайте базовую верстку сайта с помощью HTML и CSS всего за пару вечеров"
        />
        <courseCard
          class="course-card-block"
          :image="secondCourseImage"
          title="Продвинутая верстка сайтов"
          description="Узнайте все тонкости современной верстки сайтов от сеток до градиентов и создайте свой первый одностраничный сайт"
        />
        <courseCard
          class="course-card-block"
          :image="thirdCourseImage"
          title="Базовый JavaScript"
          description="Сделайте свой сайт интерактивным и изучи один из самых популярных языков программирования JavaScript"
          :isSoon="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import cButton from "@/components/common/crepiks-button";
import courseCard from "@/components/courses/crepiks-course-card";

import firstCourseImage from "@/assets/images/basic-markup-image-small.png";
import secondCourseImage from "@/assets/images/pro-markup-image-small.png";
import thirdCourseImage from "@/assets/images/basic-js-image-small.png";

export default {
  components: {
    cButton,
    courseCard
  },

  data() {
    return {
      firstCourseImage: firstCourseImage,
      secondCourseImage: secondCourseImage,
      thirdCourseImage: thirdCourseImage
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.courses-page {
  padding-top: 50px;
  padding-left: 50px;
}

.courses-half {
  display: flex;
  flex-direction: column;
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
}

.courses-list {
  position: relative;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}

.free-block {
  position: absolute;
  left: -20px;
  top: -20px;
  width: 440px;
  height: 140px;
  border: 2px solid $primary;
  border-radius: 10px;
  z-index: 0;

  &-label {
    position: absolute;
    top: -10px;
    right: 20px;
    width: 90px;
    display: block;
    color: $primary;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    background-color: $background;
  }
}

.course-card-block {
  margin-bottom: 50px;
}
</style>
