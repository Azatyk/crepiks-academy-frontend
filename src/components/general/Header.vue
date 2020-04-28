<template>
  <header class="header">
    <logo class="header__logo" />
    <nav class="header__nav nav">
      <router-link to="#" class="header__link">Курсы</router-link>
      <router-link to="#" class="header__link">Подписка</router-link>
      <router-link to="#" class="header__link">Блог</router-link>
    </nav>
    <div class="header__buttons"></div>
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
</style>
