<template>
  <div class="course">
    <div class="course__visible">
      <img class="course__image" :src="image" :alt="title" />
      <h3 class="course__title">{{ title }}</h3>
    </div>
    <div class="course__hidden">
      <div class="course__description">{{ description }}</div>
      <div class="course__lessons-amount">
        <i class="bx bx-time course__lessons-amount-icon"></i>
        <div class="course__lessons-amount-text">{{ lessonsAmount }}</div>
      </div>
      <router-link :to="'/app/courses/' + id" class="course__button">{{
        $t("courseCardButtonText")
      }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    lessonsAmount: {
      type: Number,
      required: false
    },
    id: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.course {
  margin-bottom: 5%;
  width: 270px;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: $color-6;
  box-shadow: 7px 7px 7px 0px #0000001a;
  transition: 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateX(-15px) translateY(-15px);
    box-shadow: 20px 20px 7px 0px #0000001a;
  }

  &__visible {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  &__image {
    width: 50%;
    height: auto;
  }
}
</style>
