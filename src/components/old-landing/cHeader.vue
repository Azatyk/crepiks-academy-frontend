<template>
  <header class="header" id="header">
    <router-link to="/" class="header__logo-link">
      <div class="header__logo">
        Crepiks
      </div>
    </router-link>
    <nav class="header__navigation">
      <a class="header__navigation-link" href="#whatfor">{{
        $t("headerWhatForLinkText")
      }}</a>
      <a class="header__navigation-link" href="#how">{{
        $t("headerHowLinkText")
      }}</a>
      <a class="header__navigation-link" href="#aboutcourse">{{
        $t("headerAboutCourseLinkText")
      }}</a>
      <a class="header__navigation-link" href="#aboutending">{{
        $t("headerAboutEndingLinkText")
      }}</a>
      <template>
        <div class="center">
          <vs-select
            placeholder="Select"
            v-model="language"
            class="header__select"
            color="#0d0b6d"
            @change="setLocale"
          >
            <vs-option label="Русский" value="ru">
              Русский
            </vs-option>
            <vs-option label="Қазақша" value="kz">
              Қазақша
            </vs-option>
            <vs-option label="English" value="en">
              English
            </vs-option>
          </vs-select>
        </div>
      </template>
      <div class="header__button" @click="$router.push('/auth/login')">
        {{ $t("headerLoginButtonText") }}
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      language: "ru"
    };
  },
  mounted() {
    this.language = this.currentLanguage();
  },
  methods: {
    setLocale() {
      this.changeLanguage(this.language);
      this.$i18n.locale = this.language;
    },
    ...mapGetters(["currentLanguage"]),
    ...mapMutations(["changeLanguage"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.header {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  padding: 0 2%;
  width: 100%;
  max-width: 1300px;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  font-size: 35px;
  font-weight: bold;
  color: $color-1;
}

.header__logo-link {
  text-decoration: none;
}

.header__logo-main {
  color: $color-2;
  font-weight: 900;
}

.header__navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header__navigation-link {
  display: block;
  font-size: 17px;
  margin-right: 30px;
  color: $color-5;
  text-decoration: none;
  opacity: 0.6;
  cursor: pointer;
  transition: 150ms ease-in-out;
}

.header__navigation-link:hover {
  opacity: 1;
  transition: 150ms ease-in-out;
}

.header__link-button {
  padding: 3px 5px;
  margin-left: 50px;
  font-size: 17px;
  font-weight: 400;
  cursor: pointer;
}

.header__button {
  margin-left: 20px;
  padding: 8px 30px;
  font-size: 17px;
  color: $color-4;
  background-color: $color-2;
  border: 2px solid $color-2;
  border-radius: 15px;
  transition: 170ms;
  cursor: pointer;
}

.header__button:hover {
  color: $color-2;
  background-color: $color-3;
  border: 2px solid $color-2;
}

@media (max-width: 1200px) {
  .header {
    padding: 0 5%;
  }

  .header__navigation-link {
    margin-right: 20px;
    font-size: 15px;
  }

  .header__button {
    padding: 6px 30px;
  }
}

@media (max-width: 1024px) {
  .header {
    padding: 0 8%;
  }

  .header__logo {
    font-size: 40px;
  }

  .header__navigation-link {
    display: none;
  }

  .header__button {
    padding: 10px 30px;
    font-size: 20px;
  }
}

@media (max-width: 650px) {
  .header {
    padding: 0 5%;
  }

  .header__logo {
    font-size: 7vw;
  }

  .header__navigation {
    justify-content: flex-end;
  }

  .header__button {
    margin-left: 15px;
    padding: 2.5% 7%;
    font-size: 3.8vw;
  }
}
</style>
