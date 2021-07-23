<template>
  <div class="app-page">
    <sidebar />
    <div class="app-page-content">
      <router-view></router-view>
    </div>
    <instructionsModal
      :isModalOpen="isInstructionsModalOpen"
      @close-modal="isInstructionsModalOpen = false"
    />
    <ad-page :is-modal-open="isAdBannerOpen" @close-modal="closeAdBanner" />
    <transition name="fade" appear>
      <subscriptionSuccessModal
        v-if="isSubscriptionSuccessModalOpen"
        @close-modal="$store.commit('setSubscriptionSuccessModal', false)"
        @route-to-courses="routeToCourses"
      />
    </transition>
  </div>
</template>

<script>
import sidebar from "@/components/app-layout/crepiks-sidebar";
import instructionsModal from "@/components/instructions/crepiks-instructions.vue";
import adPage from "@/components/common/crepiks-ad-page.vue";
import subscriptionSuccessModal from "@/components/subscription/crepiks-subscription-success-modal";

import { mapGetters } from "vuex";

export default {
  components: {
    sidebar,
    instructionsModal,
    "ad-page": adPage,
    subscriptionSuccessModal
  },

  data() {
    return {
      isInstructionsModalOpen: true,
      isAdBannerOpen: false
    };
  },

  computed: mapGetters(["isAdBannerActive", "isSubscriptionSuccessModalOpen"]),

  methods: {
    openModal() {
      this.isInstructionsModalOpen = true;
    },
    closeAdBanner() {
      this.$store.commit("setAdBanner", false);
    },
    routeToCourses() {
      this.$store.commit("setSubscriptionSuccessModal", false);
      this.$router.push("/app/courses");
    }
  },

  mounted() {
    this.$root.$on("open-modal", () => {
      this.openModal();
    });
  },

  watch: {
    isAdBannerActive() {
      if (this.isAdBannerActive) {
        this.isAdBannerOpen = true;
      } else {
        this.isAdBannerOpen = false;
      }
    }
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

@media (max-width: 1024px) {
  .app-page {
    &-content {
      margin-left: 0;
      padding: 0;
      width: 100%;
    }
  }
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
