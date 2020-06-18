<template>
  <div class="page">
    <cHeader type="common" />
    <cMessage
      class="message"
      :icon="messageIcon"
      :text="messageText"
      :backColor="messageBackColor"
      :textColor="messageTextColor"
      :isActive="isMessageActive"
      @change="messageVisibleChange"
    />
    <div class="page__back-color"></div>
    <div class="content">
      <div class="profile">
        <div class="profile__main">
          <div class="profile__avatar-container">
            <div class="profile__avatar-square">
              <img
                :src="userData.image"
                :alt="userData.firstName"
                class="profile__avatar"
              />
            </div>
            <input type="file" ref="file" @change="changeImage" id="file" />
            <cButton text="Изменить" @action="submitImage" />
          </div>
          <div class="profile__main-inputs">
            <div class="input__write">
              <label>
                <div class="input__label">Имя:</div>
                <input
                  type="text"
                  class="input__input"
                  v-model="user.firstName"
                />
              </label>
            </div>
            <div class="input__write">
              <label>
                <div class="input__label">Фамилия:</div>
                <input
                  type="text"
                  class="input__input"
                  v-model="user.lastName"
                />
              </label>
            </div>
            <div class="input__write">
              <label>
                <div class="input__label">Email:</div>
                <input type="email" class="input__input" v-model="user.email" />
              </label>
            </div>
            <div class="input__write">
              <label>
                <div class="input__label">Расскажите о себе:</div>
                <input
                  type="text"
                  class="input__input"
                  v-model="user.description"
                  maxlength="250"
                />
              </label>
            </div>
          </div>
        </div>
        <div class="profile__extra">
          <div class="profile__extra-inputs">
            <div class="input__write">
              <label>
                <div class="input__label birthday__input">Дата рождения:</div>
                <date-picker
                  class="calendar"
                  v-model="user.birthday"
                  valueType="format"
                ></date-picker>
              </label>
            </div>
            <div class="input__write">
              <label>
                <div class="input__label">Телефон:</div>
                <input type="text" class="input__input" v-model="user.phone" />
              </label>
            </div>
            <div class="input__write">
              <label>
                <div class="input__label">Адрес:</div>
                <input
                  type="text"
                  class="input__input"
                  v-model="user.address"
                />
              </label>
            </div>
            <div class="profile__extra-buttons">
              <cButton
                text="Сохранить"
                appearanceType="positive"
                class="profile__extra-button"
                @action="changeData"
              />
              <cButtonLink
                route="/profile"
                text="Отмена"
                class="profile__extra-button"
              />
            </div>
          </div>
          <div class="profile__links">
            <div class="input__write">
              <label>
                <div class="input__label">Github:</div>
                <input
                  type="url"
                  class="input__input"
                  v-model="user.links.github"
                />
              </label>
            </div>
            <div class="input__write">
              <label>
                <div class="input__label">Linkedin:</div>
                <input
                  type="url"
                  class="input__input"
                  v-model="user.links.linkedIn"
                />
              </label>
            </div>
            <div class="input__write">
              <label>
                <div class="input__label">Instagram:</div>
                <input
                  type="url"
                  class="input__input"
                  v-model="user.links.instagram"
                />
              </label>
            </div>
            <div class="input__write">
              <label>
                <div class="input__label">Вконтакте:</div>
                <input
                  type="url"
                  class="input__input"
                  v-model="user.links.vk"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cHeader from "@/components/general/cHeader";
import cButton from "@/components/general/cButton";
import cButtonLink from "@/components/general/cButtonLink";
import cMessage from "@/components/general/cMessage";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { mapGetters } from "vuex";

export default {
  components: {
    cHeader,
    cButton,
    cButtonLink,
    cMessage,
    DatePicker
  },
  data() {
    return {
      user: {
        links: {}
      },
      file: "",
      messageIcon: "",
      messageText: "",
      messageBackColor: "",
      messageTextColor: "",
      isMessageActive: false
    };
  },
  computed: mapGetters(["userData"]),
  watch: {
    userData(updatedUserData) {
      this.user = updatedUserData;
    }
  },
  mounted() {
    if (this.userData.links) {
      this.user = this.userData;
    }
  },
  methods: {
    changeData() {
      if (this.user.firstName.trim() != "" && this.user.lastName.trim() != "") {
        this.$store
          .dispatch("changeUserData", this.user)
          .then(() => {
            this.messageIcon = "fas fa-check-circle";
            this.messageText = "Профиль изменен";
            this.messageBackColor = "#2ecc71";
            this.messageTextColor = "white";
            this.isMessageActive = true;
          })
          .catch(err => {
            this.messageIcon = "fas fa-times-circle";
            this.messageText = err.response.message;
            this.messageBackColor = "#FC7979";
            this.messageTextColor = "#dbdbdb";
            this.isMessageActive = true;
          });
      } else {
        this.messageIcon = "fas fa-times-circle";
        this.messageText = "Введите имя и фамилию";
        this.messageBackColor = "#FC7979";
        this.messageTextColor = "#dbdbdb";
        this.isMessageActive = true;
      }
    },
    changeImage() {
      this.file = this.$refs.file.files[0];
    },
    submitImage() {
      this.$store
        .dispatch("changeImage", this.file)
        .then(() => console.log("success"))
        .catch(err => console.log(err, err.response));
    },
    messageVisibleChange(status) {
      this.isMessageActive = status;
    }
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 100vh;
  background-color: #f8f7fc;
}

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
  height: 70vh;
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
  margin-top: 3%;
  padding: 3vh 4vh;
  width: 40%;
  height: 40vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f7fc;
  border-radius: 20px;
  box-shadow: 0 0 10px #757575;
  z-index: 2;
}

.profile__main {
  margin-bottom: 5%;
  height: 45%;
  width: 100%;
  height: 17vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
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

.profile__main-inputs {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
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

.profile__extra {
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.profile__extra-inputs {
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.profile__links {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.profile__extra-buttons {
  margin-top: 5%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flexstart;
  align-items: flex-end;
}

.profile__extra-button {
  margin-right: 5%;
}

.birthday__input {
  margin-bottom: 3%;
}

.calendar {
  width: 81%;
}
</style>
