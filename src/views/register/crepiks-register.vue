<template>
  <div class="register-page">
    <div class="register-content">
      <router-link to="/" class="register-back">
        <i class="bx bx-arrow-back register-back-icon"></i>
        На главную
      </router-link>
      <cForm @submit="register" class="form-container">
        <cInput
          class="form-input"
          title="Имя"
          type="text"
          placeholder="Как вас зовут?"
          v-model="firstName"
        />
        <cInput
          class="form-input"
          title="Фамилия"
          type="text"
          placeholder="Какая у вас фамилия?"
          v-model="lastName"
        />
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
          placeholder="Придумайте пароль"
          v-model="password"
        />
        <cButton class="form-button" text="Войти" />
        <p class="form-text">
          <span class="form-text-info">Вы уже с нами?</span>
          <router-link class="form-text form-text-link" to="/auth/login"
            >Войдите в аккаунт!</router-link
          >
        </p>
      </cForm>
    </div>
  </div>
</template>

<script>
import cForm from "@/components/common/crepiks-form";
import cInput from "@/components/common/crepiks-input";
import cButton from "@/components/common/crepiks-button";

export default {
  components: {
    cForm,
    cInput,
    cButton
  },

  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  },

  methods: {
    register() {
      if (
        this.firstName.trim() &&
        this.lastName.trim() &&
        this.email.trim() &&
        this.password.trim()
      ) {
        const user = {
          firstName: this.firstName.trim(),
          lastName: this.lastName.trim(),
          email: this.email.trim(),
          password: this.password.trim()
        };

        this.$store
          .dispatch("register", user)
          .then(() => this.$router.push("/app/home"))
          .catch(err => console.log(err));
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.register-page {
  width: 100%;
  height: 100vh;
  background-color: $background;
}

.register-content {
  padding: 0.1px 3%;
  margin: auto;
  width: 100%;
  max-width: 1140px;
  height: 100%;
}

.register-back {
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
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
