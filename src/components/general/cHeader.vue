<template>
  <header class="header">
    <div class="content">
      <cLogo class="header__logo" />
      <nav class="header__nav">
        <router-link to="/courses" class="header__link">Курсы</router-link>
        <router-link to="#" class="header__link">Подписка</router-link>
        <router-link to="#" class="header__link">Блог</router-link>
      </nav>
      <div class="header__auth-links" v-if="!isLoggedIn">
        <cButton route="/login" text="Войти" isBold="" />
        <cButton route="/register" text="Регистрация" isBold="" />
      </div>
      <button class="header__auth-button" @click="logout" v-else>Выйти</button>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import cLogo from "@/components/general/cLogo";
import cButton from "@/components/general/cButton";

export default {
  components: {
    cLogo,
    cButton
  },
  methods: mapMutations(["logout"]),
  computed: mapGetters(["isLoggedIn"])
};
</script>

<style scoped>
.header {
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  height: 10vh;
}

.content {
  margin: auto;
  height: 100%;
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.header__nav {
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.header__link {
  margin-right: 12%;
  font-size: 1vw;
  color: #dbdbdb;
  text-decoration: none;
  transition: 300ms ease-in-out;
}

.header__link:hover {
  color: white;
  transition: 300ms ease-in-out;
}

.header__auth-links {
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
