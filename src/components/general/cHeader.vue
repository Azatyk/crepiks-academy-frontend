<template>
  <header class="header">
    <div class="content">
      <cLogo class="header__logo" :fontSize="1.3" />
      <nav class="header__nav">
        <router-link to="/courses" class="header__link">Курсы</router-link>
        <router-link to="/empty" class="header__link">Подписка</router-link>
        <router-link to="/empty" class="header__link">Блог</router-link>
      </nav>
      <div
        class="header__auth-links"
        v-if="!isLoggedIn"
        :class="[
          pageType == 'register' || pageType == 'login' ? 'centerlize' : ''
        ]"
      >
        <cButtonLink
          v-show="pageType == 'common' || pageType == 'register'"
          route="/login"
          text="Вход"
          isBold=""
          class="header__auth-button"
        />
        <cButtonLink
          route="/register"
          text="Регистрация"
          isBold=""
          v-show="pageType == 'common' || pageType == 'login'"
          class="header__auth-button"
        />
      </div>
      <div class="header__auth-links centerlize" v-else>
        <cButton @action="logout" text="Выйти">Выйти</cButton>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import cLogo from "@/components/general/cLogo";
import cButtonLink from "@/components/general/cButtonLink";
import cButton from "@/components/general/cButton";

export default {
  props: {
    pageType: {
      type: String,
      required: false,
      default: "common"
    }
  },

  components: {
    cLogo,
    cButtonLink,
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
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: none;
}

.header__auth-button {
  box-shadow: none;
}

.centerlize {
  justify-content: center;
}

.header__exit-button {
  padding: 11px 35px;
  width: auto;
  font-size: 0.8vw;
  color: white;
  font-weight: 300;
  text-decoration: none;
  border: none;
  background-color: #fc7979;
  border-radius: 4px;
  cursor: pointer;
  transition: 300ms ease-in-out;
  box-shadow: none;
}

.header__exit-button:hover {
  background-color: #f78f8f;
  transition: 300ms ease-in-out;
}
</style>
