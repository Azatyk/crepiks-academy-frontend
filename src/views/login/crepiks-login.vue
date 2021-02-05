<template>
  <div class="login-page">
    <cForm class="form-container">
      <cInput
        class="form-input"
        title="Почта"
        placeholder="Введите вашу почту"
      />
      <cInput
        class="form-input"
        title="Пароль"
        placeholder="Введите ваш пароль"
      />
      <cButton class="form-button" text="Войти" />
      <p class="form-text">
        <span class="form-text-info">Все ещё нет аккаунта?</span>
        <router-link class="form-text form-text-link" to="/auth/register"
          >Создайте его!</router-link
        >
      </p>
    </cForm>
  </div>
</template>

<script>
import cForm from "@/components/common/crepiks-form.vue";
import cInput from "@/components/common/crepiks-input.vue";
import cButton from "@/components/common/crepiks-button.vue";

export default {
  components: {
    cForm,
    cInput,
    cButton
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.login-page {
  padding: 0.1px;
  width: 100%;
  height: 100vh;
  background-color: $background;
}

.form-container {
  margin-top: 100px;
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
