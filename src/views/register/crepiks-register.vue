<template>
  <transition name="fadeIn" appear>
    <div class="register-page">
      <notification
        :isActive="isNotificationOpen"
        :heading="notificationHeading"
        :text="notificationText"
        @close-notification="isNotificationOpen = false"
        status="error"
      />
      <div class="register-content">
        <router-link to="/" class="register-back">
          <i class="bx bx-arrow-back register-back-icon"></i>
          На главную
        </router-link>
        <cForm
          @submit="register"
          class="form-container"
          subtitle="Добро пожаловать"
          title="Создайте аккаунт"
        >
          <cInput
            class="form-input"
            title="Имя"
            type="text"
            placeholder="Как вас зовут?"
            v-model="firstName"
          />
          <cInput
            class="form-input"
            title="Фамилия"
            type="text"
            placeholder="Какая у вас фамилия?"
            v-model="lastName"
          />
          <cInput
            class="form-input"
            title="Почта"
            type="email"
            placeholder="Введите вашу почту"
            v-model="email"
          />
          <cInput
            class="form-input"
            title="Номер"
            v-mask="'+7(###)-###-##-##'"
            v-model="phoneNumber"
            placeholder="+7(707)-777-77-77"
          />
          <cInput
            class="form-input"
            title="Пароль"
            type="password"
            placeholder="Придумайте пароль"
            v-model="password"
          />
          <cButton class="form-button" text="Войти" />
          <p class="form-text">
            <span class="form-text-info">Вы уже с нами?</span>
            <router-link class="form-text form-text-link" to="/auth/login"
              >Войдите в аккаунт!</router-link
            >
          </p>
        </cForm>
      </div>
    </div>
  </transition>
</template>

<script>
import cForm from "@/components/common/crepiks-form";
import cInput from "@/components/common/crepiks-input";
import cButton from "@/components/common/crepiks-button";
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
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      isNotificationOpen: false,
      notificationHeading: "",
      notificationText: "",
      isLoading: false
    };
  },

  methods: {
    register() {
      if (
        this.firstName.trim() &&
        this.lastName.trim() &&
        this.email.trim() &&
        this.phoneNumber.trim() &&
        this.password.trim()
      ) {
        this.isLoading = true;

        const user = {
          firstName: this.firstName.trim(),
          lastName: this.lastName.trim(),
          email: this.email.trim(),
          phoneNumber: `7${this.phoneNumber.trim()[3] +
            this.phoneNumber.trim()[4] +
            this.phoneNumber.trim()[5] +
            this.phoneNumber.trim()[8] +
            this.phoneNumber.trim()[9] +
            this.phoneNumber.trim()[10] +
            this.phoneNumber.trim()[12] +
            this.phoneNumber.trim()[13] +
            this.phoneNumber.trim()[15] +
            this.phoneNumber.trim()[16]}`,
          password: this.password.trim()
        };

        this.$store
          .dispatch("register", user)
          .then(() => {
            this.isLoading = false;
            setTimeout(() => {
              this.$root.$emit("open-modal");
            }, 1);
            this.$router.push("/app/courses");
          })
          .catch(() => {
            this.isLoading = false;
            this.isNotificationOpen = true;
            (this.notificationHeading = "Что-то пошло нет так"),
              (this.notificationText =
                "Проверьте ваше подключение к интернету и попробуйте еще раз");
          });
      } else {
        this.isLoading = false;
        this.isNotificationOpen = true;
        this.notificationHeading = "Заполните все поля";
        this.notificationText =
          "Мы не сможем создать вам аккаунт, если вы не расскажите о себе";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.register-page {
  width: 100%;
  height: 100vh;
  background-color: $background;
}

.register-content {
  padding: 0.1px 0;
  margin: auto;
  width: 100%;
  max-width: 1140px;
  height: 100%;
}

.register-back {
  position: relative;
  margin-top: 40px;
  display: flex;
  align-items: center;
  color: $primary;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  margin-left: 30px;
  z-index: 3;

  &-icon {
    margin-right: 5px;
    font-size: 20px;
  }
}

.form-container {
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.form-input {
  margin-bottom: 20px;
}

.form-button {
  margin-top: 10px;
  width: 100%;
}

.form-text {
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

@media (max-width: 560px) {
  .register-back {
    margin-top: 30px;
    font-size: 14px;
  }

  .form-input {
    margin-bottom: 15px;
  }
}

@media (max-width: 374px) {
  .form-text {
    font-size: 12px;
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
