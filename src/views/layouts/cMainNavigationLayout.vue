<template>
  <div class="app__page">
    <cSidebar
      :isProfileOpenFromMainLayout="isProfileOpen"
      @close-profile="isProfileOpen = false"
    />
    <div class="app__content">
      <cHeader @open-profile="isProfileOpen = true" />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import cSidebar from "@/components/mainLayout/cSidebar";
import cHeader from "@/components/mainLayout/cHeader";

export default {
  components: {
    cSidebar,
    cHeader
  },
  data() {
    return {
      isProfileOpen: false
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.app {
  &__page {
    padding: 0.1px 0 80px;
    width: 100%;
    min-height: 100vh;
    height: auto;
    background-color: $color-3;
  }

  &__content {
    margin-left: 50px;
    padding: 0.1px;
    box-sizing: border-box;
    min-height: 100vh;
    height: 100%;
    width: calc(100% - 50px);
  }
}

.vs-select__input {
  font-size: 15px !important;
}

.vs-select__option {
  font-size: 15px;
}

@media (max-width: 1200px) {
  .vs-select__input {
    font-size: 20px !important;
  }

  .vs-select__option {
    font-size: 20px !important;
  }
}

@media (max-width: 1024px) {
  .vs-select__input {
    font-size: 16px !important;
  }

  .vs-select__option {
    font-size: 16px !important;
  }
}

@media (max-width: 650px) {
  .center {
    width: 45% !important;
  }

  .select-local {
    width: 40%;
  }

  .vs-select-content {
    width: 100% !important;
  }

  .vs-select {
    height: 35px !important;
    min-height: 35px !important;
  }

  .vs-select__input {
    height: 35px !important;
    min-height: 35px !important;
    font-size: 14px !important;
  }

  .vs-select__option {
    font-size: 14px !important;
  }
}
</style>
