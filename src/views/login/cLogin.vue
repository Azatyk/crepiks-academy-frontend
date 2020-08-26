<template>
  <c-form @submit="login">
    <div class="auth-form">
      <h3 class="auth-form__heading">Войти</h3>
      <s-input
        label-placeholder="Email"
        v-model="email"
        class="auth-form__input"
        state="primary"
      >
        <template v-if="!email" #message-danger> </template>
      </s-input>
      <s-input
        label-placeholder="Password"
        v-model="password"
        class="auth-form__input"
        type="password"
        state="primary"
      />
      <div class="auth-form__functional">
        <s-button @click="login" class="auth-form__button">
          Вход
        </s-button>
        <div class="auth-form__link-text auth-form__link-container">
          Нет аккаунта?
          <router-link
            to="/auth/register"
            class="auth-form__link-text auth-form__link"
            >Зарегистрируйтесь</router-link
          >
        </div>
      </div>
    </div>
  </c-form>
</template>

<script>
import cForm from "@/components/common/cForm";

import Button from "vuesax/dist/vsButton";
import Input from "vuesax/dist/vsInput";
import "vuesax/dist/vuesax.css";

export default {
  components: {
    "c-form": cForm,
    "s-button": Button,
    "s-input": Input
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.email.trim() && this.password.trim()) {
        const { email, password } = this;
        const loading = this.$vs.loading({ color: "#384a62" });
        this.$store
          .dispatch("login", { email, password })
          .then(() => loading.close())
          .then(() => this.$router.push("/app/home", () => {}))
          .catch(() => {
            loading.close();
            this.openNotification("top-center");
          });
      }
    },
    openNotification(
      position = null,
      color = "danger",
      title = "Неверные данные",
      text = "Вы ввели неверный логин или пароль"
    ) {
      this.$vs.notification({
        position,
        color,
        title,
        text
      });
    }
  }
};
</script>

<style>
.auth-form {
  padding-left: 60px;
  box-sizing: border-box;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.auth-form__heading {
  margin-bottom: 50px;
  font-size: 40px;
  font-weight: 300;
  color: #2e2e3d;
}

.auth-form__input {
  margin-bottom: 40px;
  align-self: flex-start;
  width: 330px;
  color: #2e2e3d;
}

.vs-input {
  width: 330px;
  font-size: 17px;
}

.auth-form__functional {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.auth-form__button {
  margin-left: 0;
  width: 90px;
  font-size: 15px;
}

.auth-form__link-container {
  margin-left: 10px;
}

.auth-form__link-text {
  font-size: 13px;
  color: #2e2e3d;
}

.auth-form__link {
  margin-left: 5px;
  text-decoration: none;
  color: #5d33f6;
}
</style>
