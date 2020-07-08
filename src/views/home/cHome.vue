<template>
  <div class="home__content">
    <cWelcome />
    <cAbout
      :image="loveDouble"
      :reversed="false"
      textHeading="Курсы сделанные с любовью"
      textDescription="Структурированное обучение, десятки видеоуроков и интерактивных курсов сделанных для вас помогут вам в изучении программирования с нуля"
      route="/app/courses"
      buttonText="Подобрать курс"
    />
    <cAdvantages />
    <cAbout
      :image="meditation"
      :reversed="true"
      textHeading="Открой для себя новый мир"
      textDescription="Мы не только обучим вас всем современным технологиям в мире IT, но и расскажем почему эта сфера так важна в нашем мире"
      route="/app/courses"
      buttonText="Перейти к курсам"
    />
    <cMailing />
  </div>
</template>

<script>
import cWelcome from "@/components/home/cWelcome";
import cAbout from "@/components/home/cAbout";
import loveDouble from "@/assets/images/love.svg";

import cAdvantages from "@/components/home/cAdvantages";

import meditation from "@/assets/images/newWorld.svg";

import cMailing from "@/components/home/cMailing";

export default {
  data() {
    return {
      loveDouble: loveDouble,
      meditation: meditation
    };
  },

  components: {
    cWelcome,
    cAbout,
    cAdvantages,
    cMailing
  }
};
</script>

<style scoped>
.home__content {
  padding: 0.1px;
  width: 100%;
}
</style>
