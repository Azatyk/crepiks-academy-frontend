<template>
  <div
    class="subscription-card"
    :class="{ 'subscription-card-main': card.main }"
    @click="$emit('subscription-card-clicked', card.period)"
  >
    <div>
      <h3
        class="subscription-card-title"
        :class="{ 'subscription-card-title-main': card.main }"
      >
        Подписка на {{ subscriptionPeriodText }}
      </h3>
      <p
        class="subscription-card-text"
        :class="{ 'subscription-card-text-main': card.main }"
      >
        Доступ ко всем интерактивам на платформе на
        {{ card.subscriptionPeriodText }}
      </p>
    </div>
    <p v-if="withoutDiscountPrice" class="subscription-card-price-original">
      {{ withoutDiscountPrice }}
    </p>
    <cButton
      class="subscription-button"
      :type="card.main ? 'unsolid' : 'solid'"
      >{{ price }}</cButton
    >
  </div>
</template>

<script>
import cButton from "@/components/common/crepiks-button.vue";

export default {
  components: {
    cButton
  },

  data() {
    return {
      subscriptionPeriodText: "",
      price: "",
      withoutDiscountPrice: ""
    };
  },

  props: {
    card: {
      type: Object
    },
    currency: {
      type: String,
      default: "RUB"
    }
  },

  mounted() {
    if (this.card.period == 1) {
      this.subscriptionPeriodText = "1 месяц";
    } else if (this.card.period == 3) {
      this.subscriptionPeriodText = "3 месяца";
    } else if (this.card.period == 6) {
      this.subscriptionPeriodText = "6 месяцев";
    }

    this.price = this.card.priceRUB;
    this.withoutDiscountPrice = this.card.withoutDiscountPriceRUB;
  },

  watch: {
    currency() {
      if (this.currency == "RUB") {
        this.price = this.card.priceRUB;
        this.withoutDiscountPrice = this.card.withoutDiscountPriceRUB;
      } else if (this.currency == "KZT") {
        this.price = this.card.priceKZT;
        this.withoutDiscountPrice = this.card.withoutDiscountPriceKZT;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.subscription {
  &-card {
    width: 240px;
    height: 300px;
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: $white;
    box-shadow: 0px 0px 20px rgba(60, 60, 60, 0.07);
    border-radius: 15px;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      transform: scale(1.03);
    }

    &-main {
      background-color: $primary;
    }

    &-title {
      width: 80%;
      font-size: 24px;
      font-weight: 600;
      line-height: 130%;
      margin-bottom: 10px;
      color: $dark;

      &-main {
        color: $white;
      }
    }

    &-text {
      width: 75%;
      font-size: 16px;
      line-height: 130%;
      color: $light-dark;

      &-main {
        color: $white;
      }
    }

    &-price-original {
      color: $light-dark;
      text-decoration: line-through;
      text-decoration-color: red;
      text-decoration-thickness: 2px;
    }
  }
}

@media (max-width: 1320px) {
  .subscription {
    &-card {
      width: 210px;
      height: 260px;

      &-title {
        font-size: 20px;
      }

      &-text {
        font-size: 12px;
      }
    }
  }
}

@media (max-width: 920px) {
  .subscription {
    &-card {
      width: 100%;
      margin-top: 20px;

      &-title {
        font-size: 23px;
      }

      &-text {
        font-size: 15px;
      }
    }
  }
}
</style>
