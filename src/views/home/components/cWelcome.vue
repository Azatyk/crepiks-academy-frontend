<template>
  <section class="welcome">
    <div class="content">
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
.welcome {
  padding-bottom: 5vw;
  padding: 0.1px;
  height: 100vh;
  width: 100%;
  background-color: #f8f7fc;
  background-image: url("../../../assets/images/welcomeSpot.svg");
  background-size: 60%;
  background-repeat: no-repeat;
}

.content {
  width: 100%;
  max-width: 1440px;
}

.welcome__text-block {
  margin-left: 7%;
  margin-top: 13%;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.text-block__heading {
  margin-bottom: 2%;
  font-size: 3vw;
  color: #f8f7fc;
}

.text-block__description {
  margin-bottom: 7%;
  width: 60%;
  font-size: 1.1vw;
  color: #e8e8e8;
}

.welcome__siting-man {
  position: absolute;
  bottom: 2%;
  right: 2%;
  width: 45%;
}

.text-block__button {
  padding: 15px 38px;
  font-size: 1.2vw;
  box-shadow: none;
}

@media (max-width: 1024px) {
  .welcome {
    background-size: 90%;
  }

  .welcome__text-block {
    margin-top: 18%;
    margin-left: 12%;
    width: 50%;
  }

  .text-block__heading {
    margin-bottom: 3%;
    font-size: 4vw;
  }

  .text-block__description {
    width: 80%;
    font-size: 2vw;
  }

  .text-block__button {
    padding: 1.2vw 2.3vw;
  }
}
</style>
