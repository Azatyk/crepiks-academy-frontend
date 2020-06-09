<template>
  <div class="page">
    <section class="intro">
      <cHeader class="header" pageType="common" />
      <cWelcome />
      <cAbout
        :image="loveDouble"
        :reversed="false"
        textHeading="Курсы сделанные с любовью"
        textDescription="Структурированное обучение, десятки видеоуроков и интерактивных курсов сделанных для вас помогут вам вм изучении программирования с нуля"
        route="/courses"
        buttonText="Подобрать курс"
      />
      <cAdvantages />
      <cAbout
        :image="meditation"
        :reversed="true"
        textHeading="Открой для себя новый мир"
        textDescription="Мы не только обучим вас всем современным технологиям в мире IT, но и расскажем почему эта сфера так важна в нашем мире"
        route="/courses"
        buttonText="Перейти к курсам"
      />
      <cMailing />
      <cFooter />
    </section>
  </div>
</template>

<script>
import cHeader from "@/components/general/cHeader";
import cWelcome from "./components/cWelcome";
import cAbout from "./components/cAbout";
import loveDouble from "@/assets/images/love.svg";

import cAdvantages from "./components/cAdvantages";

import meditation from "@/assets/images/newWorld.svg";

import cMailing from "./components/cMailing";

import cFooter from "@/components/general/cFooter";

export default {
  data() {
    return {
      loveDouble: loveDouble,
      meditation: meditation
    };
  },

  components: {
    cHeader,
    cWelcome,
    cAbout,
    cAdvantages,
    cMailing,
    cFooter
  }
};
</script>

<style scoped>
.header {
  background-color: #ffffff00;
}
</style>
