<template>
  <div class="app-page">
    <sidebar />
    <div class="app-page-content">
      <router-view></router-view>
    </div>
    <Logo class="logo" />
    <modal :isModalOpen="isModalOpen" @modal-closed="isModalOpen = false">
      <h2 class="modal-heading">
        Добро пожаловать на платформу
        <span class="modal-heading-green">Crepiks</span>
      </h2>
      <p class="modal-paragraph">
        Перед тем как начать обучение, давайте познакомимся с платформой.
        Специально для вас мы подготовили видео, в котором подробно показано как
        надо проходить курсы.
      </p>
      <div
        v-for="(item, index) in faqs"
        class="faq"
        :key="index"
        @click="faqTrigger(index)"
        :class="{ 'faq-ext-active': currentFaq === index }"
      >
        <div class="faq-question">
          {{ item.question }} <i class="bx bxs-chevron-down faq-down-arrow"></i>
        </div>
        <transition
          mode="out-in"
          name="faq-fade"
          @before-enter="beforeEnterFaq"
          @enter="enterFaq"
        >
          <div class="faq-answer" v-show="currentFaq === index">
            {{ item.answer }}
          </div>
        </transition>
      </div>
    </modal>
  </div>
</template>

<script>
import sidebar from "@/components/app-layout/crepiks-sidebar";
import Logo from "@/components/common/crepiks-logo.vue";
import modal from "@/components/common/crepiks-modal";

export default {
  components: {
    sidebar,
    Logo,
    modal
  },
  data() {
    return {
      isModalOpen: false,
      faqs: [
        {
          question: "Lorem ipsum dolor, sit amet consectetur adipisicing?",
          answer:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, corporis quae itaque earum eaque, voluptates esse placeat porro cupiditate quibusdam deserunt odit perspiciatis officia sint. Ad omnis possimus blanditiis officiis."
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
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    faqTrigger: function(newFaq) {
      if (newFaq === this.currentFaq) {
        this.currentFaq = -10;
      } else {
        this.currentFaq = newFaq;
      }
    },
    beforeEnterFaq: function(faq) {
      faq.style.display = "block";
      faq.style.maxHeight = null;
      faq.myHeight = faq.offsetHeight;
      faq.style.maxHeight = 0;
      faq.style.display = null;
    },
    enterFaq: function(faq) {
      faq.style.maxHeight = faq.myHeight + "px";
    }
  },
  mounted() {
    this.$root.$on("open-modal", () => {
      this.openModal();
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.app-page {
  width: 100%;
  min-height: 100vh;
  background-color: $background;

  &-content {
    margin-left: 300px;
    width: calc(100% - 300px);
  }
}

.logo {
  display: none;
}

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

@keyframes accordeonAni {
  0% {
    max-height: 0;
  }
}

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

.faq-fade {
  &-enter {
    max-height: 0;
    display: block;
  }

  &-enter-active {
    animation: accordeonAni 400ms ease-out;
    overflow: hidden;
  }

  &-leave {
    display: block;
  }

  &-leave-to {
    display: block;
  }

  &-leave-active {
    animation: accordeonAni 400ms ease-out;
    animation-direction: reverse;
    overflow: hidden;
  }
}

@media (max-width: 1024px) {
  .app-page {
    &-content {
      margin-left: 0;
      padding: 0;
      width: 100%;
    }
  }

  .logo {
    display: block;
    position: absolute;
    left: 5%;
    top: 50px;
    width: 100px;
  }
}

@media (max-width: 414px) {
  .logo {
    top: 30px;
    opacity: 0.75;
  }
}

@media (max-width: 374px) {
  .logo {
    top: 25px;
  }
}
</style>
