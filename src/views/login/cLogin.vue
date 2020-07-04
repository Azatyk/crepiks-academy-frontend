<template>
  <div class="login__page">
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
        <a-button
          type="primary"
          @click="login"
          class="auth-form__submit-button"
        >
          Войти
        </a-button>
        <div class="form__link-text">
          Нет аккаунта?
          <router-link to="/auth/register" class="form__link-register"
            >Зарегистрируйтесь</router-link
          >
        </div>
      </cForm>
    </div>
  </div>
</template>

<script>
import cForm from "@/components/common/cForm";
import cFormInput from "@/components/common/cFormInput";
import { Button } from "ant-design-vue";

export default {
  components: {
    cForm,
    cFormInput,
    "a-button": Button
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
        this.$store
          .dispatch("login", { email, password })
          .then(() => this.$router.push("/"));
      }
    }
  }
};
</script>

<style scoped>
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
  height: 2.7vw;
  width: 100%;
  font-size: 1.1vw;
  font-weight: 500;
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
