<template>
  <div class="welcome">
    <div class="welcome__text">
      <h1 class="welcome__text-title">{{ $t("coursesWelcomeTitle") }}</h1>
      <div class="welcome__text-description">
        {{ $t("coursesWelcomeDescription") }}
      </div>
    </div>
    <div class="welcome__images">
      <img
        src="@/assets/images/coursesLaptop.png"
        alt="Laptop"
        class="welcome__images-main"
      />
      <img
        src="@/assets/images/coursesCoffee.png"
        alt="Coffee"
        class="welcome__images-left"
      />
      <img
        src="@/assets/images/coursesBook.png"
        alt="Book"
        class="welcome__images-right"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.welcome {
  margin: 5vh 0;
  width: 100%;
  height: 350px;
  box-sizing: border-box;
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

  &:hover .welcome__images {
    &-main {
      transform: translateX(-20px) translateY(-10px) rotate(-5deg);
    }

    &-left {
      transform: translateX(-15px) translateY(-15px) rotate(-15deg);
    }

    &-right {
      transform: translateX(-15px) translateY(-30px) rotate(10deg);
    }
  }

  &__text {
    margin-right: 10%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    &-title {
      margin-bottom: 20px;
      font-size: 2.8vw;
      font-weight: bold;
      color: $color-5;
    }

    &-description {
      font-size: 1.3vw;
      color: $color-5;
    }
  }

  &__images {
    position: relative;
    width: 30%;
    height: 100%;
    transition: 150ms ease-in-out;

    &-main {
      position: absolute;
      right: 16%;
      bottom: 15%;
      width: 300px;
      height: auto;
      transition: 200ms ease-in-out;
    }

    &-left {
      position: absolute;
      bottom: 15%;
      right: 105%;
      width: 80px;
      height: auto;
      transition: 200ms ease-in-out;
    }

    &-right {
      position: absolute;
      bottom: 15%;
      right: -5%;
      width: 70px;
      height: auto;
      transition: 200ms ease-in-out;
    }
  }

  @media (max-width: 1200px) {
    & {
      padding: 5% 2%;
      height: auto;

      &__text {
        width: 50%;

        &-title {
          font-size: 4.3vw;
        }

        &-description {
          font-size: 2vw;
        }
      }

      &__images {
        height: 200px;

        &-main {
          right: 10%;
          bottom: 10%;
          width: 200px;
        }

        &-left {
          width: 50px;
        }

        &-right {
          right: -15%;
          width: 50px;
        }
      }
    }
  }

  @media (max-width: 650px) {
    & {
      padding: 5% 5%;
      padding-bottom: 8%;
      height: auto;
      width: auto;
      flex-direction: column-reverse;

      &:hover {
        transform: none;
        box-shadow: 7px 7px 7px 0px $color-7;

        .welcome__images {
          &-main {
            transform: none;
          }

          &-left {
            transform: none;
          }

          &-right {
            transform: none;
          }
        }
      }

      &__images {
        height: auto;
        margin: 10% 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &-main {
          position: relative;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 160px;
        }

        &-left {
          bottom: 20%;
          right: 80%;
        }

        &-right {
          bottom: 20%;
          right: 2%;
          width: 40px;
        }
      }

      &__text {
        margin: 0;
        width: 100%;

        &-title {
          font-size: 6vw;
        }

        &-description {
          width: 100%;
          font-size: 3.1vw;
        }
      }
    }
  }
}
</style>
