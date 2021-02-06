<template>
  <div class="login-page">
    <div class="login-content">
      <router-link to="/" class="login-back">
        <i class="bx bx-arrow-back login-back-icon"></i>
        На главную
      </router-link>
      <cForm @submit="login" class="form-container">
        <cInput
          class="form-input"
          title="Почта"
          type="email"
          placeholder="Введите вашу почту"
          v-model="email"
        />
        <cInput
          class="form-input"
          title="Пароль"
          type="password"
          placeholder="Введите ваш пароль"
          v-model="password"
        />
        <cButton class="form-button" text="Войти" />
        <p class="form-text">
          <span class="form-text-info">Все ещё нет аккаунта?</span>
          <router-link class="form-text form-text-link" to="/auth/register"
            >Создайте его!</router-link
          >
        </p>
      </cForm>
    </div>
  </div>
</template>

<script>
import cForm from "@/components/common/crepiks-form.vue";
import cInput from "@/components/common/crepiks-input.vue";
import cButton from "@/components/common/crepiks-button.vue";

export default {
  components: {
    cForm,
    cInput,
    cButton
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
        const email = this.email.trim();
        const password = this.password.trim();
        this.$store
          .dispatch("login", { email, password })
          .then(() => this.$router.push("/app/courses"))
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.login-page {
  width: 100%;
  height: 100vh;
  background-color: $background;
}

.login-content {
  padding: 0.1px 3%;
  margin: auto;
  width: 100%;
  max-width: 1140px;
  height: 100%;
}

.login-back {
  margin-top: 60px;
  display: flex;
  align-items: center;
  color: $primary;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  &-icon {
    margin-right: 5px;
    font-size: 20px;
  }
}

.form-container {
  margin-top: 40px;
}

.form-input {
  margin-bottom: 20px;
}

.form-button {
  margin-top: 10px;
  width: 100%;
}

.form-text {
  margin-top: 15px;
  width: 100%;
  color: $dark;
  font-size: 14px;
  font-weight: 500;
  opacity: 1;

  &-info {
    margin-right: 5px;
    opacity: 0.5;
  }

  &-link {
    margin: 0;
    color: $primary;
    text-decoration: none;
    opacity: 0.7;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
