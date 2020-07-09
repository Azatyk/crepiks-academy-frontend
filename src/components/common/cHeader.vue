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
  padding: 0 1vw;
  height: 2.2vw;
  font-size: 1.2vw;
}

.header__exit-button:hover {
  background-color: #f78f8f;
  transition: 300ms ease-in-out;
}

@media (max-width: 1024px) {
  .header__logo {
    font-size: 2.5vw;
  }

  .header__auth-button {
    padding: 0 2vw;
    height: 4.5vw;
    font-size: 2.5vw;
  }

  .header__nav {
    display: none;
  }
}

@media (max-width: 700px) {
  .header__logo {
    font-size: 3vw;
  }

  .header__auth-button {
    padding: 0 3vw;
    height: 7vw;
    font-size: 3vw;
  }
}
</style>
