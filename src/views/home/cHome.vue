<template>
  <div class="page">
    <cHeader class="header" pageType="common" colorType="light" />
    <cWelcome />
    <cAbout
      :image="loveDouble"
      :reversed="false"
      textHeading="Курсы сделанные с любовью"
      textDescription="Структурированное обучение, десятки видеоуроков и интерактивных курсов сделанных для вас помогут вам в изучении программирования с нуля"
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
  </div>
</template>

<script>
import cHeader from "@/components/common/cHeader";
import cWelcome from "@/components/home/cWelcome";
import cAbout from "@/components/home/cAbout";
import loveDouble from "@/assets/images/love.svg";

import cAdvantages from "@/components/home/cAdvantages";

import meditation from "@/assets/images/newWorld.svg";

import cMailing from "@/components/home/cMailing";

import cFooter from "@/components/common/cFooter";

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
.page {
  width: 100%;
}

.header {
  background-color: #ffffff00;
}
</style>
