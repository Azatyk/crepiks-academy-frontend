<template>
  <div class="landing__how">
    <h2 class="how__heading">Как это проходит?</h2>
    <div class="how__cards">
      <cHowCard
        :path="firstStepImage"
        heading="Авторизуйтесь"
        description="Войдите в аккаунт или создайте новый аккаунт. Всего 2 минуты и вы в деле!"
      />
      <cHowCard
        :path="secondStepImage"
        heading="Пройдите курс"
        description="Выберите подходящий для вас курс и пройдите веселые, интерактивные уроки"
      />
      <cHowCard
        :path="thirdStepImage"
        heading="Станьте программистом"
        description="Используйте полученые навыки, чтобы получить работу востребованного разработчика"
      />
    </div>
  </div>
</template>

<script>
import cHowCard from "@/components/landing/cHowCard";

import firstImage from "@/assets/images/firstStep.svg";
import secondImage from "@/assets/images/secondStep.svg";
import thirdImage from "@/assets/images/thirdStep.svg";

export default {
  components: {
    cHowCard
  },
  data() {
    return {
      firstStepImage: firstImage,
      secondStepImage: secondImage,
      thirdStepImage: thirdImage
    };
  }
};
</script>

<style scoped>
.landing__how {
  margin-top: 200px;
  padding-bottom: 170px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.how__heading {
  margin-bottom: 60px;
  font-size: 3.5vw;
  color: #2522a0;
}

.how__cards {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
