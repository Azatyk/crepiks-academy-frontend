<template>
  <div class="page">
    <cHeader pageType="common" />
    <cMessage
      :icon="messageIcon"
      :backColor="messageBackColor"
      :text="messageText"
      :isActive="isMessage"
      @change="messageVisibleChange"
    />
    <div class="content-container">
      <div class="content">
        <i
          class="fas fa-edit content__change-button"
          @click="changeTrigger"
          v-if="!isChange && !isChangePassword"
        ></i>
        <i
          class="fas fa-times-circle content__change-button"
          @click="changeTrigger"
          v-else-if="isChange || isChangePassword"
        ></i>
        <cButton @action="profileLogout" text="Выйти" class="logout" />
        <div class="content__user user">
          <div class="user__image-container">
            <img
              :src="userData.image"
              :alt="userData.firstName"
              class="user__image"
            />
          </div>
          <div class="user__text" v-if="!isChangePassword">
            <div class="user__data-element">
              <div class="user__text-label">Имя:</div>
              <div class="user__text-data" v-show="!isChange">
                {{ userData.firstName }}
              </div>
              <input
                type="text"
                class="user__text-input"
                v-model="firstName"
                v-show="isChange"
              />
            </div>
            <div class="user__data-element">
              <div class="user__text-label">Фамилия:</div>
              <div class="user__text-data" v-show="!isChange">
                {{ userData.lastName }}
              </div>
              <input
                type="text"
                class="user__text-input"
                v-model="lastName"
                v-show="isChange"
              />
            </div>
            <div class="user__data-element">
              <div class="user__text-label">Email:</div>
              <div class="user__text-data" v-show="!isChange">
                {{ userData.email }}
              </div>
              <input
                type="text"
                class="user__text-input"
                v-model="email"
                v-show="isChange"
              />
            </div>
          </div>
          <div class="user__text" v-else>
            <div class="user__data-element">
              <div class="user__text-label">Текущий пароль:</div>
              <input
                type="text"
                class="user__text-input"
                v-model="currentPassword"
              />
            </div>
            <div class="user__data-element">
              <div class="user__text-label">Новый пароль:</div>
              <input
                type="text"
                class="user__text-input"
                v-model="newPassword"
              />
            </div>
            <div class="user__data-element">
              <div class="user__text-label">Подтверждение пароля:</div>
              <input
                type="text"
                class="user__text-input"
                v-model="newPasswordCheck"
              />
            </div>
          </div>
          <cButton
            text="Сохранить"
            type="submit"
            v-if="isChange || isChangePassword"
            class="content__save-button"
            @action="changeData"
          />
          <div class="content__change-password" v-else @click="changePassword">
            Изменить пароль
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cHeader from "@/components/general/cHeader";
import cButton from "@/components/general/cButton";
import cMessage from "@/components/general/cMessage";
import { mapGetters } from "vuex";

export default {
  components: {
    cHeader,
    cButton,
    cMessage
  },
  data() {
    return {
      isChange: false,
      firstName: "",
      lastName: "",
      email: "",
      isMessage: false,
      messageText: "",
      messageIcon: "",
      messageBackColor: "",
      isChangePassword: false,
      currentPassword: "",
      newPassword: "",
      newPasswordCheck: ""
    };
  },
  computed: mapGetters(["userData"]),
  methods: {
    profileLogout() {
      this.$store.commit("logout");
      this.$router.push("/");
    },
    changeTrigger() {
      this.isChange = !this.isChange;
      if (this.isChangePassword) {
        this.isChange = false;
      }
      if (this.isChange) {
        this.firstName = this.userData.firstName;
        this.lastName = this.userData.lastName;
        this.email = this.userData.email;
      }
      if (this.isChangePassword) {
        this.isChangePassword = false;
      }
    },
    changeData() {
      if (this.isChange) {
        this.$store
          .dispatch("changeUserData", {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
          })
          .then(res => {
            this.changeTrigger();
            if (res.status == 200) {
              this.messageText = "Профиль изменен";
              this.messageIcon = "fas fa-check-circle";
              this.messageBackColor = "#2ecc71";
              this.isMessage = true;
            }
          });
      } else if (this.isChangePassword) {
        if (this.newPassword == this.newPasswordCheck) {
          const data = {
            currentPassword: this.currentPassword,
            newPassword: this.newPassword
          };
          this.$store
            .dispatch("changePassword", data)
            .then(res => {
              if (res.status == 200) {
                this.messageText = "Пароль изменен";
                this.messageIcon = "fas fa-check-circle";
                this.messageBackColor = "#2ecc71";
                this.isMessage = true;
              }
            })
            .catch(err => {
              this.messageText = err.response.data.message;
              this.messageIcon = "fas fa-times-circle";
              this.messageBackColor = "#FC7979";
              this.isMessage = true;
            });
        } else {
          this.messageText = "Пароли должны совпадать";
          this.messageIcon = "fas fa-times-circle";
          this.messageBackColor = "#FC7979";
          this.isMessage = true;
        }
      }
    },
    messageVisibleChange(status) {
      this.isMessage = status;
    },
    changePassword() {
      this.isChangePassword = true;
    }
  }
};
</script>

<style scoped>
.page {
  height: 100vh;
  width: 100%;
  background-color: #34495e;
}

.content-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  position: relative;
  width: 80%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f7fc;
  border-radius: 20px;
}

.user {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.user__image-container {
  margin-right: 7%;
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  overflow: hidden;
}

.user__image {
  width: 100%;
}

.user__text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.user__data-element {
  margin-bottom: 7%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.user__text-label {
  margin-right: 5%;
  width: 15vw;
  font-size: 1.5vw;
  color: #5a728a;
}

.user__text-data {
  font-size: 2.5vw;
  color: #34495e;
}

.logout {
  position: absolute;
  top: 5%;
  right: 5%;
  font-size: 1.5vw;
}

.content__change-button {
  position: absolute;
  top: 6.5%;
  right: 20%;
  font-size: 2vw;
  color: #fc7979;
  cursor: pointer;
}

.user__text-input {
  padding: 2% 5%;
  height: 1.5vw;
  min-width: 13vw;
  width: auto;
  font-size: 1.5vw;
  color: #34495e;
  border: 1px solid #4c6b8a;
  border-radius: 5px;
  background-color: #dae4eb;
}

.content__save-button {
  position: absolute;
  right: 5%;
  bottom: 5%;
  font-size: 1.5vw;
}

.content__change-password {
  position: absolute;
  right: 5%;
  bottom: 5%;
  font-size: 1.5vw;
  color: #34495e;
  cursor: pointer;
  text-decoration: underline;
}
</style>
