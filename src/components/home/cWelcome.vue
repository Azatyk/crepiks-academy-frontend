<template>
  <section class="welcome__content">
    <div class="welcome">
      <div class="welcome__text-block">
        <h1 class="text-block__heading">Учись программировать вместе с нами</h1>
        <div class="text-block__description">
          Приобрети навыки 21 века с помощью веселых и увлекательных
          итерактивных курсов
        </div>
        <a-button
          type="primary"
          class="welcome__button"
          @click="$router.push('/courses')"
          >Начать обучение</a-button
        >
      </div>
      <img
        src="@/assets/images/welcomeSitingMan.svg"
        alt="Siting Man"
        class="welcome__siting-man"
      />
    </div>
  </section>
</template>

<script>
import { Button } from "ant-design-vue";

export default {
  components: {
    "a-button": Button
  }
};
</script>

<style scoped>
.welcome__content {
  width: 100%;
  height: 100vh;
}

.welcome {
  padding-bottom: 5vw;
  padding: 0.1px;
  margin: auto;
  height: 100vh;
  width: 85%;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.welcome__text-block {
  margin-top: 15%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.text-block__heading {
  margin-bottom: 2%;
  font-size: 3vw;
  font-weight: 700;
  line-height: 1.2;
  color: #34495e;
}

.text-block__description {
  margin-bottom: 7%;
  width: 60%;
  font-size: 1.1vw;
  color: #516f8c;
}

.welcome__siting-man {
  margin-top: 20%;
  width: 50%;
}

.welcome__button {
  padding: 0 5%;
  height: 3vw;
  font-size: 1.3vw;
}

@media (max-width: 1024px) {
  .welcome {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  .welcome__text-block {
    margin: 0;
    width: 70%;
    align-items: center;
  }

  .text-block__heading {
    margin-bottom: 3%;
    font-size: 5vw;
    text-align: center;
  }

  .text-block__description {
    width: 100%;
    font-size: 2.5vw;
    text-align: center;
  }

  .welcome__siting-man {
    margin: 0;
    width: 70%;
  }
}
</style>
