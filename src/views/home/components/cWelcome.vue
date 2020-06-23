<template>
  <section class="page">
    <div class="welcome">
      <div class="welcome__text-block">
        <h1 class="text-block__heading">Учись программировать вместе с нами</h1>
        <div class="text-block__description">
          Приобрети навыки 21 века с помощью веселых и увлекательных
          итерактивных курсов
        </div>
        <cButtonLink
          route="/courses"
          text="Начать обучение"
          :isBold="false"
          class="text-block__button"
        />
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
import cButtonLink from "@/components/general/cButtonLink";

export default {
  components: {
    cButtonLink
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 100vh;
  background-color: #f8f7fc;
}

.welcome {
  padding-bottom: 5vw;
  padding: 0.1px;
  margin: auto;
  height: 100vh;
  width: 80%;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flexstart;
}

.welcome__text-block {
  margin-top: 18%;
  margin-left: 7%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.text-block__heading {
  margin-bottom: 2%;
  font-size: 3vw;
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

.text-block__button {
  font-size: 1.2vw;
  box-shadow: none;
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
    font-size: 4.5vw;
    text-align: center;
  }

  .text-block__description {
    width: 100%;
    font-size: 2vw;
    text-align: center;
  }

  .text-block__button {
    font-size: 1.5vw;
    padding: 1.2vw 2.3vw;
  }

  .welcome__siting-man {
    margin: 0;
    width: 60%;
  }
}
</style>
