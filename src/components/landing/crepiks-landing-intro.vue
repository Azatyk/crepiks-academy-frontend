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
        ><img
          src="@/assets/images/cursor-icon.svg"
          alt="cursor-icon"
          class="intro-button-icon"
      /></cButton>
    </div>
    <router-link to="/auth/login" class="intro-login">Войти</router-link>
    <img
      class="intro-image intro-image-left"
      src="@/assets/images/laptop-left.svg"
      alt="laptop"
    />
    <img
      class="intro-image intro-image-middle-left"
      src="@/assets/images/laptop-middle-left.svg"
      alt="laptop"
    />
    <img
      class="intro-image intro-image-bottom"
      src="@/assets/images/laptop-bottom.svg"
      alt="laptop"
    />
    <img
      class="intro-image intro-image-middle-right"
      src="@/assets/images/laptop-middle-right.svg"
      alt="laptop"
    />
    <img
      class="intro-image intro-image-right"
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
    width: 925px;
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

    &-left {
      top: 130px;
      left: 50px;
    }

    &-middle-left {
      top: 500px;
      left: 100px;
    }

    &-bottom {
      bottom: -80px;
      left: 40%;
    }

    &-middle-right {
      top: 570px;
      right: 100px;
    }

    &-right {
      top: 120px;
      right: 100px;
    }
  }
}
</style>
