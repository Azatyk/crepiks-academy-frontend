<template>
  <div>
    <div class="faq">
      <div class="faq-question" @click="handleQuestionClick">
        {{ faq.question }} <i class="bx bxs-chevron-down faq-down-arrow"></i>
      </div>
      <div
        class="faq-answer"
        ref="myText"
        :style="[
          isAnswerOpen ? { height: computedHeight, paddingBottom: '10px' } : {}
        ]"
      >
        {{ faq.answer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    faq: {
      type: Object
    }
  },
  data() {
    return {
      isAnswerOpen: false,
      computedHeight: 0
    };
  },
  methods: {
    handleQuestionClick() {
      this.isAnswerOpen = !this.isAnswerOpen;
    },
    initHeight() {
      this.$refs["myText"].style.height = "auto";

      const height = getComputedStyle(this.$refs["myText"]).height;
      this.computedHeight = height;

      this.$refs["myText"].style.height = 0;
    }
  },
  mounted() {
    this.initHeight();
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.faq {
  width: 100%;
  margin-top: 10px;
  backgound-color: $white;

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
    margin-bottom: 5px;
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
    color: $light-dark;
    font-size: 20px;
    height: 0;
    overflow: hidden;
    transition: 500ms;
  }
}
</style>
