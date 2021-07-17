<template>
  <div class="subscription">
    <h2 class="subscription-title">
      Подписка на доступ к
      <span class="subscription-title-green">интерактивам</span>
    </h2>
    <p class="subscription-text">
      Оформи подписку и получи доступ ко всем интерактивам Crepiks. Все
      интерактивы, которые появятся за время подписки, тоже доступны.
      <span @click="$emit('promocode-opened')" class="subscription-text-green"
        >Есть промокод?</span
      >
    </p>
    <div class="subscription-cards">
      <div
        class="subscription-card"
        @click="$emit('subscription-card-clicked', 1)"
      >
        <div>
          <h3 class="subscription-card-title">Подписка на 1 месяц</h3>
          <p class="subscription-card-text">
            Доступ ко всем интерактивам на платформе на 1 месяц
          </p>
        </div>
        <cButton class="subscription-button">5990 тг</cButton>
      </div>
      <div
        class="subscription-card subscription-card-main"
        @click="$emit('subscription-card-clicked', 3)"
      >
        <div>
          <h3 class="subscription-card-title subscription-card-title-main">
            Подписка на 3 месяца
          </h3>
          <p class="subscription-card-text subscription-card-text-main">
            Доступ ко всем интерактивам на платформе на 3 месяцa
          </p>
        </div>
        <cButton type="unsolid" class="subscription-button">9990 тг</cButton>
      </div>
      <div
        class="subscription-card"
        @click="$emit('subscription-card-clicked', 6)"
      >
        <div>
          <h3 class="subscription-card-title">Подписка на пол года</h3>
          <p class="subscription-card-text">
            Доступ ко всем интерактивам на платформе на 6 месяцев
          </p>
        </div>
        <cButton class="subscription-button">17990 тг</cButton>
      </div>
    </div>
  </div>
</template>

<script>
import cButton from "@/components/common/crepiks-button";

export default {
  components: {
    cButton
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
    font-size: 22px;
    line-height: 150%;
    color: $light-dark;
    width: 85%;
    margin-bottom: 30px;

    &-green {
      color: $primary;
      cursor: pointer;
      transition: 200ms ease-in-out;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  &-cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

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
      transform: scale(1.05);
    }

    &-main {
      background-color: $primary;
    }

    &-title {
      width: 80%;
      font-size: 24px;
      font-weight: 400;
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
  }
}
</style>
