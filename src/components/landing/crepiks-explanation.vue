<template>
  <div class="explanation">
    <div class="explanation-content">
      <h2 class="explanation-heading">Как проходит обучение?</h2>
      <p class="explanation-paragraph">
        Учитесь с помощью интерактивных курсов. Что это такое? Все просто, вы
        заходите на курс и проходите уроки с простой теорией и забавной
        практикой. Учитесь когда угодно и где угодно.
      </p>
      <div class="explanation-container">
        <cExplanationCard
          number="1"
          heading="Теория"
          paragraph="Теория - это небольшой текст с иллюстрациями и иногда с тестами в каждом уроке. Читайте теорию, делайте конспекты и если что-нибудь забудете - теория всегда доступна."
        />
        <cExplanationCard
          class="explanation-card"
          number="2"
          heading="Практика"
          paragraph="Сразу после теории у вас будет возможность попрактиковаться и написать реальный код, выполняя небольшие задания. Вам не нужно ничего скачивать - все, что нужно для практики уже на платформе."
        />
      </div>
    </div>
  </div>
</template>

<script>
import cExplanationCard from "@/components/explanation/crepiks-explanation-card.vue";
export default {
  components: {
    cExplanationCard
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.explanation {
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  padding: 0 12%;
  background-color: $dark;
  color: $white;

  &-content {
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
  }

  &-heading {
    width: 100%;
    text-align: center;
    font-weight: 400;
    font-size: 2.6vw;
    padding-top: 12vh;
  }

  &-paragraph {
    width: 78%;
    text-align: center;
    font-size: 1.3vw;
    padding-top: 4vh;
    margin-right: auto;
    margin-left: auto;
    font-weight: lighter;
    line-height: 1.9vw;
  }

  &-container {
    padding: 15vh 0;
  }

  &-card {
    margin-top: 10vh;
  }
}

@media (max-width: 1000px) {
  .explanation {
    padding: 0 5%;
  }
}

@media (max-width: 550px) {
  .explanation {
    &-heading {
      width: 100%;
      font-size: 25px;
    }

    &-paragraph {
      width: 90%;
      font-size: 17px;
    }
  }
}
</style>
