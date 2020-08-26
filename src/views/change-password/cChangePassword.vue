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
              <div class="input__label">Текущий пароль:</div>
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
            <s-button
              @click="changePassword"
              class="profile__button profile__save-button"
              >Сохранить</s-button
            >
            <s-button @click="$router.push('/profile')" class="profile__button"
              >Отмена</s-button
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Button from "vuesax/dist/vsButton";
import "vuesax/dist/vuesax.css";

export default {
  components: {
    "s-button": Button
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
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f7fc;
  border-radius: 20px;
  box-shadow: 0 0 10px #0000004d;
}

.profile__avatar-container {
  margin-right: 10%;
  width: 45%;
}

.profile__avatar-square {
  width: 100%;
  overflow: hidden;
  border-radius: 5%;
}

.profile__avatar {
  width: 100%;
}

.profile__inputs {
  width: 45%;
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
  width: 100%;
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
  justify-content: flex-start;
}

.profile__button {
  margin-right: 5%;
  font-size: 1vw;
}

.profile__save-button {
  background-color: #2ecc71;
  border: none;
}

.profile__save-button:hover {
  background-color: #5bed99;
}

@media (max-width: 1024px) {
  .profile {
    width: 90%;
  }

  .input__label {
    font-size: 2.5vw;
  }

  .input__input {
    font-size: 2.5vw;
  }

  .profile__button {
    height: 5.5vw;
    font-size: 2.5vw;
  }
}

@media (max-width: 700px) {
  .profile {
    flex-direction: column;
    border-radius: 5%;
  }

  .profile__avatar-container {
    margin-right: 0;
    margin-bottom: 5%;
    width: 100%;
    display: none;
  }

  .profile__inputs {
    width: 100%;
  }

  .input__label {
    font-size: 4vw;
  }

  .input__input {
    font-size: 4vw;
  }

  .profile__button {
    height: 10vw;
    font-size: 4vw;
  }
}
</style>
