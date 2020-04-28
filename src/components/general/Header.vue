<template>
  <header class="header">
    <logo class="header__logo" />
    <nav class="header__nav nav">
      <router-link to="#" class="header__link">Курсы</router-link>
      <router-link to="#" class="header__link">Подписка</router-link>
      <router-link to="#" class="header__link">Блог</router-link>
    </nav>
    <div class="header__auth-links">
      <router-link to="#" class="header__auth-link">Войти</router-link>
      <router-link to="#" class="header__auth-button">Регистрация</router-link>
    </div>
  </header>
</template>

<script>
import Logo from "@/components/general/Logo";

export default {
  components: {
    logo: Logo
  }
};
</script>

<style scoped>
.header {
  width: 80%;
  padding: 29px 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__link {
  margin-right: 55px;
  font-size: 16px;
  font-weight: 500;
  color: #767ead;
  text-decoration: none;
}

.header__auth-link {
  margin-right: 47px;
  font-size: 16px;
  font-weight: 500;
  color: #f8f7fc;
  text-decoration: none;
}

.header__auth-button {
  padding: 11px 33px;
  font-size: 16px;
  font-weight: 500;
  color: #a285fc;
  text-decoration: none;
  border-radius: 5px;
  background-color: #f8f7fc;
}
</style>
