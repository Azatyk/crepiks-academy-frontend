<template>
  <div class="payment">
    <notification
      :isActive="isNotificationOpen"
      :heading="notificationHeading"
      :text="notificationText"
      @close-notification="isNotificationOpen = false"
      status="error"
    />
    <div class="payment-front">
      <div class="payment-text">
        <div class="payment-heading">Оплата подписки на месяц</div>
        <div class="payment-paragraph">
          Приобретая подписку на платформе Crepiks за 5000 тг вы получаете
          доступ ко всем курсам на платформе на один месяц
        </div>
        <div class="payment-paragraph">
          Оформляя подписку вы соглашаетесь с
          <span
            class="payment-paragraph-green"
            @click="$emit('open-transactions-block')"
            >условиями транзакций</span
          >
        </div>
        <cButton class="payment-button" text="Оплатить 5000тг" @click="pay" />
      </div>
      <div class="payment-card">
        <cInput
          v-mask="'#### #### #### ####'"
          v-model="cardNumber"
          title="Номер карты"
          placeholder="0000 0000 0000 0000"
        />
        <cInput
          v-model="cardName"
          title="Имя на карте"
          placeholder="Введите имя на карте"
        />
        <!-- <input type="text" @input="handleInput"> -->
        <div class="payment-card-container">
          <cInput
            class="payment-card-input"
            v-mask="'##'"
            v-model="cardMonth"
            title="Месяц"
            placeholder="XX"
          />
          <span class="payment-card-sign">/</span>
          <cInput
            class="payment-card-input"
            v-mask="'##'"
            v-model="cardYear"
            title="Год"
            placeholder="YY"
          />
        </div>
      </div>
    </div>
    <div class="payment-back">
      <div class="payment-back-line"></div>
      <div class="payment-back-block">
        <cInput
          class="payment-back-input"
          v-mask="'###'"
          v-model="cardCvc"
          title="CVC/CVV"
          placeholder="XXX"
        />
        <div class="payment-back-text">Цифры на обратной стороне карты</div>
      </div>
    </div>
  </div>
</template>

<script>
import cButton from "@/components/common/crepiks-button";
import cInput from "@/components/common/crepiks-input";
import notification from "@/components/common/crepiks-notification";

export default {
  components: {
    cButton,
    cInput,
    notification
  },
  data() {
    return {
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
      cardCvc: "",
      cardName: "",
      isNotificationOpen: false,
      notificationHeading: "",
      notificationText: ""
    };
  },
  watch: {
    cardName() {
      this.cardName = event.target.value.toUpperCase();
    }
  },
  methods: {
    pay() {
      if (
        !this.cardName.trim() ||
        !this.cardMonth.trim() ||
        !this.cardYear.trim() ||
        !this.cardCvc.trim() ||
        !this.cardNumber.trim()
      ) {
        this.isNotificationOpen = true;
        this.notificationHeading = "Заполните все поля";
        this.notificationText = "Необходимо заполнить каждое поле";
      }
    }

    // handleInput() {}
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
    border-radius: 20px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.08);
    display: flex;
    padding: 30px;
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
    font-size: 27px;
    font-weight: 500;
    color: $dark;
    margin: 0;
  }

  &-paragraph {
    font-size: 13px;
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
      margin-bottom: 8px;
      font-size: 25px;
      color: $light-dark;
      opacity: 0.7;
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
    border-radius: 20px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.08);
    align-items: flex-end;
    background-color: $white;

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
      font-size: 9px;
      color: $light-dark;
      margin-top: 5px;
    }
  }
}
</style>
