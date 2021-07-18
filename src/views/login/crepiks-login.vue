<template>
  <transition name="fadeIn" appear>
    <div class="login-page">
      <notification
        :isActive="isNotificationOpen"
        :heading="notificationHeading"
        :text="notificationText"
        @close-notification="isNotificationOpen = false"
        @open-notification="isNotificationOpen = true"
        status="error"
      />
      <div class="login-content">
        <router-link to="/home" class="login-back">
          <i class="bx bx-arrow-back login-back-icon"></i>
          На главную
        </router-link>
        <cForm
          @submit="login"
          class="login-form-container"
          subtitle="С возвращением"
          title="Войдите в аккаунт"
        >
          <cInput
            class="login-form-input"
            title="Почта"
            type="email"
            placeholder="Введите вашу почту"
            v-model="email"
          />
          <cInput
            class="login-form-input"
            title="Пароль"
            type="password"
            placeholder="Введите ваш пароль"
            v-model="password"
          />
          <cButton class="login-form-button" :isLoading="isLoading"
            >Войти</cButton
          >
          <p class="login-form-text">
            <span class="login-form-text-info">Все ещё нет аккаунта?</span>
            <router-link
              class="login-form-text login-form-text-link"
              to="/auth/register"
              >Создайте его!</router-link
            >
          </p>
        </cForm>
      </div>
    </div>
  </transition>
</template>

<script>
import cForm from "@/components/common/crepiks-form.vue";
import cInput from "@/components/common/crepiks-input.vue";
import cButton from "@/components/common/crepiks-button.vue";
import notification from "@/components/common/crepiks-notification";

export default {
  components: {
    cForm,
    cInput,
    cButton,
    notification
  },

  data() {
    return {
      email: "",
      password: "",
      isNotificationOpen: false,
      notificationHeading: "",
      notificationText: "",
      isLoading: false
    };
  },

  methods: {
    login() {
      if (this.email.trim() && this.password.trim()) {
        this.isLoading = true;
        const email = this.email.trim();
        const password = this.password.trim();
        this.$store
          .dispatch("login", { email, password })
          .then(() => {
            this.isLoading = false;
            this.$router.push("/app/courses");
          })
          .catch(() => {
            this.isLoading = false;
            this.isNotificationOpen = true;
            (this.notificationHeading = "Неверные данные"),
              (this.notificationText =
                "Неверная почта или пароль. Проверьте и попробуйте еще раз");
          });
      } else {
        this.isLoading = false;
        this.isNotificationOpen = true;
        this.notificationHeading = "Введите почту и пароль";
        this.notificationText =
          "Введите вашу почту и пароль. Не оставляйте поля пустыми";
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.login {
  &-page {
    width: 100%;
    height: 100vh;
    background-color: $background;
  }

  &-content {
    padding: 0.1px 0;
    margin: auto;
    width: 100%;
    max-width: 1140px;
    height: 100%;
  }

  &-back {
    position: relative;
    margin-top: 40px;
    margin-left: 30px;
    display: flex;
    align-items: center;
    color: $primary;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    z-index: 3;

    &-icon {
      margin-right: 5px;
      font-size: 20px;
    }
  }

  &-form {
    &-container {
      width: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }

    &-input {
      margin-bottom: 20px;
    }

    &-button {
      margin-top: 10px;
      width: 100%;
    }

    &-text {
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
  }
}

@media (max-width: 560px) {
  .login {
    &-back {
      display: none;
    }

    &-form {
      &-input {
        margin-bottom: 13px;
      }
    }
  }
}

@media (max-width: 374px) {
  .login {
    &-form {
      &-text {
        font-size: 12px;
      }
    }
  }
}

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 2s;
}
.fadeIn-enter,
.fadeIn-leave-to {
  opacity: 0;
}
</style>
