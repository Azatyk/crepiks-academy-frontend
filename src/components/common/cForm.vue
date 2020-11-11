<template>
  <div class="form-page">
    <form @submit.prevent="$emit('submit')" class="form">
      <div class="form__info-block">
        <img
          src="@/assets/images/loginImage.png"
          alt="Login"
          class="form__image"
        />
      </div>
      <template>
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
      </template>
      <slot></slot>
    </form>
  </div>
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
    this.language = this.currentLanguage;
  },
  methods: {
    setLocale() {
      this.changeLanguage(this.language);
      this.$i18n.locale = this.language;
    },
    ...mapMutations(["changeLanguage"])
  },
  computed: {
    ...mapGetters(["currentLanguage"])
  }
};
</script>

<style scoped>
.form-page {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeeef6;
}

.form {
  position: relative;
  width: 65%;
  height: 85%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 10px 0px #0000001a;
  background-color: #f5f7f6;
  border-radius: 30px;
}

.form__select {
  position: absolute;
  right: 5%;
  top: 5%;
}

.form__info-block {
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2522a0;
  border-radius: 30px 0px 0px 30px;
  box-shadow: 0px 10px 10px 0px #0000001a;
}

.form__image {
  width: 70%;
}

@media (max-width: 1024px) {
  .form {
    width: 100%;
    height: 100%;
  }

  .form__info-block {
    display: none;
  }
}
</style>
