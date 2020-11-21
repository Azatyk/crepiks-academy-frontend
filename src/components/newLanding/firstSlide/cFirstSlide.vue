<template>
  <section class="section">
    <div class="header">
      <div class="header__content">
        <router-link to="/" class="header__logo-link">
          <div class="header__logo">
            Crepiks
          </div>
        </router-link>
      </div>
      <div class="header__button" @click="$router.push('/auth/login')">
        {{ $t("headerLoginButtonText") }}
      </div>
    </div>
    <div class="content">
      <h1 class="content__title">
        {{ $t("welcomeTitleFirst") }}<br />{{ $t("welcomeTitleSecond") }}
      </h1>
      <p class="content__subtitle">{{ $t("welcomeDescriptionText") }}</p>
      <button class="content__button">{{ $t("welcomeButtonText") }}</button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.section {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  padding: 20px 70px;
  box-sizing: border-box;
}

.header {
  height: 50px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    font-size: 35px;
    font-weight: bold;
    color: $color-1;
  }

  &__logo-link {
    text-decoration: none;
  }

  &__button {
    text-decoration: none;
    color: #727bdf;
    padding: 10px 20px;
    border: 1px solid #727bdf;
    border-radius: 5px;
    cursor: pointer;

    transition: 0.3s ease-in-out;
  }

  &__button:hover {
    background-color: #727bdf;
    color: #ffffff;
  }
}

.content {
  width: 500px;
  margin-top: 20vh;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-size: 4.5vw;
    line-height: 1.1;
    color: #000000;
    font-weight: bold;
    text-align: center;
  }

  &__subtitle {
    margin-top: 30px;

    font-size: 1.35vw;
    line-height: 1.3;
    color: #000000;
    text-align: center;
  }

  &__button {
    margin-top: 30px;

    padding: 8px 20px;
    border-radius: 5px;
    background-color: #727bdf;
    border-color: #727bdf;
    color: #ffffff;
    font-size: 1.35vw;
  }
}
</style>
