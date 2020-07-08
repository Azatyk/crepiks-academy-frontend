<template>
  <header class="header">
    <div class="content">
      <cLogo class="header__logo" />
      <a-button
        type="primary"
        v-show="pageType == 'common' || pageType == 'register'"
        @click="$router.push('/auth/login')"
        class="header__auth-button"
      >
        Вход
      </a-button>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import cLogo from "@/components/common/cLogo";
import { Button } from "ant-design-vue";

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
    "a-button": Button
  },
  methods: mapMutations(["logout"]),
  computed: mapGetters(["isLoggedIn", "userData"])
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

.header__logo {
  font-size: 1.2vw;
}

.header__auth-button {
  padding: 0 3vw;
  height: 6vw;
  font-size: 3vw;
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
  width: auto;
  text-decoration: none;
}

.profile__data {
  width: auto;
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
  .header__logo {
    font-size: 2.5vw;
  }

  .header__nav {
    display: none;
  }

  .profile__first-name {
    font-size: 3vw;
  }

  .profile__image-container {
    width: 7vw;
    height: 7vw;
  }
}

@media (max-width: 700px) {
  .header__logo {
    font-size: 3vw;
  }

  .profile__first-name {
    font-size: 4vw;
  }

  .profile__image-container {
    width: 9vw;
    height: 9vw;
  }
}
</style>
