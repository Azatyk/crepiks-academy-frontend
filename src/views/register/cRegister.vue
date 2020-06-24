<template>
  <div class="page">
    <cHeader pageType="register" />
    <div class="content">
      <cForm @submit="register" class="form">
        <h3 class="register-form__heading">Регистрация</h3>
        <cFormInput
          icon="fas fa-address-card"
          placeholder="Имя"
          v-model="name"
          id="name"
          class="register-form__input"
        />
        <cFormInput
          icon="fas fa-address-card"
          placeholder="Фамилия"
          v-model="surname"
          id="surname"
          class="register-form__input"
        />
        <cFormInput
          type="email"
          icon="fas fa-envelope"
          placeholder="Email"
          v-model="email"
          id="email"
          class="register-form__input"
        />
        <cFormInput
          icon="fas fa-lock"
          placeholder="Пароль"
          v-model="password"
          id="password"
          class="register-form__input"
        />
        <cFormInput
          icon="fas fa-unlock"
          placeholder="Подтверждение пароля"
          v-model="passwordCheck"
          id="passwordCheck"
          class="register-form__input"
        />
        <cButton
          text="Регистрация"
          type="submit"
          class="register-form__submit-button"
        />
        <div class="form__link-text">
          Есть аккаут?
          <router-link to="/login" class="form__link-register"
            >Войдите</router-link
          >
        </div>
      </cForm>
    </div>
  </div>
</template>

<script>
import cHeader from "@/components/common/cHeader";
import cForm from "@/components/common/cForm";
import cFormInput from "@/components/common/cFormInput";
import cButton from "@/components/common/cButton";
import { message } from "ant-design-vue";

export default {
  components: {
    cHeader,
    cForm,
    cFormInput,
    cButton
  },
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
      passwordCheck: ""
    };
  },
  methods: {
    register() {
      if (this.password.trim() == this.passwordCheck.trim()) {
        let data = {
          firstName: this.name,
          lastName: this.surname,
          email: this.email,
          password: this.password
        };

        this.$store
          .dispatch("register", data)
          .then(() => this.$router.push("/"));
      } else {
        message.error("Пароли должны совпадать");
      }
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

.register-form__heading {
  color: #34495e;
  margin-bottom: 5%;
  font-size: 2vw;
  font-weight: 500;
}

.register-form__input {
  margin-bottom: 24px;
}

.register-form__submit-button {
  margin-bottom: 3%;
  width: 100%;
  padding: 14px 0;
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
