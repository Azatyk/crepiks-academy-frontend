<template>
  <div class="app-page">
    <sidebar @open-ad-page="isAdPageOpen = true" />
    <div class="app-page-content">
      <router-view></router-view>
    </div>
    <Logo class="logo" />
    <instructionsModal
      :isModalOpen="isInstructionsModalOpen"
      @close-modal="isInstructionsModalOpen = false"
    />
    <ad-page
      :is-modal-open="isAdPageOpen"
      @close-modal="isAdPageOpen = false"
    />
  </div>
</template>

<script>
import sidebar from "@/components/app-layout/crepiks-sidebar";
import Logo from "@/components/common/crepiks-logo.vue";
import instructionsModal from "@/components/instructions/crepiks-instructions.vue";
import adPage from "@/components/common/crepiks-ad-page.vue";

export default {
  components: {
    sidebar,
    Logo,
    instructionsModal,
    "ad-page": adPage
  },
  data() {
    return {
      isInstructionsModalOpen: false,
      isAdPageOpen: false
    };
  },
  methods: {
    openModal() {
      this.isInstructionsModalOpen = true;
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
