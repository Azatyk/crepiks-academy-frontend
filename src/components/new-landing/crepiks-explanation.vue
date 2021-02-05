<template>
  <div class="explanation">
    <h2 class="explanation-heading">Как проходит обучение?</h2>
    <p class="explanation-paragraph">
      Учитесь с помощью интерактивных курсов. Что это такое? Все просто, вы
      заходите на курс и проходите уроки с простой теорией и забавной практикой.
      Учитесь когда угодно и где угодно.
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
</template>

<script>
import cExplanationCard from "@/components/new-landing/crepiks-explanation-card.vue";
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

  &-heading {
    width: 100%;
    text-align: center;
    font-weight: 400;
    font-size: 35px;
    padding-top: 7vh;
  }

  &-paragraph {
    width: 80%;
    text-align: center;
    font-size: 20px;
    padding-top: 4vh;
    margin-right: auto;
    margin-left: auto;
    font-weight: lighter;
  }

  &-container {
    padding: 15vh 0;
  }

  &-card {
    margin-top: 10vh;
  }
}
</style>
