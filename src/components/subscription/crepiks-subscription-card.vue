<template>
  <div class="subscription-card">
    <div class="card-text">
      <h1 class="card-text-title">
        Получи доступ ко
        <span class="card-text-title-important">всем</span> курсам с подпиской
      </h1>
      <p class="card-text-description">
        Оформите подписку за 5000 тг и получите доступ ко всем курсам Crepiks на
        3 месяца
      </p>
      <div class="card-button-promocode">
        <cButton
          @click="$emit('subscription-button-clicked')"
          class="card-button"
          text="Оформить подписку"
        />
        <span @click="$emit('open-promocode')" class="card-promocode"
          >Есть промокод?</span
        >
      </div>
    </div>
    <img
      src="@/assets/images/subscription-courses-image.png"
      alt="Получите доступ ко всем курсам"
      class="card-image"
    />
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

.subscription-card {
  padding-right: 20px;
  width: 700px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.08);
}

.card-text {
  padding: 50px 0 50px 50px;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &-title {
    margin-bottom: 15px;
    color: $dark;
    font-size: 35px;
    font-weight: 600;

    &-important {
      color: $primary;
    }
  }

  &-description {
    margin-bottom: 25px;
    color: $dark;
    font-size: 20px;
    font-weight: 600;
    opacity: 0.8;
  }
}

.card-button-promocode {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.card {
  &-button {
    margin-right: 25px;
  }

  &-promocode {
    color: $primary;
    font-size: 18px;
    font-weight: 500;
    opacity: 0.7;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }

  &-image {
    height: 350px;
  }
}
</style>
