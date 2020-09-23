<template>
  <div class="test">
    <div class="test__text">
      <div class="test__text-title">{{ $t("testInfoTitle") }}</div>
      <div class="test__text-description">
        {{ $t("testInfoDescription") }}
      </div>
      <router-link to="/app/soon" class="test__button">{{
        $t("testInfoButtonText")
      }}</router-link>
    </div>
    <div class="test__images">
      <img
        src="@/assets/images/homeTest1.png"
        alt="Test"
        class="test__image-main"
      />
      <img
        src="@/assets/images/homeTest3.png"
        alt="Test"
        class="test__image-left"
      />
      <img
        src="@/assets/images/homeTest2.png"
        alt="Test"
        class="test__image-right"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.test {
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
    .test__image {
      &-main {
        transform: translateX(-10px) translateY(-15px) rotate(-5deg);
      }

      &-left {
        transform: translateX(-5px) translateY(-10px) rotate(-25deg);
      }

      &-right {
        transform: translateX(-10px) translateY(-10px) rotate(-5deg);
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
      top: 22%;
      right: 14%;
      width: 110px;
      height: auto;
      transform: rotate(-10deg);
      transition: 150ms ease-in-out;
    }

    &-left {
      position: absolute;
      right: 125%;
      bottom: 13%;
      width: 40px;
      height: auto;
      transform: rotate(-15deg);
      transition: 150ms ease-in-out;
    }

    &-right {
      position: absolute;
      right: -3%;
      top: 15%;
      width: 6px;
      height: auto;
      transform: rotate(5deg);
      transition: 150ms ease-in-out;
    }
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

      &__images {
        width: 40%;
        height: 100%;
      }

      &__image {
        &-main {
          top: 15%;
          right: 21%;
          width: 170px;
        }

        &-left {
          right: 70%;
          width: 50px;
        }

        &-right {
          right: 7%;
          width: 8px;
        }
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
      &-main {
        top: 10%;
        width: 120px;
      }

      &-left {
        right: 80%;
        width: 40px;
      }

      &-right {
        right: 3%;
        top: 25%;
        width: 7px;
      }
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

      &__images {
        margin-bottom: 30px;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &__image {
        &-main {
          position: relative;
          top: 0;
          left: 0;
        }

        &-left {
          top: 50%;
        }

        &-right {
          right: 15%;
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
    }
  }
}
</style>
