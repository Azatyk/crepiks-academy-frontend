<template>
  <c-form @submit="register">
    <div class="form">
      <h3 class="form__heading">Регистрация</h3>
      <s-input
        border
        label-placeholder="Имя"
        v-model="name"
        class="form__input"
      />
      <s-input
        border
        label-placeholder="Фамилия"
        v-model="surname"
        class="form__input"
      />
      <s-input
        border
        type="email"
        label-placeholder="Email"
        v-model="email"
        class="form__input"
      />
      <s-input
        border
        label-placeholder="Пароль"
        v-model="password"
        type="password"
        class="form__input"
      />
      <s-input
        border
        label-placeholder="Подтверждение пароля"
        v-model="passwordCheck"
        type="password"
        class="form__input"
      />
      <div class="form__functional">
        <s-button @click="register" class="form__button">
          Регистрация
        </s-button>
        <div class="form__link-text form__link-container">
          Есть аккаунт?
          <router-link to="/auth/login" class="form__link">Войдите</router-link>
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

        const loading = this.$vs.loading({ color: "#384a62" });
        this.$store
          .dispatch("register", data)
          .then(() => loading.close())
          .then(() => this.$router.push("/"))
          .catch(() => {
            loading.close();
            this.openNotification(
              "top-center",
              "danger",
              "Такой пользователь уже существует",
              "Эта почта уже используется другим пользователем, если это ваша почта, пожалуйста напишите нам"
            );
          });
      } else {
        this.openNotification(
          "top-center",
          "danger",
          "Пароли должны сопадать",
          'Поле "Пароль" и поле "Подтверждение пароля" должны содержать одинаковые пароли'
        );
      }
    },
    openNotification(position = null, color, title, text) {
      this.$vs.notification({
        color,
        position,
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
  width: 130px;
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
