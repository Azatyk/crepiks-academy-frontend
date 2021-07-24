<template>
  <div class="subscription">
    <h2 class="subscription-title">
      Подписка на доступ к<br />
      <span class="subscription-title-green">интерактивам</span>
    </h2>
    <p class="subscription-text">
      Оформи подписку и получи доступ ко всем интерактивам Crepiks. Все
      интерактивы, которые появятся за время подписки, тоже доступны.<br />
      <!-- <span @click="$emit('promocode-opened')" class="subscription-text-green"
        >Есть промокод?</span
      >  -->С условиями транзакций можно ознакомится
      <span
        class="subscription-text-green"
        @click="$emit('open-transactions-block')"
        >здесь</span
      >.
    </p>
    <div class="subscription-cards">
      <subscriptionCard
        v-for="(card, index) in cards"
        :key="index"
        :subscriptionPeriod="card.period"
        :subscriptionPrice="card.price"
        :main="card.main"
        @subscription-card-clicked="$emit('subscription-card-clicked', $event)"
      />
    </div>
  </div>
</template>

<script>
import subscriptionCard from "@/components/subscription/crepiks-subscription-card";
export default {
  components: {
    subscriptionCard
  },
  data() {
    return {
      cards: [
        {
          period: 1,
          price: 6990,
          main: false
        },
        {
          period: 3,
          price: 10990,
          main: true
        },
        {
          period: 6,
          price: 19990,
          main: false
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.subscription {
  width: 75%;

  &-title {
    font-size: 47px;
    line-height: 109.34%;
    color: $dark;
    margin-bottom: 15px;

    &-green {
      color: $primary;
    }
  }

  &-text {
    margin-bottom: 30px;
    width: 85%;
    color: $light-dark;
    font-size: 20px;
    line-height: 160%;
    opacity: 0.8;

    &-green {
      color: $primary;
      cursor: pointer;
      transition: 200ms ease-in-out;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  &-cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

@media (max-width: 1320px) {
  .subscription {
    width: 90%;

    &-title {
      font-size: 40px;
    }

    &-text {
      font-size: 19px;
    }
  }
}

@media (max-width: 1024px) {
  .subscription {
    width: 75%;

    &-title {
      font-size: 40px;
    }

    &-text {
      font-size: 19px;
    }
  }
}

@media (max-width: 920px) {
  .subscription {
    width: 100%;

    &-cards {
      flex-direction: column;
    }
  }
}

@media (max-width: 760px) {
  .subscription {
    &-title {
      font-size: 32px;
    }

    &-text {
      font-size: 16px;
    }
  }
}
</style>
