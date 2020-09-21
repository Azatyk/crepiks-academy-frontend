<template>
  <div class="trainer">
    <div class="trainer__text">
      <div class="trainer__text-title">{{ $t("trainerInfoTitle") }}</div>
      <div class="trainer__text-description">
        {{ $t("trainerInfoDescription") }}
      </div>
      <router-link to="/app/trainer" class="trainer__button">{{
        $t("trainerInfoButtonText")
      }}</router-link>
    </div>
    <div class="trainer__images">
      <img
        src="@/assets/images/homeTrainer1.png"
        alt="Trainer"
        class="trainer__image-main"
      />
      <img
        src="@/assets/images/homeTrainer2.png"
        alt="Trainer"
        class="trainer__image-left"
      />
      <img
        src="@/assets/images/homeTrainer3.png"
        alt="Trainer"
        class="trainer__image-right"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.trainer {
  margin-right: 6%;
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

  &:hover {
    .trainer__image {
      &-main {
        transform: translateX(-5px) translateY(-5px) rotate(-5deg);
      }

      &-left {
        transform: translateX(-10px) translateY(-10px) rotate(-10deg);
      }

      &-right {
        transform: translateX(-10px) translateY(-10px) rotate(100deg);
      }
    }
  }

  &__text {
    margin-right: 10%;
    width: 75%;
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

  &__button {
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

  &__images {
    position: relative;
    width: 25%;
    height: 100%;
  }

  &__image {
    &-main {
      position: absolute;
      top: 26%;
      right: 5%;
      width: 130px;
      height: auto;
      transition: 150ms ease-in-out;
    }

    &-left {
      position: absolute;
      right: 115%;
      bottom: 13%;
      width: 40px;
      height: auto;
      transition: 150ms ease-in-out;
    }

    &-right {
      position: absolute;
      right: 5%;
      top: 10%;
      width: 30px;
      height: auto;
      transform: rotate(90deg);
      transition: 150ms ease-in-out;
    }
  }

  @media (max-width: 1200px) {
    & {
      margin-right: 0;
      margin-bottom: 5vh;
      width: 100%;
      height: 300px;

      &:hover {
        .trainer__image {
          &-main {
            transform: translateX(-10px) translateY(-10px) rotate(-5deg);
          }

          &-left {
            transform: translateX(-20px) translateY(-20px) rotate(-10deg);
          }

          &-right {
            transform: translateX(-20px) translateY(-20px) rotate(120deg);
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
        padding: 8px 23px;
        font-size: 20px;
        border-radius: 20px;
      }

      &__images {
        width: 40%;
        height: 100%;
      }

      &__image {
        &-main {
          top: 15%;
          right: 20%;
          width: 190px;
        }

        &-left {
          right: 60%;
          width: 60px;
        }

        &-right {
          right: 10%;
          width: 40px;
          transform: rotate(110deg);
        }
      }
    }
  }
}
</style>
