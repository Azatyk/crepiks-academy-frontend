<template>
  <div class="main-block">
    <div class="main-block__text">
      <div class="main-block__title">
        {{ text.title }}
      </div>
      <div class="main-block__description">
        {{ text.description }}
      </div>
      <div
        @click="$router.push(`${text.buttonPath}`)"
        class="main-block__button"
      >
        {{ text.buttonText || "Подробнее" }}
      </div>
    </div>
    <img :src="imagePath" :alt="text.title" class="main-block__image" />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: Object,
      required: true
    },
    imagePath: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.main-block {
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

  &__text {
    margin-right: 10%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &__title {
    margin-bottom: 10px;
    width: 110%;
    font-size: 38px;
    font-weight: bold;
    color: $color-5;
  }

  &__description {
    font-size: 20px;
    color: $color-5;
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
    width: auto;
  }

  @media (max-width: 1024px) {
    & {
      padding: 3% 0;
      height: auto;
    }

    &__title {
      font-size: 4vw;
    }

    &__description {
      font-size: 2vw;
    }

    &__button {
      padding: 6px 20px;
      font-size: 2vw;
    }

    &__image {
      height: 230px;
      width: auto;
    }
  }

  @media (max-width: 650px) {
    & {
      padding: 5% 5%;
      width: auto;
      height: auto;
      flex-direction: column-reverse;

      &:hover {
        transform: none;
        box-shadow: 7px 7px 7px 0px $color-7;

        .news__image {
          transform: none;
        }
      }

      &__image {
        margin: auto;
        margin-bottom: 30px;
        width: 70%;
        height: auto;
      }

      &__text {
        margin: 0;
        width: 100%;
      }

      &__title {
        width: 100%;
        font-size: 5.5vw;
      }

      &__description {
        width: 95%;
        font-size: 3.5vw;
      }

      &__button {
        font-size: 3.5vw;
      }
    }
  }
}
</style>
