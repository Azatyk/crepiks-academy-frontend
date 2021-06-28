<template>
  <div class="wrapper">
    <div class="payment-text" v-if="!mobileWidth">
      <div class="payment-heading">Оплата подписки на месяц</div>
      <div class="payment-paragraph">
        Приобретая подписку на платформе Crepiks за 5000 тг вы получаете доступ
        ко всем курсам на платформе на один месяц
      </div>
      <div class="payment-paragraph">
        Оформляя подписку вы соглашаетесь с
        <span
          class="payment-paragraph-green"
          @click="$emit('open-transactions-block')"
          >условиями транзакций</span
        >
      </div>
    </div>
    <div class="payment">
      <notification
        :isActive="isNotificationOpen"
        :heading="notificationHeading"
        :text="notificationText"
        @close-notification="isNotificationOpen = false"
        :status="notificationStatus"
      />
      <div class="payment-front">
        <div class="payment-text" v-if="mobileWidth">
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
          <cButton class="payment-button" @click="pay">Оплатить 5000тг</cButton>
        </div>
        <div class="payment-card">
          <cInput
            v-mask="'#### #### #### ####'"
            v-model="cardNumber"
            title="Номер карты"
            placeholder="0000 0000 0000 0000"
            name="cardnumber"
            autocomplete="cc-number"
          />
          <cInput
            v-model="cardName"
            title="Имя на карте"
            placeholder="Введите имя на карте"
            name="ccname"
            autocomplete="cc-name"
          />
          <!-- <input type="text" > -->
          <div class="payment-card-container">
            <cInput
              class="payment-card-input"
              v-mask="'##'"
              v-model="cardMonth"
              title="Месяц"
              placeholder="XX"
              name="ccmonth"
              autocomplete="cc-exp-month"
            />
            <span class="payment-card-sign">/</span>
            <cInput
              class="payment-card-input"
              v-mask="'##'"
              v-model="cardYear"
              title="Год"
              placeholder="YY"
              name="ccyear"
              autocomplete="cc-exp-year"
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
            name="cvc"
          />
          <div class="payment-back-text">Цифры на обратной стороне карты</div>
        </div>
      </div>
    </div>
    <cButton class="payment-button" @click="pay" v-if="!mobileWidth"
      >Оплатить 5000тг</cButton
    >
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
      notificationText: "",
      notificationStatus: "error",
      mobileWidth: true
    };
  },
  watch: {
    cardName() {
      this.cardName = event.target.value.toUpperCase();
    }
  },
  methods: {
    pay() {
      this.isNotificationOpen = true;
      this.notificationHeading = "Оплата не доступна";
      this.notificationStatus = "warning";
      this.notificationText =
        "Спасибо за желание приобрести подписку. На данный момент оплата недоступна. Для более подробной информации свяжитесь с поддержкой";
      // if (
      //   !this.cardName.trim() ||
      //   !this.cardMonth.trim() ||
      //   !this.cardYear.trim() ||
      //   !this.cardCvc.trim() ||
      //   !this.cardNumber.trim()
      // ) {
      //   this.isNotificationOpen = true;
      //   this.notificationHeading = "Заполните все поля";
      //   this.notificationText = "Необходимо заполнить каждое поле";
      // }
    },
    handleResize() {
      if (window.innerWidth <= 414) {
        this.mobileWidth = false;
      } else {
        this.mobileWidth = true;
      }
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}

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
      opacity: 0.5;
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

@media (max-width: 414px) {
  .wrapper {
    height: 530px;
  }

  .payment {
    width: 100%;
    height: 240px;

    &-front {
      border-radius: 0 20px 20px 0;
      width: 62%;
      padding: 5%;
    }

    &-card {
      width: 100%;
    }

    &-heading {
      font-size: 26px;
      width: 251px;
    }

    &-paragraph {
      width: 274px;
    }

    &-back {
      border-radius: 0 20px 20px 0;
      width: 100%;
      right: 5%;

      &-block {
        width: 25%;
        margin-right: 8px;
        margin-top: 20px;
      }
      &-text {
        font-size: 7px;
      }
    }

    &-text {
      width: 90%;
      height: fit-content;
    }

    &-button {
      padding: 12px 0;
      width: 90%;
      margin-top: 0;
    }
  }
}

@media (max-width: 374px) {
  .wrapper {
    height: 430px;
  }

  .payment {
    height: 240px;

    &-heading {
      font-size: 22px;
      width: 212px;
    }

    &-paragraph {
      font-size: 11px;
      color: $dark;
      opacity: 0.8;
      margin-top: 8px;
      width: 246px;
    }

    &-button {
      padding: 10px 0;
      width: 90%;
      margin-top: 0;
    }
  }
}
</style>
