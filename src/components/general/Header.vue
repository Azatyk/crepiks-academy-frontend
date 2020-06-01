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
      <router-link to="/register" class="header__auth-button"
        >Регистрация</router-link
      >
    </div>
    <button class="header__menu-open-button">
      <img
        src="@/assets/icons/bars_light.svg"
        alt="Bars icon"
        class="header__menu-open-icon"
      />
    </button>
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

.header__menu-open-button {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a285fc;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.header__menu-open-icon {
  width: 25px;
  display: none;
}

@media all and (max-width: 1100px) {
  .header__nav,
  .header__auth-links {
    display: none;
  }

  .header__menu-open-icon {
    display: block;
  }
}

@media all and (max-width: 400px) {
  .header {
    width: 90%;
  }
}
</style>
