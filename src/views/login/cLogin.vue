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
          type="password"
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
          <router-link
            to="/auth/register"
            class="form__link-text form__link-register"
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
          .then(() => this.$router.push("/app/courses"));
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
  min-width: 300px;
  width: 500px;
  height: 380px;
}

.auth-form__heading {
  color: #34495e;
  margin-bottom: 15px;
  font-size: 35px;
  font-weight: 500;
}

.auth-form__input {
  margin-bottom: 24px;
}

.auth-form__submit-button {
  margin-bottom: 3%;
  height: 45px;
  width: 100%;
  font-size: 20px;
  font-weight: 500;
}

.form__link-text {
  font-size: 17px;
  color: #516f8c;
}

.form__link-register {
  color: #fc7979;
  text-decoration: none;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .form {
    width: 80%;
    height: 60vw;
  }

  .auth-form__heading {
    margin-bottom: 3vw;
    font-size: 6vw;
  }

  .auth-form__input {
    margin-bottom: 3vw;
  }

  .auth-form__submit-button {
    height: 8vw;
    font-size: 3vw;
  }

  .form__link-text {
    font-size: 3vw;
  }
}

@media (max-width: 700px) {
  .form {
    min-width: 0;
    height: auto;
  }

  .auth-form__heading {
    font-size: 7vw;
  }
}
</style>
