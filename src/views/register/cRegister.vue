<template>
  <c-form @submit="register">
    <div class="register-form">
      <h3 class="register-form__heading">Регистрация</h3>
      <s-input
        label-placeholder="Имя"
        v-model="name"
        class="register-form__input"
        state="primary"
      />
      <s-input
        label-placeholder="Фамилия"
        v-model="surname"
        class="register-form__input"
        state="primary"
      />
      <s-input
        type="email"
        label-placeholder="Email"
        v-model="email"
        class="register-form__input"
        state="primary"
      />
      <s-input
        label-placeholder="Пароль"
        v-model="password"
        type="password"
        class="register-form__input"
        state="primary"
      />
      <s-input
        label-placeholder="Подтверждение пароля"
        v-model="passwordCheck"
        type="password"
        class="register-form__input"
        state="primary"
      />
      <div class="register-form__functional">
        <s-button @click="register" class="register-form__button">
          Регистрация
        </s-button>
        <div class="register-form__link-text register-form__link-container">
          Есть аккаунт?
          <router-link to="/auth/login" class="register-form__link"
            >Войдите</router-link
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
.register-form {
  padding-left: 5%;
  box-sizing: border-box;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.register-form__heading {
  margin-bottom: 9%;
  font-size: 3vw;
  font-weight: 300;
  color: #2e2e3d;
}

.register-form__input {
  margin-bottom: 6%;
  align-self: flex-start;
  width: 80%;
  color: #2e2e3d;
}

.vs-input {
  width: 100%;
  font-size: 1.3vw;
}

.register-form__functional {
  margin-top: 2%;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.register-form__button {
  margin-left: 0;
  width: 40%;
  font-size: 1.2vw;
}

.register-form__link-container {
  margin-left: 2%;
}

.register-form__link-text {
  font-size: 1vw;
  color: #2e2e3d;
}

.register-form__link {
  margin-left: 5px;
  text-decoration: none;
  color: #5d33f6;
}

@media (max-width: 1024px) {
  .register-form {
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;
  }

  .register-form__heading {
    font-size: 10vw;
  }

  .register-form__input {
    width: 80%;
    align-self: center;
  }

  .vs-input {
    padding-left: 12% !important;
    width: 100%;
    font-size: 50px;
    border-radius: 100px;
  }

  .vs-input:focus {
    padding-left: 15% !important;
  }

  .vs-input__label {
    padding-left: 7%;
    font-size: 50px;
  }

  .vs-input__label--placeholder {
    font-size: 50px;
  }

  .register-form__functional {
    display: flex;
    flex-direction: column;
  }

  .register-form__button {
    padding: 5px 0;
    margin-bottom: 7%;
    height: 100%;
    width: 40%;
    font-size: 4.5vw;
    border-radius: 50px;
  }

  .register-form__link-text {
    margin-left: 0;
    font-size: 3.5vw;
  }

  .register-form__link {
    margin-left: 10px;
  }
}

@media (max-width: 768px) {
  .register-form__input {
    width: 70%;
  }

  .vs-input {
    font-size: 30px;
  }

  .vs-inout__label {
    font-size: 30px;
  }

  .vs-input__label--placeholder {
    font-size: 30px;
  }
}

@media (max-width: 500px) {
  .register-form__heading {
    font-size: 10vw;
  }

  .vs-input {
    font-size: 20px;
  }

  .vs-input__label {
    font-size: 20px;
  }

  .vs-input__label--placeholder {
    font-size: 20px;
  }

  .register-form__button {
    margin-bottom: 10%;
    padding: 0;
    width: 50%;
    font-size: 5vw;
  }

  .register-form__link-text {
    font-size: 4vw;
  }
}
</style>
