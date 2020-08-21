<template>
  <c-form @submit="login">
    <div class="form">
      <h3 class="form__heading">Войти</h3>
      <s-input
        border
        label-placeholder="Email"
        v-model="email"
        class="form__input"
      >
        <template v-if="!email" #message-danger> </template>
      </s-input>
      <s-input
        border
        label-placeholder="Password"
        v-model="password"
        class="form__input"
        type="password"
      />
      <div class="form__functional">
        <s-button @click="login" class="form__button">
          Вход
        </s-button>
        <div class="form__link-text form__link-container">
          Нет аккаунта?
          <router-link to="/auth/register" class="form__link-text form__link"
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
          .then(() => this.$router.push("/app/courses", () => {}))
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

<style scoped>
.form {
  padding-left: 60px;
  box-sizing: border-box;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.form__heading {
  margin-bottom: 50px;
  font-size: 30px;
  font-weight: 300;
  color: white;
}

.form__input {
  margin-bottom: 40px;
  align-self: flex-start;
  width: 80%;
  font-size: 30px !important;
  color: white;
}

.form__functional {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.form__button {
  margin-left: 0;
  width: 90px;
  font-size: 15px;
}

.form__link-container {
  margin-left: 10px;
}

.form__link-text {
  font-size: 12px;
  color: white;
}

.form__link {
  margin-left: 5px;
  text-decoration: none;
  color: #6ddeca;
}
</style>
