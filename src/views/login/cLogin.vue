<template>
  <c-form @submit="login">
    <div class="auth-form">
      <h3 class="auth-form__heading">{{ $t("authLoginTitle") }}</h3>
      <s-input
        :label-placeholder="$t('authInputEmail')"
        v-model="email"
        class="auth-form__input"
        state="primary"
      >
        <template v-if="!email" #message-danger> </template>
      </s-input>
      <s-input
        :label-placeholder="$t('authInputPassword')"
        v-model="password"
        class="auth-form__input"
        type="password"
        state="primary"
      />
      <div class="auth-form__functional">
        <s-button @click="login" class="auth-form__button">
          {{ $t("authLoginButtonText") }}
        </s-button>
        <div class="auth-form__link-text auth-form__link-container">
          {{ $t("authLoginNoAccountText") }}
          <router-link
            to="/auth/register"
            class="auth-form__link-text auth-form__link"
            >{{ $t("authLoginRegisterText") }}</router-link
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
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.email.trim() && this.password.trim()) {
        const { email, password } = this;
        const loading = this.$vs.loading({ color: "#384a62" });
        this.$store
          .dispatch("login", { email, password })
          .then(() => loading.close())
          .then(() => this.$router.push("/app/home", () => {}))
          .catch(() => {
            loading.close();
            this.openNotification("top-center");
          });
      }
    },
    openNotification(
      position = null,
      color = "danger",
      title = "Неверные данные",
      text = "Вы ввели неверный логин или пароль"
    ) {
      this.$vs.notification({
        position,
        color,
        title,
        text
      });
    }
  }
};
</script>

<style>
.auth-form {
  padding-left: 5%;
  box-sizing: border-box;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.auth-form__heading {
  margin-bottom: 10%;
  font-size: 3vw;
  font-weight: 300;
  color: #2e2e3d;
}

.auth-form__input {
  margin-bottom: 7%;
  align-self: flex-start;
  width: 80%;
  color: #2e2e3d;
}

.vs-input {
  width: 100%;
  font-size: 1vw;
}

.vs-input__label {
  font-size: 0.9vw;
}

.auth-form__functional {
  margin-top: 5%;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.auth-form__button {
  margin-left: 0;
  width: 25%;
  font-size: 1.2vw;
}

.auth-form__link-container {
  margin-left: 2%;
}

.auth-form__link-text {
  font-size: 1vw;
  color: #2e2e3d;
}

.auth-form__link {
  margin-left: 5px;
  text-decoration: none;
  color: #5d33f6;
}

@media (max-width: 1024px) {
  .auth-form {
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;
  }

  .auth-form__heading {
    font-size: 10vw;
  }

  .auth-form__input {
    width: 80%;
    align-self: center;
  }

  .vs-input {
    padding-left: 20px !important;
    width: 100%;
    font-size: 50px;
    border-radius: 100px;
  }

  .vs-input:focus {
    padding-left: 30px !important;
  }

  .vs-input__label {
    padding-left: 20px;
    font-size: 50px;
  }

  .vs-input__label--placeholder {
    font-size: 50px;
  }

  .auth-form__functional {
    display: flex;
    flex-direction: column;
  }

  .auth-form__button {
    padding: 5px 0;
    margin-bottom: 7%;
    height: 100%;
    width: 30%;
    font-size: 4.5vw;
    border-radius: 50px;
  }

  .auth-form__link-text {
    margin-left: 0;
    font-size: 3.5vw;
  }

  .auth-form__link {
    margin-left: 10px;
  }
}

@media (max-width: 768px) {
  .auth-form__input {
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
  .auth-form__heading {
    font-size: 12vw;
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

  .auth-form__button {
    margin-bottom: 10%;
    padding: 0;
    width: 40%;
    font-size: 5vw;
  }

  .auth-form__link-text {
    font-size: 4vw;
  }
}
</style>
