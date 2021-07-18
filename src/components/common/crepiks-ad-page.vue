<template>
  <modal :is-modal-open="isModalOpen" @close-modal="$emit('close-modal')">
    <div class="ad-page">
      <img
        src="@/assets/images/part-course-ad-image.png"
        alt="Азамат: Изучишь основы, а что дальше?"
        class="ad-page__image"
      />
      <h2 class="ad-page__title">Азамат дело говорит, а что дальше?</h2>
      <p class="ad-page__description">
        Дальше — больше. Первый интерактив расскажет тебе об основах вёрстки
        сайтов, но дальше нужен более продвинутый уровень.
      </p>
      <p class="ad-page__description">
        Можно попробовать писать код наугад в надежде, что он сработает и ты
        изучишь что-то новое, можно попробовать искать уроки в гугле или на
        ютубе, ну или
        <span class="ad-page__bold"
          >попробуй интерактив «<i>Продвинутая верстка сайтов</i>»</span
        >, чтобы изучить верстку быстро и структурировано.
      </p>
      <p class="ad-page__description ad-page__important">
        Давай так, оформи подписку на месяц до того, как ты закончишь первый
        интерактив и получи скидку
      </p>
      <div class="ad-page__discount">-10%</div>
      <div class="ad-page__subscription-cards">
        <subscriptionCard
          v-for="(card, index) in cards"
          :key="index"
          :subscriptionPeriod="card.period"
          :subscriptionPrice="card.price"
          :main="card.main"
          @subscription-card-clicked="subscriptionCardClicked"
        />
      </div>
    </div>
  </modal>
</template>

<script>
import modal from "@/components/common/crepiks-modal.vue";
import subscriptionCard from "@/components/subscription/crepiks-subscription-card";

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
    subscriptionCard
  },

  data() {
    return {
      cards: [
        {
          period: 1,
          price: 5990,
          main: false
        },
        {
          period: 3,
          price: 9390,
          main: true
        },
        {
          period: 6,
          price: 16990,
          main: false
        }
      ]
    };
  },

  computed: mapGetters(["userData"]),

  methods: {
    subscriptionCardClicked(subscriptionPeriod) {
      let price;
      let subscriptionDays;

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

      this.pay(price, subscriptionDays);
    },

    pay(amount, subscriptionDays) {
      let userId = this.userData.id;

      var widget = new window.cp.CloudPayments();
      widget.pay(
        "auth", // или 'charge'
        {
          publicId: "pk_5d2c51d3f8c784b79c51f227be4dd", //id из личного кабинета
          description: "Оплата подписки в crepiks.com", //назначение
          amount: amount, //сумма
          currency: "KZT", //валюта
          skin: "mini" //дизайн виджета (необязательно)
        },
        {
          onSuccess: function() {
            setSubscription(userId, { days: subscriptionDays })
              .then(res => console.log(res))
              .catch(err => console.log(err));
          },
          onFail: function() {
            console.log("fail");
          }
          // onComplete: function(paymentResult, options) {
          // },
        }
      );
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

  &__subscription-cards {
    margin-left: -100px;
    width: 820px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
