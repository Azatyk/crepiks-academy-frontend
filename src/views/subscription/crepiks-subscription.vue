<template>
  <div class="subscription-page">
    <promocode
      :isOpen="isPromocodeOpen"
      @close-promocode-block="isPromocodeOpen = false"
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
    <transition name="card" appear>
      <subscriptionCard
        @subscription-button-clicked="payment = true"
        v-if="!this.payment"
        @promocode-opened="isPromocodeOpen = true"
      />
    </transition>
    <transition name="card" appear>
      <payment v-if="this.payment" />
    </transition>
  </div>
</template>

<script>
import subscriptionCard from "@/components/subscription/crepiks-subscription-card";
import promocode from "@/components/subscription/crepiks-subscription-promocode";
import payment from "@/components/subscription/crepiks-subscription-payment";

export default {
  components: {
    subscriptionCard,
    promocode,
    payment
  },

  data() {
    return {
      isPromocodeOpen: false,
      payment: false
    };
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
    bottom: 85%;
    right: 5%;
    background-color: #25f9cf;
  }

  &-dark-top {
    bottom: 75%;
    right: -20%;
    background-color: #3ae8c5;
  }

  &-light-bottom {
    top: 75%;
    left: -20%;
    background-color: #25f9cf;
  }

  &-dark-bottom {
    top: 85%;
    left: 5%;
    background-color: #3ae8c5;
  }
}

@media (max-width: 800px) {
  .elipse {
    width: 400px;
    height: 400px;
    will-change: transform;

    &-light-top {
      top: -50%;
      right: -10%;
      background-color: #25f9cf;
    }

    &-dark-top {
      top: -40%;
      right: -35%;
      background-color: #3ae8c5;
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

.card-enter-active,
.card-leave-active {
  transition: opacity 1s ease-in-out;
  animation: fadeIn 2s ease-in-out;
  will-change: opacity;
}

@keyframes fadeIn {
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

.card-enter,
.card-leave-to {
  opacity: 0;
}
</style>
