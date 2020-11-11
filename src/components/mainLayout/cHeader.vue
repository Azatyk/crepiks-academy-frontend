<template>
  <div class="header">
    <div class="header__user" v-if="isLoggedIn" @click="$emit('open-profile')">
      <i class="bx bx-user-circle header__user-icon"></i>
      <div class="header__user-name">
        {{ user.lastName }} {{ user.firstName }}
      </div>
    </div>
    <div class="header__button" v-else @click="$router.push('/auth/login')">
      {{ $t("headerLoginButtonText") }}
    </div>
    <template>
      <div class="select-local">
        <vs-select
          placeholder="Select"
          v-model="language"
          class="form__select"
          color="#0d0b6d"
          @change="setLocale"
        >
          <vs-option label="Русский" value="ru">
            Русский
          </vs-option>
          <!-- <vs-option label="Қазақша" value="kz">
            Қазақша
          </vs-option>
          <vs-option label="English" value="en">
            English
          </vs-option> -->
        </vs-select>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      user: {
        firstName: null,
        lastName: null
      },
      language: "ru"
    };
  },

  computed: mapGetters(["userData", "currentLanguage", "isLoggedIn"]),

  methods: {
    ...mapMutations(["changeLanguage"]),

    setLocale() {
      this.changeLanguage(this.language);
      this.$i18n.locale = this.language;
    }
  },

  mounted() {
    this.user = this.userData;
    this.language = this.currentLanguage;
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.header {
  margin: auto;
  margin-top: 30px;
  padding: 0 2%;
  width: 100%;
  max-width: 1200px;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &__user {
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: 150ms ease-in-out;
    opacity: 0.8;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      opacity: 1;
    }

    &-icon {
      margin-right: 15px;
      font-size: 25px;
      color: $color-2;
    }

    &-name {
      font-size: 20px;
      color: $color-2;
    }
  }

  &__button {
    padding: 7px 20px;
    color: $color-3;
    font-size: 17px;
    border: 2px solid $color-2;
    border-radius: 15px;
    background-color: $color-2;
    transition: 150ms ease-in-out;
    cursor: pointer;

    &:hover {
      color: $color-2;
      background-color: $color-3;
    }
  }

  @media (max-width: 1200px) {
    & {
      padding: 0 5%;
    }
  }

  @media (max-width: 650px) {
    & {
      &__user {
        &-icon {
          margin-right: 8px;
        }

        &-name {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
