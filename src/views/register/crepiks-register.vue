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
        <router-link to="/home" class="register-back">
          <i class="bx bx-arrow-back register-back-icon"></i>
          На главную
        </router-link>
        <cForm
          @main-button-clicked="
            checkIsFormTrim('contacts', firstName, lastName)
          "
          class="register-form-container"
          subtitle="Мы — Crepiks. А ты?"
          title="Мы кажется не знакомы."
          buttonText="Далее"
          :activeForm="activeForm"
          v-if="activeForm == 'credentials'"
          @contacts-button-clicked="
            checkIsFormTrim('contacts', firstName, lastName)
          "
          @additional-button-clicked="
            checkIsFormTrim('contacts', firstName, lastName)
          "
        >
          <cInput
            class="register-form-input"
            title="Имя"
            type="text"
            placeholder="Как тебя зовут?"
            v-model="firstName"
          />
          <cInput
            class="register-form-input"
            title="Фамилия"
            type="text"
            placeholder="Какая у тебя фамилия?"
            v-model="lastName"
          />
        </cForm>
        <cForm
          @main-button-clicked="
            checkIsFormTrim('additional', email, phoneNumber)
          "
          class="register-form-container"
          subtitle="Еще пару вопросов"
          :title="'Привет, ' + firstName + '!'"
          buttonText="Далее"
          :activeForm="activeForm"
          v-if="activeForm == 'contacts'"
          @credentials-button-clicked="activeForm = 'credentials'"
          @additional-button-clicked="
            checkIsFormTrim('additional', email, phoneNumber)
          "
        >
          <cInput
            class="register-form-input"
            title="Почта"
            type="email"
            placeholder="Введите вашу почту"
            v-model="email"
          />
          <cInput
            class="register-form-input"
            title="Номер"
            v-mask="'+7(###)-###-##-##'"
            v-model="phoneNumber"
            placeholder="+7(707)-777-77-77"
          />
        </cForm>
        <cForm
          @main-button-clicked="register"
          class="register-form-container"
          subtitle="Мы правда рады, что ты тут"
          title="И последний шаг"
          buttonText="Завершить"
          :activeForm="activeForm"
          v-if="activeForm == 'additional'"
          :isLoading="isLoading"
          @credentials-button-clicked="activeForm = 'credentials'"
          @contacts-button-clicked="activeForm = 'contacts'"
        >
          <selectCheckbox
            class="register-form-select"
            title="Пол"
            :options="selectOptions"
            :chosenOption="chosenSelectOption"
            @option-clicked="selectOptionClicked"
          />
          <cInput
            class="register-form-input"
            title="Пароль"
            type="password"
            placeholder="Придумайте пароль"
            v-model="password"
          />
        </cForm>
      </div>
    </div>
  </transition>
</template>

<script>
import cForm from "@/components/register/crepiks-form-register";
import cInput from "@/components/common/crepiks-input";
import selectCheckbox from "@/components/common/crepiks-select-checkbox";
import notification from "@/components/common/crepiks-notification";

export default {
  components: {
    cForm,
    cInput,
    selectCheckbox,
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
      isLoading: false,
      activeForm: "credentials",
      selectOptions: ["Мужской", "Женский", "Не указывать"],
      chosenSelectOption: "Мужской"
    };
  },
  methods: {
    register() {
      if (this.password.trim()) {
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
            // setTimeout(() => {
            //   this.$root.$emit("open-modal");
            // }, 1);
            this.$router.push("/app/courses");
          })
          .catch(() => {
            this.isLoading = false;
            this.isNotificationOpen = true;
            (this.notificationHeading = "Что-то пошло нет так"),
              (this.notificationText =
                "Проверь подключение к интернету и попробуй еще раз");
          });
      } else {
        this.isLoading = false;
        this.isNotificationOpen = true;
        this.notificationHeading = "Заполни все поля";
        this.notificationText =
          "ы не сможем создать тебе аккаунт, если ты не расскажешь о себе";
      }
    },
    selectOptionClicked(option) {
      this.chosenSelectOption = option;
    },
    checkIsFormTrim(nextFormName, fisrtValue, secondValue) {
      if (fisrtValue.trim() && secondValue.trim()) {
        this.activeForm = nextFormName;
      } else {
        this.isLoading = false;
        this.isNotificationOpen = true;
        this.notificationHeading = "Заполни все поля";
        this.notificationText =
          "Мы не сможем создать тебе аккаунт, если ты не расскажешь о себе";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.register {
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

  &-form {
    &-container {
      position: absolute;
      width: 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }

    &-input {
      margin-bottom: 20px;
    }

    &-select {
      margin-bottom: 28px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 560px) {
  .register {
    &-back {
      margin-top: 30px;
      font-size: 14px;
    }

    &-form {
      &-input {
        margin-bottom: 15px;
      }

      &-select {
        margin-bottom: 23px;
      }
    }
  }
}

@media (max-width: 374px) {
  .register {
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
