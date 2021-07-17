<template>
  <div class="subscription-page">
    <profileLink />
    <promocode
      :isOpen="isPromocodeOpen"
      @close-promocode-block="isPromocodeOpen = false"
    />
    <transactions
      :isOpen="isTransactionsOpen"
      @close-transactions-block="isTransactionsOpen = false"
    />
    <transition name="downLeft" appear>
      <div class="elipse elipse-dark-top"></div>
    </transition>
    <transition name="downRight" appear>
      <div class="elipse elipse-light-top"></div>
    </transition>
    <transition name="upLeft" appear>
      <div class="elipse elipse-light-bottom"></div>
    </transition>
    <transition name="upRight" appear>
      <div class="elipse elipse-dark-bottom"></div>
    </transition>
    <transition name="introCard" v-if="!this.payment" appear>
      <subscriptionCard
        @subscription-card-clicked="subscriptionCardClicked"
        @promocode-opened="isPromocodeOpen = true"
      />
    </transition>
    <transition name="paymentCard" v-else mode="out-in">
      <payment
        @open-transactions-block="isTransactionsOpen = true"
        :subscriptionPeriodProp="subscriptionPeriod"
      />
    </transition>
  </div>
</template>

<script>
import subscriptionCard from "@/components/subscription/crepiks-subscription-card";
import promocode from "@/components/subscription/crepiks-subscription-promocode";
import payment from "@/components/subscription/crepiks-subscription-payment";
import transactions from "@/components/subscription/crepiks-subscription-transactions";
import profileLink from "@/components/profile-link/crepiks-profile-link";
import { mapGetters } from "vuex";

export default {
  components: {
    subscriptionCard,
    promocode,
    payment,
    transactions,
    profileLink
  },

  data() {
    return {
      isPromocodeOpen: false,
      payment: false,
      isTransactionsOpen: false,
      subscriptionPeriod: 3
    };
  },

  created() {
    if (this.isMobile) this.payment = true;
  },

  computed: mapGetters(["isMobile"]),

  methods: {
    subscriptionCardClicked(subscriptionPeriod) {
      this.subscriptionPeriod = subscriptionPeriod;
      this.payment = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.subscription-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.elipse {
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  z-index: 2;

  &-light-top {
    bottom: 92%;
    right: 5%;
    opacity: 0.85;
    background-color: #25f9cf;
  }

  &-dark-top {
    bottom: 82%;
    right: -20%;
    background-color: $primary;
  }

  &-light-bottom {
    top: 88%;
    left: -20%;
    background-color: $primary;
  }

  &-dark-bottom {
    top: 95%;
    left: 5%;
    opacity: 0.85;
    background-color: #3ae8c5;
  }
}

@media (max-width: 800px) {
  .elipse {
    width: 400px;
    height: 400px;
    will-change: transform;
  }
}

@media (max-width: 414px) {
  .elipse {
    &-light-top {
      display: none;
    }

    &-dark-top {
      display: none;
    }

    &-light-bottom {
      display: none;
    }

    &-dark-bottom {
      display: none;
    }
  }
}

.downRight-enter-active,
.downRight-leave-active {
  transition: transform 1.7s ease-in-out;
  will-change: transform;
}

.downLeft-enter-active,
.downLeft-leave-active {
  transition: transform 1.5s ease-in-out;
}

.downRight-enter,
.downLeft-enter {
  -moz-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  -webkit-transform: translateY(-100%);
  -o-transform: translateY(-100%);
  transform: translateY(-100%);
}

.downRight-leave-to,
.downLeft-leave-to {
  transform: translateY(0);
}

.upRight-enter-active,
.upRight-leave-active {
  transition: transform 1.5s ease-in-out;
  will-change: transform;
}

.upLeft-enter-active,
.upLeft-leave-active {
  transition: transform 1.3s ease-in-out;
  will-change: transform;
}

.upRight-enter,
.upLeft-enter {
  -moz-transform: translateY(100%);
  -ms-transform: translateY(100%);
  -webkit-transform: translateY(100%);
  -o-transform: translateY(100%);
  transform: translateY(100%);
}

.upRight-leave-to,
.upLeft-leave-to {
  transform: translateY(0);
}

.paymentCard-enter-active,
.paymentCard-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.paymentCard-enter,
.paymentCard-leave-to {
  opacity: 0;
}

.introCard-enter-active {
  transition: opacity 1s ease-in-out;
  animation: longFadeIn 2s ease-in-out;
  will-change: opacity;
}

@keyframes longFadeIn {
  0% {
    opacity: 0;
  }

  70% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.introCard-leave-active {
  transition: opacity 1s ease-in-out;
  will-change: opacity;
}

.introCard-enter,
.introCard-leave-to {
  opacity: 0;
}
</style>
