<template>
  <div>
    <div class="faq">
      <div class="faq-question" @click="handleQuestionClick">
        {{ faq.question }} <i class="bx bxs-chevron-down faq-down-arrow"></i>
      </div>
      <transition name="fade">
        <div class="faq-answer" v-if="isAnswerOpen">
          {{ faq.answer }}
        </div>
      </transition>
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
    top: 20%;
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

.fade-enter-active {
  transition: opacity 1000ms;
}

.fade-leave-active {
  transition: opacity 500ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
