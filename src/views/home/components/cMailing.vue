<template>
  <section class="mailing">
    <cMessage
      icon="fas fa-exclamation-circle"
      :text="errResponse"
      :isActive="isError"
      backColor="#ffcc00"
      textColor="white"
      @change="messageVisibleChange"
    />
    <form @submit.prevent="save" class="mailing__form form">
      <div class="form__text">
        <h2 class="form__heading">Узнавайте обо всем первым</h2>
        <div class="form__description">
          Подпишитесь на нашу email рассылку, чтобы быть в курсе всех обновлений
        </div>
      </div>
      <div class="form__functional">
        <cInput
          v-model="userEmail"
          class="form__input"
          type="email"
          placeholder="Email"
          id="email"
        />
        <cButton
          type="submit"
          class="form__button"
          text="Подписаться"
          :isBold="true"
        />
      </div>
    </form>
  </section>
</template>

<script>
import cInput from "@/components/general/cInput";
import cButton from "@/components/general/cButton";
import cMessage from "@/components/general/cMessage";

export default {
  components: {
    cInput,
    cButton,
    cMessage
  },
  data() {
    return {
      userEmail: "",
      errResponse: "",
      isError: false
    };
  },
  methods: {
    save() {
      let email = this.userEmail;
      this.$store.dispatch("saveEmail", email).catch(err => {
        this.errResponse = err.response.data.message;
        this.isError = true;
      });
    },
    messageVisibleChange(status) {
      this.isError = status;
    }
  }
};
</script>

<style scoped>
.mailing {
  height: 40vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f7fc;
  background-image: url("../../../assets/images/mailingSpot.svg");
  background-size: 60%;
  background-position: bottom right;
  background-repeat: no-repeat;
}

.mailing__form {
  height: 13vw;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f7fc;
  box-shadow: 0 0 15px 0px #9c9c9c;
  border-radius: 5px;
}

.form__text {
  margin-bottom: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.form__functional {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.form__heading {
  font-size: 2.2vw;
  color: #34495e;
}

.form__description {
  font-size: 0.82vw;
  color: #516f8c;
}

.form__input {
  margin-right: 5%;
  padding: 0 1vw;
  height: 3vw;
  width: 50%;
  font-size: 1vw;
}

.form__button {
  height: 3vw;
  width: 30%;
  font-size: 1vw;
}
</style>
