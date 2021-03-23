<template>
  <div>
    <div class="faq">
      <div class="faq-question" @click="handleQuestionClick">
        {{ faq.question }} <i class="bx bxs-chevron-down faq-down-arrow"></i>
      </div>
      <div class="faq-answer" v-show="isAnswerOpen">
        {{ faq.answer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    faq: {
      type: [Array, Object]
    }
  },
  data() {
    return {
      isAnswerOpen: false
    };
  },
  methods: {
    handleQuestionClick() {
      this.isAnswerOpen = !this.isAnswerOpen;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.faq {
  width: 100%;
  margin-top: 15px;

  &-question {
    width: 100%;
    height: 40px;
    padding: 10px 0;
    box-sizing: border-box;
    color: $dark;
    font-size: 20px;
    cursor: pointer;
    opacity: 0.8;
    transition: 200ms ease-in-out;
    user-select: none;
    position: relative;
  }

  &-question:hover {
    opacity: 1;
  }

  &-down-arrow {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 25px;
  }

  &-answer {
    width: 100%;
    padding: 10px 0;
    box-sizing: border-box;
    color: $light-dark;
    font-size: 20px;
  }
}
</style>
