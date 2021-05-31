<template>
  <div class="intro">
    <div class="intro-content">
      <h2 class="intro-title">
        Привет, мы поможем тебе освоить основы
        <span class="intro-title-green">веб-программирования</span>
      </h2>
      <p class="intro-text">
        Попробуй веб-программирования на практике. Мы подготовили для тебя
        небольшой бесплатный интерактив с основами создания сайтов
      </p>
      <cButton
        text="Перейти к интерактиву"
        class="intro-button"
        @click="$router.push('/auth/register')"
        @mouseover="startRotation"
        @mouseout="stopRotation"
        ><img
          src="@/assets/images/cursor-icon.svg"
          alt="cursor-icon"
          class="intro-button-icon"
      /></cButton>
    </div>
    <router-link to="/auth/login" class="intro-login">Войти</router-link>
    <img
      class="intro-image intro-image-left"
      :class="{ 'intro-image-left-rotation': rotation }"
      src="@/assets/images/laptop-left.svg"
      alt="laptop"
    />
    <img
      class="intro-image intro-image-middle-left"
      :class="{ 'intro-image-middle-left-rotation': rotation }"
      src="@/assets/images/laptop-middle-left.svg"
      alt="laptop"
    />
    <img
      class="intro-image intro-image-bottom"
      :class="{ 'intro-image-bottom-rotation': rotation }"
      src="@/assets/images/laptop-bottom.svg"
      alt="laptop"
    />
    <img
      class="intro-image intro-image-middle-right"
      :class="{ 'intro-image-middle-right-rotation': rotation }"
      src="@/assets/images/laptop-middle-right.svg"
      alt="laptop"
    />
    <img
      class="intro-image intro-image-right"
      :class="{ 'intro-image-right-rotation': rotation }"
      src="@/assets/images/laptop-right.svg"
      alt="laptop"
    />
  </div>
</template>

<script>
import cButton from "@/components/common/crepiks-button";

export default {
  components: {
    cButton
  },
  data() {
    return {
      rotation: false
    };
  },
  methods: {
    startRotation() {
      this.rotation = true;
      console.log(this.rotation);
    },
    stopRotation() {
      this.rotation = false;
      console.log(this.rotation);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.intro {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    width: 80%;
    z-index: 10;
  }

  &-title {
    font-size: 50px;
    color: $dark;
    width: 100%;
    text-align: center;

    &-green {
      color: $primary;
    }
  }

  &-text {
    margin-top: 20px;
    font-size: 30px;
    color: $light-dark;
    width: 78%;
    text-align: center;
    line-height: 44px;
  }

  &-button {
    margin-top: 40px;
    padding: 20px 30px;
    font-size: 20px;

    &-icon {
      height: 20px;
      margin-left: 15px;
      margin-bottom: -5px;
    }
  }

  &-login {
    position: absolute;
    top: 40px;
    right: 80px;
    text-decoration: none;
    color: $dark;
    opacity: 0.5;
    transition: 200ms ease-in-out;
    font-size: 20px;
  }

  &-login:hover {
    opacity: 0.7;
  }

  &-image {
    position: absolute;
    opacity: 0.8;

    &-left {
      top: 60px;
      left: -10px;

      &-rotation {
        animation: rotation-left 3.5s ease-in-out infinite;
        animation-timing-function: linear;
      }
    }

    &-middle-left {
      top: 470px;
      left: 100px;

      &-rotation {
        animation: rotation-middle-left ease-in-out 3.5s infinite;
        animation-timing-function: linear;
      }
    }

    &-bottom {
      top: 90vh;
      left: 40%;

      &-rotation {
        animation: rotation-bottom ease-in-out 3.5s infinite;
        animation-timing-function: linear;
      }
    }

    &-middle-right {
      top: 490px;
      right: 100px;

      &-rotation {
        animation: rotation-middle-right ease-in-out 3.5s infinite;
        animation-timing-function: linear;
      }
    }

    &-right {
      top: 60px;
      right: 20px;

      &-rotation {
        animation: rotation-right ease-in-out 3.5s infinite;
        animation-timing-function: linear;
      }
    }
  }
}

@media (max-width: 1100px) {
  .intro {
    width: 100vw;
    overflow-x: hidden;

    &-content {
      width: 100%;
    }

    &-title {
      font-size: 35px;
      width: 85%;
    }

    &-login {
      right: 7.5%;
    }

    &-text {
      font-size: 25px;
      line-height: 35px;
      width: 65%;
    }

    &-image {
      position: absolute;

      &-left {
        top: 90px;
        left: -10px;
      }

      &-middle-left {
        top: 470px;
        left: -30px;
      }

      &-bottom {
        bottom: -10px;
        left: 40%;
      }

      &-middle-right {
        top: 490px;
        right: -30px;
      }

      &-right {
        top: 90px;
        right: -10px;
      }
    }
  }
}

@media (max-width: 665px) {
  .intro {
    &-title {
      font-size: 30px;
      width: 95%;
    }

    &-login {
      right: 7.5%;
    }

    &-text {
      font-size: 18px;
      width: 80%;
    }

    &-button {
      margin-top: 40px;
      padding: 15px 20px;
      font-size: 20px;

      &-icon {
        display: none;
      }
    }

    &-image {
      position: absolute;

      &-left {
        top: 90px;
        left: -70px;
      }

      &-middle-left {
        top: 610px;
        left: -70px;
      }

      &-bottom {
        bottom: -40px;
        left: 30%;
      }

      &-middle-right {
        top: 610px;
        right: -70px;
      }

      &-right {
        top: 80px;
        right: -50px;
      }
    }
  }
}

@media (max-width: 414px) {
  .intro {
    &-title {
      font-size: 28px;
      width: 85%;
      line-height: 35px;
      opacity: 0.85;
    }

    &-text {
      line-height: 150%;
    }

    &-button {
      padding: 12px 35px;
      border-radius: 6px;
      font-size: 13px;
    }

    &-login {
      font-size: 15px;
      top: 30px;
    }

    &-image {
      position: absolute;

      &-left {
        top: 70px;
        left: -40px;
        width: 150px;
      }

      &-middle-left {
        top: 65vh;
        left: -100px;
        transform: rotate(-28.46deg);
      }

      &-bottom {
        top: 75vh;
        left: 30%;
        width: 150px;
      }

      &-middle-right {
        top: 65vh;
        right: -60px;
        width: 150px;
      }

      &-right {
        right: 10px;
        transform: rotate(-28.2deg);
        width: 150px;
      }
    }
  }
}

@media (max-width: 375px) {
  .intro {
    &-title {
      font-size: 26px;
    }

    &-text {
      font-size: 16px;
    }

    &-image {
      position: absolute;

      &-left {
        top: 50px;
        left: -60px;
        width: 150px;
      }

      &-right {
        right: 0px;
        top: 50px;
      }
    }
  }
}

@media (max-width: 320px) {
  .intro {
    &-title {
      font-size: 23px;
    }

    &-text {
      font-size: 14px;
    }

    &-image {
      position: absolute;

      &-left {
        top: 30px;
        width: 110px;
      }

      &-middle-left {
        top: 70vh;
        left: -70px;
        width: 110px;
      }

      &-bottom {
        top: 78vh;
        left: 30%;
        width: 110px;
      }

      &-middle-right {
        top: 70vh;
        right: -30px;
        width: 110px;
      }

      &-right {
        top: 30px;
        width: 110px;
      }
    }
  }
}

@-webkit-keyframes rotation-left {
  0% {
    transform: translate(0, 0);
  }
  5% {
    transform: translate(0, 3px);
  }
  45% {
    transform: translate(0, 40px);
  }
  95% {
    transform: translate(0, 3px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@-webkit-keyframes rotation-middle-left {
  0% {
    transform: translate(0, 0);
  }
  5% {
    transform: translate(0, 3px);
  }
  56% {
    transform: translate(0, 60px);
  }
  95% {
    transform: translate(0, 3px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@-webkit-keyframes rotation-bottom {
  0% {
    transform: translate(0, 0);
  }
  5% {
    transform: translate(0, 3px);
  }
  50% {
    transform: translate(0, 40px);
  }
  95% {
    transform: translate(0, 3px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@-webkit-keyframes rotation-middle-right {
  0% {
    transform: translate(0, 0);
  }
  5% {
    transform: translate(0, 3px);
  }
  45% {
    transform: translate(0, 60px);
  }
  95% {
    transform: translate(0, 3px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@-webkit-keyframes rotation-right {
  0% {
    transform: translate(0, 0);
  }
  5% {
    transform: translate(0, 3px);
  }
  55% {
    transform: translate(0, 40px);
  }
  95% {
    transform: translate(0, 3px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
