<template>
  <div class="page">
    <cHeader pageType="common" />
    <cMessage
      icon="fas fa-exclamation-circle"
      :text="errResponse"
      :isActive="isError"
      backColor="#ffcc00"
      textColor="white"
      @change="messageVisibleChange"
    />
    <div class="content">
      <div class="soon">
        <div class="soon__text">
          <h1 class="soon__heading">Не терпится начать?</h1>
          <div class="soon__description">
            Дай нам пару дней и мы все устроим!
          </div>
        </div>
        <form class="mailing__form form" @submit.prevent="save">
          <div class="form__text">
            <h2 class="form__heading">
              А пока
            </h2>
            <div class="form__description">
              подпишись на нашу email рассылку и будь в курсе всех новостей
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
            <cButton class="form__button" text="Подписаться" :isBold="true" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import cHeader from "@/components/common/cHeader";
import cInput from "@/components/common/cInput";
import cButton from "@/components/common/cButton";
import cMessage from "@/components/common/cMessage";

export default {
  components: {
    cHeader,
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
.page {
  height: 100vh;
  width: 100%;
  background-color: #f8f7fc;
}

.content {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.soon__text {
  margin-bottom: 10%;
}

.soon__heading {
  margin-bottom: 0.5%;
  font-size: 3.5vw;
  color: #34495e;
  text-align: center;
}

.soon__description {
  font-size: 1.7vw;
  color: #516f8c;
  text-align: center;
}

.mailing__form {
  margin: auto;
  height: 11vw;
  width: 82%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f7fc;
  box-shadow: 0 0 10px #0000004d;
  border-radius: 5px;
}

.form__text {
  margin-bottom: 1vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  margin-right: 3%;
  font-size: 3vw;
  color: #34495e;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
}

.form__description {
  width: 50%;
  font-size: 1vw;
  color: #516f8c;
  line-height: 1.5;
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
