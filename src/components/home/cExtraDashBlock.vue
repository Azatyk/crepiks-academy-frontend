<template>
  <div class="extra-block">
    <div class="extra-block__text">
      <div class="extra-block__text-title">{{ text.title }}</div>
      <div class="test__text-description">
        {{ text.description }}
      </div>
      <div class="extra-block__buttons">
        <div
          @click="
            !text.buttonPath
              ? $emit('button-clicked')
              : $router.push(`${text.buttonPath}`)
          "
          class="extra-block__button"
        >
          {{ text.buttonText || "Подробнее" }}
        </div>
        <div
          v-if="text.secondButtonText"
          @click="
            !text.secondButtonPath
              ? $emit('button-clicked')
              : $router.push(`${text.buttonPath}`)
          "
          class="extra-block__button"
        >
          {{ text.secondButtonText || "Подробнее" }}
        </div>
      </div>
    </div>
    <img :src="imagePath" :alt="text.title" class="extra-block__image" />
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

.extra-block {
  padding: 0 3%;
  width: 47%;
  height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 30px;
  background-color: $color-6;
  box-shadow: 7px 7px 7px 0px #0000001a;
  transition: 200ms ease-in-out;

  &:hover {
    transform: translateX(-15px) translateY(-15px);
    box-shadow: 20px 20px 7px 0px #0000001a;
  }

  &__text {
    margin-right: 10%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    &-title {
      margin-bottom: 10px;
      font-size: 27px;
      color: $color-5;
      font-weight: bold;
    }

    &-description {
      width: 95%;
      font-size: 16px;
      color: $color-5;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: row;
  }

  &__button {
    margin-right: 10px;
    margin-top: 20px;
    padding: 7px 20px;
    font-size: 17px;
    color: $color-4;
    text-decoration: none;
    border: 3px solid $color-2;
    border-radius: 17px;
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
    width: auto;
    height: 80%;
  }

  @media (max-width: 1200px) {
    & {
      margin-bottom: 5vh;
      width: 100%;
      height: 300px;

      &:hover {
        .test__image {
          &-main {
            transform: translateX(-15px) translateY(-15px) rotate(-5deg);
          }

          &-left {
            transform: translateX(-20px) translateY(-15px) rotate(-30deg);
          }

          &-right {
            transform: translateX(-20px) translateY(-15px) rotate(-5deg);
          }
        }
      }

      &__text {
        margin-left: 3%;
        width: 50%;

        &-title {
          font-size: 38px;
        }

        &-description {
          font-size: 20px;
        }
      }

      &__button {
        padding: 9px 23px;
        font-size: 20px;
        border-radius: 20px;
      }
    }
  }

  @media (max-width: 1024px) {
    & {
      padding: 3% 4%;
      height: auto;
    }

    &__text {
      &-title {
        font-size: 4vw;
      }

      &-description {
        font-size: 2vw;
      }
    }

    &__button {
      padding: 6px 20px;
      font-size: 2vw;
    }

    &__image {
      height: 300px;
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
        box-shadow: 7px 7px 7px 0px #0000001a;

        .test__image {
          &-main {
            transform: none;
            transform: rotate(-10deg);
          }

          &-left {
            transform: none;
            transform: rotate(-15deg);
          }

          &-right {
            transform: none;
            transform: rotate(5deg);
          }
        }
      }

      &__text {
        margin: 0;
        width: 100%;

        &-title {
          width: 100%;
          font-size: 5.5vw;
        }

        &-description {
          width: 95%;
          font-size: 3.5vw;
        }
      }

      &__button {
        font-size: 3.3vw;
      }

      &__image {
        margin-bottom: 30px;
        width: 60%;
        height: auto;
      }
    }
  }
}
</style>
