<template>
  <div class="landing__welcome">
    <div class="welcome__text" v-prlx="{ speed: -0.6 }">
      <h1 class="welcome__heading">Не откладывай.<br />Программируй.</h1>
      <div class="welcome__description">
        Хватит откладывать на бесконечно завтрашний день. Освой одну из самых
        востребованных профессий нашего века прямо сейчас!
      </div>
      <div class="welcome__button">
        Начать обучение
      </div>
    </div>
    <img
      v-prlx="{ speed: -0.2 }"
      src="@/assets/images/landingWelcome.png"
      alt="Programming"
      class="welcome__image"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.landing__welcome {
  padding-bottom: 10%;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eeeef6;
  z-index: 0;
}

.welcome__text {
  position: absolute;
  left: 7%;
  bottom: 16%;
  display: flex;
  flex-direction: column;
}

.welcome__heading {
  margin-bottom: 40px;
  font-size: 5.3vw;
  line-height: 1.1;
  color: #0d0b6d;
  font-weight: bold;
}

.welcome__description {
  width: 37%;
  font-size: 1.4vw;
  line-height: 1.3;
  color: #0d0b6d;
  opacity: 0.7;
}

.welcome__button {
  margin-top: 50px;
  padding: 1% 1%;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eeeef6;
  font-size: 1.6vw;
  font-weight: 500;
  text-align: center;
  background-color: #2522a0;
  border: 4px solid #2522a0;
  border-radius: 30px;
  overflow: hidden;
  transition: 150ms ease-in-out;
  cursor: pointer;
}

.welcome__button:hover {
  color: #2522a0;
  background-color: #eeeef6;
  transform: scale(1.05);
  transition: 150ms ease-in-out;
}

.welcome__image {
  position: absolute;
  bottom: 0%;
  right: 0;
  /* height: 80%; */
  width: 45%;
}
</style>
