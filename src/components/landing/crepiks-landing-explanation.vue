<template>
  <div class="explanation">
    <h2 class="explanation-title">
      Что ещё за <span class="explanation-title-green">интерактив</span>?
      <img
        src="@/assets/images/smile-think.svg"
        alt="smile-think"
        class="explanation-title-smile"
      />
    </h2>
    <p class="explanation-text">
      Интерактив — это обучающий материал с практикой. Изучив новую тему, ты
      сможешь сразу же опробовать знания на реальном примере.
    </p>
    <p class="explanation-text">
      Каждая тема интерактива состоит из
      <span class="explanation-text-green">теории</span> и
      <span class="explanation-text-green">практики</span>
    </p>
    <img
      src="@/assets/images/curve-arrow.svg"
      class="explanation-arrow"
      alt="curve-arrow"
    />
    <div class="explanation-card">
      <div class="explanation-content">
        <h4 class="explanation-content-title">Теория</h4>
        <p class="explanation-content-text">
          Это текстовый теоретический материал с примерами кода и объяснением
          темы
        </p>
      </div>
      <div class="explanation-image">
        <img
          src="@/assets/images/explanation-macbook-mockup.svg"
          alt="explanation-macbook-mockup"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.explanation {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 300px;
  margin-bottom: 100px;
  width: 1203px;

  &-title {
    width: 100%;
    font-size: 60px;
    color: $dark;
    opacity: 0.85;

    &-green {
      color: $primary;
    }

    &-smile {
      margin-bottom: -5px;
    }
  }

  &-text {
    width: 100%;
    font-size: 44px;
    color: $dark;
    margin-top: 30px;
    opacity: 0.7;

    &-green {
      color: $primary;
      text-decoration: underline;
      cursor: pointer;
      transition: 200ms ease-in-out;
    }

    &-green:hover {
      opacity: 0.8;
    }
  }

  &-card {
    width: 100%;
    background-color: $white;
    border-radius: 20px;
    height: 515px;
    padding: 50px 50px;
    box-sizing: border-box;
    display: flex;
    box-shadow: 0px 0px 50px rgba(60, 60, 60, 0.05);
  }

  &-content {
    width: 40%;

    &-title {
      font-size: 50px;
      color: $dark;
      margin-top: 70px;
      font-weight: 400;
    }

    &-text {
      font-size: 30px;
      color: $light-dark;
      margin-top: 40px;
    }
  }

  &-image {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
