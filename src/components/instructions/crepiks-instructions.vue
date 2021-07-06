<template>
  <modal :isModalOpen="isModalOpen" @close-modal="$emit('close-modal')">
    <div class="instructions-inner">
      <h2 class="instructions-heading">
        Добро пожаловать к нам,
        <span class="instructions-heading-green"
          >{{ userData.firstName }}!</span
        >
      </h2>
      <p class="instructions-paragraph">
        Как настроение? Готов начать изучение веб-программирования? Надеемся,
        что да, а пока, мы подготовили для тебя небольшую экскурсию по платформе
        в виде видео:
      </p>
      <div class="instructions-video"></div>
      <p class="instructions-paragraph">
        Отлично, ты готов(-а) начать! Если у тебя остались вопросы, взгляни на
        часто задаваемые или напиши нам в любую социальную сеть:
      </p>
      <div class="instructions-container">
        <faq v-for="(faq, index) in faqs" :key="index" :faq="faq" />
      </div>
      <p class="instructions-paragraph">
        Желаем продуктивного обучения и увидимся на интерактике!
      </p>
      <cButton class="instructions-button" @click="$emit('close-modal')"
        >К платформе</cButton
      >
    </div>
  </modal>
</template>

<script>
import modal from "@/components/common/crepiks-modal";
import faq from "@/components/common/crepiks-faq";
import cButton from "@/components/common/crepiks-button";

import { mapGetters } from "vuex";

export default {
  props: {
    isModalOpen: {
      type: Boolean,
      required: true
    }
  },
  components: {
    modal,
    faq,
    cButton
  },
  computed: mapGetters(["userData"]),
  data() {
    return {
      faqs: [
        {
          question: "Зачем мне всё это?",
          answer:
            "Быть программистом — круто. Раз ты тут, значит ты это понимаешь. Программирование буквально поможет поменять твою жизнь"
        },
        {
          question: "Как вернуть деньги?",
          answer:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, corporis quae itaque earum eaque, voluptates esse placeat porro cupiditate quibusdam deserunt odit perspiciatis officia sint. Ad omnis possimus blanditiis officiis."
        },
        {
          question: "Вы сохраняете мой код?",
          answer:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, corporis quae itaque earum eaque, voluptates esse placeat porro cupiditate quibusdam deserunt odit perspiciatis officia sint. Ad omnis possimus blanditiis officiis."
        },
        {
          question: "Что такое интерактив?",
          answer:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, corporis quae itaque earum eaque, voluptates esse placeat porro cupiditate quibusdam deserunt odit perspiciatis officia sint. Ad omnis possimus blanditiis officiis."
        },
        {
          question: "Как можно купить подписку?",
          answer:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, corporis quae itaque earum eaque, voluptates esse placeat porro cupiditate quibusdam deserunt odit perspiciatis officia sint. Ad omnis possimus blanditiis officiis."
        }
      ],
      currentFaq: -10
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.instructions {
  &-inner {
    width: 75%;
    margin-bottom: 80px;
  }

  &-heading {
    color: $dark;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;

    &-green {
      color: $primary;
    }
  }

  &-paragraph {
    color: $light-dark;
    font-size: 22px;
    line-height: 150%;
    margin-top: 30px;
  }

  &-video {
    height: 290px;
    width: 100%;
    background-color: #e1e1e1;
    border-radius: 10px;
    margin-top: 30px;
  }

  &-container {
    margin-top: 40px;
  }

  &-button {
    margin-top: 35px;
  }
}
</style>
