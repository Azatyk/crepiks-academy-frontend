<template>
  <div class="page">
    <cHeader pageType="register" />
    <cMessage
      icon="fas fa-times-circle"
      :text="errResponse"
      :isActive="isError"
      @change="messageVisibleChange"
    />
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
      name: "",
      surname: "",
      email: "",
      password: "",
      passwordCheck: "",
      errResponse: "",
      isError: false
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
          .then(() => this.$router.push("/"))
          .catch(err => {
            this.errResponse = err.response.data.message;
          });
      } else {
        this.errResponse = "Пароли должны совпадать";
        this.isError = true;
      }
    },
    messageVisibleChange(status) {
      this.isError = status;
    }
  }
};
</script>

<style scoped>
.page {
  height: 100vh;
  width: 100%;
  background-color: #34495e;
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
