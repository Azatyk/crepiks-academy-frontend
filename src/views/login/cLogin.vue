<template>
  <div class="page">
    <cHeader pageType="login" />
    <cMessage
      :icon="messageIcon"
      :text="messageText"
      :isActive="isMessage"
      @change="messageVisibleChange"
    />
    <div class="content">
      <cForm @submit="login" class="form">
        <h3 class="auth-form__heading">Войти</h3>
        <cFormInput
          icon="fas fa-envelope"
          placeholder="Email"
          v-model="email"
          id="email"
          class="auth-form__input"
        />
        <cFormInput
          icon="fas fa-lock"
          placeholder="Пароль"
          v-model="password"
          id="password"
          class="auth-form__input"
        />
        <cButton text="Войти" type="submit" class="auth-form__submit-button" />
        <div class="form__link-text">
          Нет аккаунта?
          <router-link to="/register" class="form__link-register"
            >Зарегистрируйтесь</router-link
          >
        </div>
      </cForm>
    </div>
  </div>
</template>

<script>
import cHeader from "@/components/general/cHeader";
import cForm from "@/components/general/cForm";
import cFormInput from "@/components/general/cFormInput";
import cButton from "@/components/general/cButton";
import cMessage from "@/components/general/cMessage";

export default {
  components: {
    cHeader,
    cForm,
    cFormInput,
    cButton,
    cMessage
  },
  data() {
    return {
      email: "",
      password: "",
      messageText: "",
      messageIcon: "",
      isMessage: false
    };
  },
  methods: {
    login() {
      if (this.email.trim() && this.password.trim()) {
        const { email, password } = this;
        this.$store
          .dispatch("login", { email, password })
          .then(() => this.$router.push("/"))
          .catch(err => {
            this.messageText = err.response.data.message;
            this.messageIcon = "fas fa-times-circle";
            this.isMessage = true;
          });
      }
    },
    messageVisibleChange(status) {
      this.isMessage = status;
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

.form {
  width: 25%;
}

.auth-form__heading {
  color: #34495e;
  margin-bottom: 5%;
  font-size: 2vw;
  font-weight: 500;
}

.auth-form__input {
  margin-bottom: 24px;
}

.auth-form__submit-button {
  margin-bottom: 3%;
  padding: 14px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f8f7fc;
  font-size: 18px;
  font-weight: 500;
  background-color: #fc7979;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.form__link-text {
  font-size: 0.95vw;
  color: #516f8c;
}

.form__link-register {
  font-size: 0.95vw;
  color: #fc7979;
  text-decoration: none;
  cursor: pointer;
}
</style>
