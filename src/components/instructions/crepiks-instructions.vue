<template>
  <modal
    :isModalOpen="isModalOpen"
    :isCloseButtonHide="isMobile ? true : false"
    @close-modal="$emit('close-modal')"
  >
    <div class="instructions-inner">
      <h2 class="instructions-heading">
        Добро пожаловать к нам,
        <span class="instructions-heading-green"
          >{{ userData.firstName }}!</span
        >
      </h2>
      <p class="instructions-paragraph">
        Как настроение? Готов начать изучение веб-программирования? Надеемся,
        что да, ведь начать — это всегда непросто. Тем не менее, ты тут, прямо
        перед компьютером и готов начать делать что-то по-настоящему интересное
        и полезное.
      </p>
      <v-lazy-image
        class="instructions-image"
        :src="instructionsImage"
        alt="Добро пожаловать!"
      />
      <p class="instructions-paragraph">
        Мы подготовили платформу для обучения, с текстовой теорией и возможность
        сразу попрактиковаться в написании кода. Лови небольшой гид по платформе
        (Нажми на картинку):
      </p>
      <imageModal
        class="instructions-container-image"
        fileName="code-page-instruction.png"
      />
      <imageModal
        class="instructions-container-image"
        fileName="browser-page-instruction.png"
      />
      <p class="instructions-paragraph">
        Отлично, ты готов начать! Если у тебя остались вопросы, взгляни на часто
        задаваемые или напиши нам в любую социальную сеть:
      </p>
      <div class="instructions-container">
        <faq v-for="(faq, index) in faqs" :key="index" :faq="faq" />
      </div>
      <p class="instructions-paragraph">
        Желаем продуктивного обучения и увидимся на интерактиве!
      </p>
      <div>
        <cButton class="instructions-button" @click="$emit('close-modal')"
          >К платформе</cButton
        >
      </div>
    </div>
  </modal>
</template>

<script>
import modal from "@/components/common/crepiks-modal";
import faq from "@/components/common/crepiks-faq";
import cButton from "@/components/common/crepiks-button";
import imageModal from "@/components/common/crepiks-image-modal";
import VLazyImage from "v-lazy-image";

import instructionsImage from "@/assets/images/instructions-welcome-image.svg";

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
    cButton,
    imageModal,
    VLazyImage
  },

  computed: mapGetters(["userData", "isMobile"]),

  data() {
    return {
      faqs: [
        {
          question: "Что такое интерактив?",
          answer:
            "Интерактив — это обучающий материал, состоящий из текстовой теории с примерами кода, объяснением темы и возможностью попрактиковаться в написании кода. Ты читаешь текстовый материал, а потом пробуешь написать код по этой теме."
        },
        {
          question: "Кто проверяет мой код?",
          answer:
            "Автоматические тесты. Это специальный код, который проверяет твою работу и указывает на ошибки, если они есть. Тесты позволяют не ждать ответа от человека, а сразу переходить к следующим темам после выполнения."
        },
        {
          question: "Вы сохраняете мой код?",
          answer:
            "Нет. Более того, мы не заставляем проходить темы по очередности. Наверняка у тебя не получится запомнить всё с первого раза и возможность повторить нужную тему, снова выполнив задание очень важна."
        },
        {
          question: "А если мне было не понятно?",
          answer:
            "Тесты хоть и постараются объяснить твою ошибку, это всё же просто код, который проверяет код. Поэтому если ты столкнулся с нерешаемым тестом или не понимаешь, почему он решается именно так — напиши нам, и мы постараемся объяснить."
        }
      ],
      currentFaq: -10,
      instructionsImage: instructionsImage
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.instructions {
  &-inner {
    margin-bottom: 80px;
    width: 90%;
    display: flex;
    flex-direction: column;
  }

  &-heading {
    color: $dark;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;

    &-green {
      color: $primary;
    }
  }

  &-image {
    margin: 50px 0;
    width: 70%;
    align-self: center;
  }

  &-paragraph {
    margin-top: 30px;
    color: $dark;
    font-size: 22px;
    line-height: 190%;
    opacity: 0.85;
  }

  &-container-image {
    margin-top: 30px;
  }

  &-container {
    margin-top: 40px;
  }

  &-button {
    margin-top: 35px;
  }
}

@media (max-width: 414px) {
  .instructions {
    &-inner {
      width: 80%;
    }

    &-heading {
      font-size: 27px;
      margin-top: 70px;
    }

    &-paragraph {
      font-size: 18px;
    }
  }
}
</style>
