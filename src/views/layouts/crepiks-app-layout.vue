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
      <faq :faq="faq" v-for="(faq, index) in faqs" :key="index" />
    </modal>
  </div>
</template>

<script>
import sidebar from "@/components/app-layout/crepiks-sidebar";
import Logo from "@/components/common/crepiks-logo.vue";
import modal from "@/components/common/crepiks-modal";
import faq from "@/components/common/crepiks-faq";

export default {
  components: {
    sidebar,
    Logo,
    modal,
    faq
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
      ]
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
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
