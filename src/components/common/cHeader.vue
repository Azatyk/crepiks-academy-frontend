<template>
  <header class="header">
    <div class="content">
      <cLogo class="header__logo" :fontSize="adaptiveSize" />
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
        <router-link to="/profile" class="profile__link">
          <div class="profile__data">
            <div class="profile__first-name">{{ userData.firstName }}</div>
            <div class="profile__image-container">
              <img
                :src="userData.image"
                :alt="userData.firstName"
                class="profile__image"
              />
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import cLogo from "@/components/common/cLogo";
import cButtonLink from "@/components/common/cButtonLink";

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
    cButtonLink
  },
  methods: mapMutations(["logout"]),
  computed: {
    ...mapGetters(["isLoggedIn", "userData"]),
    adaptiveSize() {
      if (document.body.clientWidth > 1024) {
        return 1.3;
      } else if (document.body.clientWidth <= 1024) {
        return 2.5;
      } else return 0;
    }
  }
};
</script>

<style scoped>
.header {
  position: absolute;
  height: 10vh;
  width: 100%;
  box-sizing: border-box;
  background-color: #f8f7fc;
}

.content {
  margin: auto;
  height: 100%;
  width: 85%;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  color: #516f8c;
  text-decoration: none;
  transition: 300ms ease-in-out;
}

.header__link:hover {
  color: #34495e;
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
  padding: 0.7vw 1.5vw;
  box-shadow: none;
}

.centerlize {
  justify-content: flex-end;
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

.profile__link {
  width: 70%;
  text-decoration: none;
}

.profile__data {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.profile__first-name {
  margin-right: 10px;
  font-size: 1.3vw;
  color: #fc7979;
  font-weight: 300;
}

.profile__image-container {
  width: 2.5vw;
  height: 2.5vw;
  border-radius: 50%;
  overflow: hidden;
}

.profile__image {
  width: 100%;
}

@media (max-width: 1024px) {
  .profile__first-name {
    font-size: 2.5vw;
  }

  .profile__image-container {
    width: 5vw;
    height: 5vw;
  }
}
</style>
