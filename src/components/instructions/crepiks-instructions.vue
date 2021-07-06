<template>
  <modal :isModalOpen="isModalOpen" @close-modal="$emit('close-modal')">
    <h2 class="modal-heading">
      Добро пожаловать на платформу
      <span class="modal-heading-green">Crepiks</span>
    </h2>
    <p class="modal-paragraph">
      Перед тем как начать обучение, давайте познакомимся с платформой.
      Специально для вас мы подготовили видео, в котором подробно показано как
      надо проходить курсы.
    </p>
    <faq v-for="(faq, index) in faqs" :key="index" :faq="faq" />
  </modal>
</template>

<script>
import modal from "@/components/common/crepiks-modal";
import faq from "@/components/common/crepiks-faq";

export default {
  props: {
    isModalOpen: {
      type: Boolean,
      required: true
    }
  },
  components: {
    modal,
    faq
  },
  data() {
    return {
      faqs: [
        {
          question: "Lorem ipsum dolor, sit amet consectetur adipisicing?",
          answer:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, corporis quae itaque earum eaque, voluptates esse placeat porro cupiditate quibusdam deserunt odit perspiciatis officia sint. Ad omnis possimus blanditiis officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, corporis quae itaque earum eaque, voluptates esse placeat porro cupiditate quibusdam deserunt odit perspiciatis officia sint. Ad omnis possimus blanditiis officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, corporis quae itaque earum eaque, voluptates esse placeat porro cupiditate quibusdam deserunt odit perspiciatis officia sint. Ad omnis possimus blanditiis officiis."
        },
        {
          question: "Lorem ipsum dolor, sit amet consectetur adipisicing?",
          answer:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, corporis quae itaque earum eaque, voluptates esse placeat porro cupiditate quibusdam deserunt odit perspiciatis officia sint. Ad omnis possimus blanditiis officiis."
        },
        {
          question: "Lorem ipsum dolor, sit amet consectetur adipisicing?",
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

.modal {
  &-heading {
    color: $dark;
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 30px;

    &-green {
      color: $primary;
    }
  }

  &-paragraph {
    color: $dark;
    font-size: 20px;
    line-height: 150%;
  }
}
</style>
