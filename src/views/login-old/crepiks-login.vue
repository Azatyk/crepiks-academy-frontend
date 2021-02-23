<template>
  <c-form @submit="login">
    <div class="auth-form">
      <div class="auth-form__inner">
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
          <button type="submit" class="auth-form__button">
            {{ $t("authLoginButtonText") }}
          </button>
          <div class="auth-form__link-text auth-form__link-container">
            {{ $t("authLoginNoAccountText") }}
            <router-link
              to="/auth/register"
              class="auth-form__link-text auth-form__link"
              >Зарегистрируйтесь</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </c-form>
</template>

<script>
import cForm from "@/components/common/cForm";

import Input from "vuesax/dist/vsInput";
import "vuesax/dist/vuesax.css";

export default {
  components: {
    "c-form": cForm,
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

<style lang="scss" styles>
@import "@/assets/styles/variables.scss";

.auth-form {
  height: fit-content;
  width: 50%;
}

.auth-form__inner {
  padding-left: 10%;
  box-sizing: border-box;
  width: 100%;
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
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.auth-form__button {
  padding: 7px 23px;
  color: white;
  font-size: 1.2vw;
  border: 2px solid $color-2;
  border-radius: 15px;
  background-color: $color-2;
  transition: 150ms ease-in-out;
  cursor: pointer;
}

.auth-form__button:hover {
  background-color: white;
  color: $color-2;
}

.auth-form__link-container {
  margin-left: 3%;
}

.auth-form__link-text {
  font-size: 1vw;
  color: $color-5;
}

.auth-form__link {
  margin-left: 5px;
  text-decoration: none;
  color: $color-2;
}

@media (max-width: 950px) {
  .auth-form {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .auth-form__inner {
    padding-left: 0;
    width: 280px;
    align-items: center;
  }

  .auth-form__heading {
    font-size: 30px;
  }

  .auth-form__input {
    width: 100%;
    align-self: center;
    margin-bottom: 8%;
  }

  .vs-input {
    padding-left: 7% !important;
    height: 40px;
    width: 100%;
    font-size: 17px;
    border-radius: 100px;
  }

  .auth-form__functional {
    flex-direction: column;
  }

  .auth-form__button {
    font-size: 20px;
  }

  .auth-form__link-text {
    margin-top: 20px;
    font-size: 15px;
  }
}
</style>
