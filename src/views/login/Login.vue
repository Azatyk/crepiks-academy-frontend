<template>
  <div class="main">
    <form @submit.prevent="login" class="register-form">
      <h3 class="register-form__heading">Создайте аккаунт</h3>
      <div class="register-form__social-container">
        <button class="register-form__social-button">Вконтакте</button>
        <button class="register-form__social-button">LinkedIn</button>
        <button class="register-form__social-button">Facebook</button>
      </div>
      <div class="register-form__divider"></div>
      <c-input
        :icon="emailIcon"
        placeholder="Почта"
        class="register-form__input"
        v-model="email"
        id="email"
      />
      <c-input
        :icon="lockIcon"
        placeholder="Пароль"
        class="register-form__input"
        v-model="password"
        id="password"
      />
      <button type="submit" class="register-form__submit-button">
        Создать аккаунт
      </button>
      <p class="register-form__agreement">
        Нажимая данную кнопку вы соглашаетесь с условиями обработки данных
      </p>
    </form>
    <router-link class="register-form__submit-button link-to-main" to="/"
      >На главную</router-link
    >
  </div>
</template>

<script>
import Input from "@/components/general/Input";
import emailIcon from "@/assets/icons/email_light.svg";
import lockIcon from "@/assets/icons/lock_light.svg";

export default {
  components: {
    "c-input": Input
  },
  data() {
    return {
      emailIcon,
      lockIcon,
      name: "",
      surname: "",
      email: "",
      password: "",
      secondPassword: ""
    };
  },
  methods: {
    login() {
      let data = {
        email: this.email,
        password: this.password
      };

      this.$store.dispatch("login", data).then(() => this.$router.push("/"));
    }
  }
};
</script>

<style scoped>
.register-form {
  margin: 20vh auto;
  padding: 52px 26px;
  width: 30%;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.link-to-main {
  position: fixed;
  left: 10%;
  top: 5%;
  width: 150px !important;
  text-decoration: none;
}

.register-form__heading {
  margin-bottom: 24px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
}

.register-form__social-container {
  display: flex;
  justify-content: space-between;
}

.register-form__social-button {
  width: 30%;
  padding: 13px 22px;
  color: #f8f7fc;
  font-weight: 500;
  background-color: #4a76a8;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.register-form__divider {
  width: 100%;
  height: 1px;
  margin: 39px 0;
  background-color: #767ead;
}

.register-form__input {
  margin-bottom: 24px;
}

.register-form__submit-button {
  width: 100%;
  padding: 14px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f8f7fc;
  font-size: 18px;
  font-weight: 500;
  background-color: #a285fc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.register-form__agreement {
  margin-top: 24px;
  color: #767ead;
  font-size: 14px;
}
</style>
