<template>
  <div class="subscription-page">
    <notification
      :heading="notificationHeading"
      :text="notificationText"
      :status="notificationStatus"
      :isActive="isNotificationActive"
      @close-notification="isNotificationActive = false"
      @open-notification="isNotificationActive = true"
    />
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
    <transition name="introCard" appear>
      <subscriptionPage
        @subscription-card-clicked="subscriptionCardClicked"
        @promocode-opened="isPromocodeOpen = true"
        @open-transactions-block="isTransactionsOpen = true"
      />
    </transition>
    <!-- <transition name="paymentCard" v-else mode="out-in">
      <payment
        @open-transactions-block="isTransactionsOpen = true"
        :subscriptionPeriodProp="subscriptionPeriod"
      />
    </transition> -->
  </div>
</template>

<script>
import subscriptionPage from "@/components/subscription/crepiks-subscription-page";
import promocode from "@/components/subscription/crepiks-subscription-promocode";
// import payment from "@/components/subscription/crepiks-subscription-payment";
import transactions from "@/components/subscription/crepiks-subscription-transactions";
import profileLink from "@/components/profile-link/crepiks-profile-link";
import notification from "@/components/common/crepiks-notification";
import { setSubscription } from "@/requests/subscriptions";
import { mapGetters } from "vuex";

export default {
  components: {
    subscriptionPage,
    promocode,
    // payment,
    transactions,
    profileLink,
    notification
  },

  data() {
    return {
      notificationHeading: "",
      notificationText: "",
      notificationStatus: "",
      isNotificationActive: false,
      isPromocodeOpen: false,
      // payment: false,
      isTransactionsOpen: false
      // subscriptionPeriod: 3,
    };
  },

  created() {
    if (this.isMobile) this.payment = true;
  },

  computed: mapGetters(["isMobile", "userData"]),

  methods: {
    subscriptionCardClicked(subscriptionPeriod, currency) {
      let price;
      let subscriptionDays;

      if (currency == "RUB") {
        switch (subscriptionPeriod) {
          case 1:
            price = 1199;
            subscriptionDays = 30;
            break;
          case 3:
            price = 1899;
            subscriptionDays = 90;
            break;
          case 6:
            price = 3499;
            subscriptionDays = 180;
            break;
        }
      } else if (currency == "KZT") {
        switch (subscriptionPeriod) {
          case 1:
            price = 6990;
            subscriptionDays = 30;
            break;
          case 3:
            price = 10990;
            subscriptionDays = 90;
            break;
          case 6:
            price = 19990;
            subscriptionDays = 180;
            break;
        }
      }

      this.pay(price, currency, subscriptionDays);
    },

    pay(amount, currency, subscriptionDays) {
      let userId = this.userData.id;

      var widget = new window.cp.CloudPayments();
      widget.pay(
        "auth", // или 'charge'
        {
          publicId: "pk_5d2c51d3f8c784b79c51f227be4dd", //id из личного кабинета
          description: "Оплата подписки в crepiks.com", //назначение
          amount: amount, //сумма
          currency: currency, //валюта
          skin: "mini" //дизайн виджета (необязательно)
        },
        {
          onSuccess: () => {
            setSubscription(userId, { days: subscriptionDays })
              .then(() => {
                this.$store.commit("setAdSidebarLink", false);
                this.updateUserData();
                this.$store.commit("setSubscriptionSuccessModal", true);
              })
              .catch(() => {
                this.notificationHeading = "Что-то пошло не так";
                this.notificationText =
                  "Какие-то проблемы с подпиской. Попробуй перезагрузить страницу и если подписки не будет — напиши нам";
                this.notificationStatus = "error";
                this.isNotificationActive = true;
              });
          },
          onFail: function() {
            console.log("fail");
          }
          // onComplete: function(paymentResult, options) {
          // },
        }
      );
    },
    updateUserData() {
      this.$store.dispatch("getUserData", this.userData.id).then(res => {
        this.$store.commit("updateUserData", res.data.user);
      });
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

@media (max-width: 920px) {
  .subscription-page {
    height: fit-content;
    overflow: auto;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 13% 5%;
    box-sizing: border-box;
  }

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

@media (max-width: 760px) {
  .subscription-page {
    padding: 120px 5%;
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
  animation: longFadeIn 1s ease-in-out;
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
