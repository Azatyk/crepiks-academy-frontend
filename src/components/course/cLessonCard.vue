<template>
  <!-- <div class="lesson">
    <div class="lesson__content">
      <div class="lesson__content-number">{{ getLessonIndex(index) }}</div>
      <div class="lesson__content-title">{{ lesson.title.ru }}</div>
    </div>
    <router-link to="/app/courses" class="lesson__button">К уроку</router-link>
  </div> -->
  <div class="lesson">
    <div class="lesson__content">
      <div class="lesson__content-number">{{ getLessonIndex(index) }}</div>
      <div class="lesson__content-title">{{ title }}</div>
    </div>
    <router-link to="/app/courses" class="lesson__button">{{
      $t("lessonCardButtonText")
    }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    // lesson: {
    //   type: Object,
    //   required: true
    // },
    title: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    getLessonIndex(index) {
      index++;
      if (String(index).length == 1) {
        return "0" + index;
      } else {
        return index;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.lesson {
  position: relative;
  margin-bottom: 30px;
  padding: 0 2%;
  width: 100%;
  height: 90px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background-color: $color-6;
  box-shadow: 7px 7px 7px 0px $color-7;
  transition: 200ms ease-in-out;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $color-1;
    clip-path: circle(0px at 100% 0%);
    transition: 400ms ease-in-out;
    z-index: 2;
  }

  &:hover:before {
    clip-path: circle(30% at 100% 0%);
  }

  &:hover {
    transform: translateX(-15px) translateY(-15px);
    box-shadow: 20px 20px 7px 0px $color-7;
  }

  &:hover .lesson__button {
    border: 3px solid $color-8;
    background-color: $color-8;
  }

  &__content {
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    &-number {
      width: 55px;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $color-5;
      font-size: 30px;
      font-weight: bold;
      border-radius: 20px;
      background-color: $color-4;
      box-shadow: 5px 5px 7px 0px $color-7;
      transition: 200ms ease-in-out;
    }

    &-title {
      margin-left: 40px;
      color: $color-5;
      font-size: 25px;
      font-weight: bold;
    }
  }

  &__button {
    padding: 8px 23px;
    font-size: 20px;
    color: $color-4;
    text-decoration: none;
    border: 3px solid $color-2;
    border-radius: 16px;
    background-color: $color-2;
    transition: 150ms ease-in-out;
    box-shadow: 7px 7px 7px 0px $color-7;
    z-index: 2;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
    }
  }
}
</style>
