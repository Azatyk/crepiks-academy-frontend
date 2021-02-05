<template>
  <div class="register-page">
    <cForm class="form-container">
      <cInput
        class="form-input"
        title="Имя"
        type="text"
        placeholder="Как вас зовут?"
      />
      <cInput
        class="form-input"
        title="Фамилия"
        type="text"
        placeholder="Какая у вас фамилия?"
      />
      <cInput
        class="form-input"
        title="Почта"
        type="email"
        placeholder="Введите вашу почту"
      />
      <cInput
        class="form-input"
        title="Пароль"
        type="password"
        placeholder="Придумайте пароль"
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
</template>

<script>
import cForm from "@/components/common/crepiks-form";
import cInput from "@/components/common/crepiks-input";
import cButton from "@/components/common/crepiks-button";

export default {
  components: {
    cForm,
    cInput,
    cButton
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.register-page {
  padding: 0.1px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $background;
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
</style>
