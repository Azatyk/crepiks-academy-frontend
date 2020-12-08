<template>
  <c-form @submit="register">
    <div class="register-form">
      <div class="register-form__inner">
        <h3 class="register-form__heading">{{ $t("authRegisterTitle") }}</h3>
        <s-input
          :label-placeholder="$t('authInputFirstName')"
          v-model="name"
          class="register-form__input"
          state="primary"
        />
        <s-input
          :label-placeholder="$t('authInputLastName')"
          v-model="surname"
          class="register-form__input"
          state="primary"
        />
        <s-input
          :label-placeholder="$t('authInputEmail')"
          v-model="email"
          type="email"
          class="register-form__input"
          state="primary"
        />
        <s-input
          :label-placeholder="$t('authInputPassword')"
          v-model="password"
          type="password"
          class="register-form__input"
          state="primary"
        />
        <s-input
          :label-placeholder="$t('authInputConfirmPassword')"
          v-model="passwordCheck"
          type="password"
          class="register-form__input"
          state="primary"
        />
        <div class="register-form__functional">
          <button type="submit" class="register-form__button">
            {{ $t("authRegisterButtonText") }}
          </button>
          <div class="register-form__link-text register-form__link-container">
            {{ $t("authRegisterHaveAccountText") }}
            <router-link to="/auth/login" class="register-form__link">{{
              $t("authRegisterLoginText")
            }}</router-link>
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
      name: "",
      surname: "",
      email: "",
      password: "",
      passwordCheck: ""
    };
  },
  methods: {
    async register() {
      if (this.password.trim() == this.passwordCheck.trim()) {
        let data = {
          firstName: this.name,
          lastName: this.surname,
          email: this.email,
          password: this.password
        };

        const loading = this.$vs.loading({ color: "#384a62" });
        await this.$store
          .dispatch("register", data)
          .then(() => loading.close())
          .then(() => this.$router.push("/app/home"))
          .catch(() => {
            loading.close();
            this.openNotification(
              "top-center",
              "danger",
              "Что-то пошло не так",
              "Проверьте ваше подключение к интернету и повторите еще раз"
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

<style lang="scss">
@import "@/assets/styles/variables.scss";

.register-form {
  height: fit-content;
  width: 50%;
}

.register-form__inner {
  padding-left: 10%;
  box-sizing: border-box;
  width: 100%;
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

.vs-input__label--placeholder {
  font-size: 16px !important;
  padding-left: 10px !important;
}

.vs-input {
  width: 100%;
  font-size: 1.3vw;
}

.register-form__functional {
  margin-top: 2%;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.register-form__button {
  padding: 7px 23px;
  color: white;
  font-size: 1.2vw;
  border: 2px solid $color-2;
  border-radius: 15px;
  background-color: $color-2;
  transition: 150ms ease-in-out;
  cursor: pointer;
}

.register-form__button:hover {
  background-color: white;
  color: $color-2;
}

.register-form__link-container {
  margin-left: 3%;
}

.register-form__link-text {
  font-size: 1vw;
  color: #2e2e3d;
}

.register-form__link {
  margin-left: 5px;
  text-decoration: none;
  color: $color-2;
}

@media (max-width: 950px) {
  .register-form {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .register-form__heading {
    font-size: 30px;
  }

  .register-form__inner {
    padding-left: 0;
    width: 280px;
    align-items: center;
  }

  .register-form__input {
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
    background-color: #ffffff;
  }

  .register-form__functional {
    flex-direction: column;
  }

  .register-form__button {
    font-size: 20px;
  }

  .register-form__link-text {
    margin-top: 20px;
    font-size: 15px;
  }
}
</style>
