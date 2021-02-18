<template>
  <div class="payment">
    <div class="payment-front">
      <div class="payment-text">
        <div class="payment-heading">Оплата подписки на месяц</div>
        <div class="payment-paragraph">
          Приобретая подписку на платформе Crepiks за 5000 тг вы получаете
          доступ ко всем курсам на платформе на один месяц
        </div>
        <div class="payment-paragraph">
          Оформляя подписку вы соглашаетесь с
          <span class="payment-paragraph-green">условиями транзакций</span>
        </div>
        <cButton class="payment-button" text="Оплатить 5000тг" />
      </div>
      <div class="payment-card">
        <cInput title="Номер карты" placeholder="0000 0000 0000 0000" />
        <cInput title="Имя на карте" placeholder="Введите имя на карте" />
        <div class="payment-card-container">
          <cInput class="payment-card-input" title="Месяц" placeholder="XX" />
          <span class="payment-card-sign">/</span>
          <cInput class="payment-card-input" title="Год" placeholder="YY" />
        </div>
      </div>
    </div>
    <div class="payment-back">
      <div class="payment-back-line"></div>
      <div class="payment-back-block">
        <cInput class="payment-back-input" title="CVC/CVV" placeholder="XXX" />
        <div class="payment-back-text">Цифры на обратной стороне карты</div>
      </div>
    </div>
  </div>
</template>

<script>
import cButton from "@/components/common/crepiks-button";
import cInput from "@/components/common/crepiks-input";

export default {
  components: {
    cButton,
    cInput
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.payment {
  position: relative;
  width: 700px;
  height: 350px;

  &-front {
    position: absolute;
    width: 80%;
    height: 90%;
    box-sizing: border-box;
    background-color: $white;
    border-radius: 30px;
    box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.75);
    display: flex;
    padding: 30px 40px;
    justify-content: space-between;
    z-index: 1;
  }

  &-text {
    height: 100%;
    width: 48%;
    display: flex;
    flex-direction: column;
  }

  &-heading {
    font-size: 25px;
    font-weight: 500;
    color: $dark;
    margin: 0;
  }

  &-paragraph {
    font-size: 12px;
    color: $dark;
    opacity: 0.8;
    margin-top: 10px;

    &-green {
      color: $primary;
      cursor: pointer;
    }

    &-green:hover {
      opacity: 0.8;
    }
  }

  &-button {
    width: 100%;
    margin-top: auto;
  }

  &-card {
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &-input {
      width: 40%;
    }

    &-sign {
      margin-bottom: 2px;
      font-size: 25px;
      color: $light-dark;
    }
  }

  &-back {
    position: absolute;
    width: 80%;
    height: 90%;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.75);
    align-items: flex-end;

    &-line {
      width: 100%;
      height: 30%;
      background-color: $primary;
      margin-top: 40px;
    }

    &-block {
      width: 20%;
      margin-right: 10px;
      margin-top: 30px;
    }

    &-input {
      width: 80%;
    }

    &-text {
      font-size: 10px;
      color: $light-dark;
      margin-top: 5px;
    }
  }
}
</style>
