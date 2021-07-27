<template>
  <modal :is-modal-open="isModalOpen" @close-modal="$emit('close-modal')">
    <notification
      :heading="notificationHeading"
      :text="notificationText"
      :status="notificationStatus"
      :isActive="isNotificationActive"
      @close-notification="isNotificationActive = false"
      @open-notification="isNotificationActive = true"
    />
    <div class="ad-page">
      <v-lazy-image
        class="ad-page__image"
        :src="adImage"
        alt="Азамат: Изучишь основы, а что дальше?"
      />
      <h2 class="ad-page__title">Берёт Азамат, бери и ты</h2>
      <p class="ad-page__description">
        Ты и так уже знаешь о подписке. Оформишь её и все активные интерактивы и
        те, которые выйдут за время подписки будут тебе доступны.
      </p>
      <p class="ad-page__description">
        Можно попробовать писать код наугад в надежде, что он сработает и ты
        изучишь что-то новое, можно попробовать искать уроки в гугле или на
        ютубе, ну или
        <span class="ad-page__bold"
          >изучи основы верстки быстро и структурировано на первом
          интерактиве.</span
        >
      </p>
      <p class="ad-page__description ad-page__important">
        Давай так, оформи подписку сейчас и лови скидку
      </p>
      <div class="ad-page__discount">-15%</div>
      <div class="ad-page__currency-wrapper">
        <span
          class="ad-page__currency"
          :class="{ 'ad-page__currency-active': currency == 'RUB' }"
          @click="currency = 'RUB'"
          >RUB</span
        >
        <span
          class="ad-page__currency"
          :class="{ 'ad-page__currency-active': currency == 'KZT' }"
          @click="currency = 'KZT'"
          >KZT</span
        >
      </div>
      <div class="ad-page__subscription-cards">
        <subscriptionCard
          class="ad-page__subscription-card"
          v-for="(card, index) in cards"
          :key="index"
          :card="card"
          :currency="currency"
          @subscription-card-clicked="subscriptionCardClicked"
        />
      </div>
    </div>
  </modal>
</template>

<script>
import modal from "@/components/common/crepiks-modal.vue";
import subscriptionCard from "@/components/subscription/crepiks-subscription-card";
import VLazyImage from "v-lazy-image";
import adImage from "@/assets/images/part-course-ad-image.png";
import notification from "@/components/common/crepiks-notification";

import { setSubscription } from "@/requests/subscriptions";
import { mapGetters } from "vuex";

export default {
  props: {
    isModalOpen: {
      type: Boolean,
      required: true
    }
  },

  components: {
    modal,
    subscriptionCard,
    VLazyImage,
    notification
  },

  data() {
    return {
      notificationHeading: "",
      notificationText: "",
      notificationStatus: "",
      isNotificationActive: false,
      currency: "RUB",
      cards: [
        {
          period: 1,
          priceRUB: "999 ₽",
          withoutDiscountPriceRUB: "1199 ₽",
          priceKZT: "5990 тг",
          withoutDiscountPriceKZT: "6990 тг",
          main: false
        },
        {
          period: 3,
          priceRUB: "1599 ₽",
          withoutDiscountPriceRUB: "1899 ₽",
          priceKZT: "9390 тг",
          withoutDiscountPriceKZT: "10990 ₽",
          main: true
        },
        {
          period: 6,
          priceRUB: "2999 ₽",
          withoutDiscountPriceRUB: "3499 ₽",
          priceKZT: "16990 тг",
          withoutDiscountPriceKZT: "19990 ₽",
          main: false
        }
      ],
      adImage: adImage
    };
  },

  computed: mapGetters(["userData"]),

  methods: {
    subscriptionCardClicked(subscriptionPeriod) {
      let price;
      let subscriptionDays;

      if (this.currency == "RUB") {
        switch (subscriptionPeriod) {
          case 1:
            price = 999;
            subscriptionDays = 30;
            break;
          case 3:
            price = 1599;
            subscriptionDays = 90;
            break;
          case 6:
            price = 2999;
            subscriptionDays = 180;
            break;
        }
      } else if (this.currency == "KZT") {
        switch (subscriptionPeriod) {
          case 1:
            price = 5990;
            subscriptionDays = 30;
            break;
          case 3:
            price = 9390;
            subscriptionDays = 90;
            break;
          case 6:
            price = 16990;
            subscriptionDays = 180;
            break;
        }
      }

      this.pay(price, this.currency, subscriptionDays);
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
                this.$store.commit("setAdBanner", false);
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

.ad-page {
  margin: auto;
  width: 80%;
  display: flex;
  flex-direction: column;

  &__image {
    margin-bottom: 80px;
    width: 100%;
    height: auto;
  }

  &__title {
    margin-bottom: 30px;
    color: $dark;
    font-size: 28px;
    font-weight: 500;
    opacity: 0.8;
  }

  &__description {
    margin-bottom: 20px;
    color: $dark;
    font-size: 22px;
    line-height: 170%;
    opacity: 0.7;
  }

  &__bold {
    font-weight: bold;
  }

  &__important {
    margin: 30px 0;
    color: $primary;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    line-height: 160%;
  }

  &__discount {
    margin-right: 30px;
    margin-bottom: 60px;
    color: $primary;
    font-size: 200px;
    font-weight: bold;
    text-align: center;
    opacity: 0.5;
  }

  &__subscription {
    &-cards {
      margin-left: -100px;
      width: 820px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-card {
      width: 255px;
    }
  }

  &__currency {
    color: $dark;
    margin-right: 10px;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.8;
    }

    &-wrapper {
      margin-left: -100px;
      margin-bottom: 20px;
    }

    &-active {
      color: $primary;
      text-decoration: underline;
    }
  }
}
</style>
