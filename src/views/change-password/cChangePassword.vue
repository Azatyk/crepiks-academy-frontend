<template>
  <div class="change-password__page">
    <div class="content">
      <div class="profile">
        <div class="profile__avatar-container">
          <div class="profile__avatar-square">
            <img
              :src="userData.image"
              :alt="userData.firstName"
              class="profile__avatar"
            />
          </div>
        </div>
        <form @submit.prevent="changePassword" class="profile__inputs">
          <div class="input__write">
            <label>
              <div class="input__label">Ваш пароль:</div>
              <input
                type="text"
                class="input__input"
                v-model="passwords.currentPassword"
              />
            </label>
          </div>
          <div class="input__write">
            <label>
              <div class="input__label">Новый пароль:</div>
              <input
                type="text"
                class="input__input"
                v-model="passwords.newPassword"
              />
            </label>
          </div>
          <div class="input__write">
            <label>
              <div class="input__label">Подтверждение пароля:</div>
              <input
                type="text"
                class="input__input"
                v-model="passwords.newPasswordCheck"
              />
            </label>
          </div>
          <div class="profile__buttons">
            <cButton text="Сохранить" type="submit" appearanceType="positive" />
            <cButtonLink route="/profile" text="Отмена" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import cButton from "@/components/common/cButton";
import cButtonLink from "@/components/common/cButtonLink";
import { mapGetters } from "vuex";

export default {
  components: {
    cButton,
    cButtonLink
  },
  data() {
    return {
      passwords: {
        currentPassword: "",
        newPassword: "",
        newPasswordCheck: ""
      }
    };
  },
  computed: mapGetters(["userData"]),
  watch: {
    userData(updatedData) {
      this.user = updatedData;
    }
  },
  mounted() {
    if (this.userData.links) {
      this.user = this.userData;
    }
  },
  methods: {
    changePassword() {
      if (this.passwords.newPassword == this.passwords.newPasswordCheck) {
        const data = {
          currentPassword: this.passwords.currentPassword,
          newPassword: this.passwords.newPassword
        };
        this.$store.dispatch("changePassword", data);
      }
    }
  }
};
</script>

<style scoped>
.header {
  z-index: 2;
}

.message {
  z-index: 3;
}

.page__back-color {
  position: absolute;
  top: 0;
  width: 100%;
  height: 63vh;
  background-color: #34495e;
  z-index: 0;
}

.content {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile {
  padding: 3vh 4vh;
  width: 40%;
  height: 21vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f7fc;
  border-radius: 20px;
  box-shadow: 0 0 10px #0000004d;
  z-index: 2;
}

.profile__avatar-container {
  width: 20vw;
  height: 100%;
}

.profile__avatar-square {
  height: 17vw;
  width: 17vw;
  overflow: hidden;
  border-radius: 20px;
}

.profile__avatar {
  width: 100%;
}

.profile__inputs {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.input__write {
  margin-bottom: 5%;
  width: 100%;
}

.input__label {
  font-size: 1.2vw;
  color: #516f8c;
  font-weight: 300;
  cursor: pointer;
}

.input__input {
  padding: 1% 1%;
  font-size: 1.2vw;
  color: #516f8c;
  font-weight: 400;
  background-color: #f8f7fc;
  border: none;
  outline: none;
  border-bottom: 2px solid #8aa2ba;
}

.input__input:focus {
  border: none;
  border-bottom: 2px solid #34495e;
}

.profile__buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
