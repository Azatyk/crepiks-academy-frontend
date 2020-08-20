<template>
  <div class="register__page">
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
        <s-button @click="register" class="register-form__submit-button">
          Регистрация
        </s-button>
        <div class="form__link-text">
          Есть аккаунт?
          <router-link to="/auth/login" class="form__link-register"
            >Войдите</router-link
          >
        </div>
      </cForm>
    </div>
  </div>
</template>

<script>
import cForm from "@/components/common/cForm";
import cFormInput from "@/components/common/cFormInput";
import { message } from "ant-design-vue";

import Button from "vuesax/dist/vsButton";
import "vuesax/dist/vuesax.css";

export default {
  components: {
    cForm,
    cFormInput,
    "s-button": Button
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
  height: 600px;
}

.register-form__heading {
  color: #34495e;
  margin-bottom: 15px;
  font-size: 35px;
  font-weight: 500;
}

.register-form__input {
  margin-bottom: 24px;
}

.register-form__submit-button {
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
    height: 920px;
  }

  .register-form__heading {
    margin-bottom: 3vw;
    font-size: 6vw;
  }

  .register-form__input {
    margin-bottom: 3vw;
  }

  .register-form__submit-button {
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

  .register-form__heading {
    font-size: 6vw;
  }
}
</style>
