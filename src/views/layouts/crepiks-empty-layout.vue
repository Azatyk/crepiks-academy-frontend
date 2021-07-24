<template>
  <div class="page">
    <div>
      <router-view></router-view>
    </div>
    <ad-page :is-modal-open="isAdBannerActive" @close-modal="closeAdBanner" />
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
import adPage from "@/components/common/crepiks-ad-page.vue";
import subscriptionSuccessModal from "@/components/subscription/crepiks-subscription-success-modal";

import { mapGetters } from "vuex";

export default {
  components: {
    "ad-page": adPage,
    subscriptionSuccessModal
  },

  computed: mapGetters(["isAdBannerActive", "isSubscriptionSuccessModalOpen"]),

  methods: {
    closeAdBanner() {
      this.$store.commit("setAdBanner", false);
    },
    routeToCourses() {
      this.$store.commit("setSubscriptionSuccessModal", false);
    }
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  min-height: 100vh;
  height: auto;
}
</style>
