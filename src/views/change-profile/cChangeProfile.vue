<template>
  <div class="profile__page">
    <div class="content">
      <div class="profile">
        <div class="profile__main">
          <div class="profile__avatar-container">
            <div class="profile__avatar-square">
              <img
                :src="`${user.image}?postfix=${imagePostfix}`"
                :alt="user.firstName"
                class="profile__avatar"
              />
              <div class="black-background" @click="showModal">
                Изменить аватар
              </div>
              <a-modal
                v-model="visible"
                title="Изменение фотографии"
                class="profile__modal"
              >
                <template slot="footer">
                  <s-button
                    key="cancel"
                    @click="handleCancel"
                    class="profile__modal-button"
                  >
                    Отмена
                  </s-button>
                  <s-button
                    key="save"
                    :loading="loading"
                    @click="submitImage"
                    class="profile__modal-button profile__save-button"
                  >
                    Сохранить
                  </s-button>
                </template>
                <input type="file" ref="file" id="file" class="input-file" />
                <label for="file" class="input-file__label">
                  Загрузить файл
                </label>
              </a-modal>
            </div>
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
                <a-date-picker
                  class="calendar"
                  :size="adaptivitySize"
                  @change="changeDate"
                />
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
              <s-button
                @click="changeData"
                class="profile__extra-button profile__save-button"
              >
                Сохранить
              </s-button>
              <s-button
                @click="$router.push('/profile')"
                class="profile__extra-button"
              >
                Отмена
              </s-button>
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
import { message, Modal, DatePicker } from "ant-design-vue";
import { mapGetters } from "vuex";

import Button from "vuesax/dist/vsButton";
import "vuesax/dist/vuesax.css";

export default {
  components: {
    "a-date-picker": DatePicker,
    "s-button": Button,
    "a-modal": Modal
  },
  data() {
    return {
      user: {
        links: {}
      },
      file: "",
      loading: false,
      visible: false,
      imagePostfix: null
    };
  },
  computed: {
    ...mapGetters(["userData"]),
    adaptivitySize() {
      if (document.body.clientWidth <= 700) {
        return "small";
      } else {
        return "large";
      }
    }
  },
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
    changeDate(date, dateString) {
      this.user.birthday = dateString;
    },
    changeData() {
      if (this.user.firstName.trim() != "" && this.user.lastName.trim() != "") {
        this.$store
          .dispatch("changeUserData", this.user)
          .then(() => this.$router.push("/profile"));
      } else {
        message.eror("Введите имя и фамилию");
      }
    },
    submitImage() {
      this.loading = true;
      this.file = this.$refs.file.files[0];
      this.$store.dispatch("changeImage", this.file).then(() => {
        this.loading = false;
        this.user = this.userData;
        this.imagePostfix = this.getRandomInt(100000);
      });
    },
    showModal() {
      this.visible = true;
    },
    handleCancel() {
      this.visible = false;
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  }
};
</script>

<style scoped>
.profile__page {
  width: 100%;
  height: 100vh;
  background-color: #f8f7fc;
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
  min-height: 40vw;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f7fc;
  border-radius: 20px;
  box-shadow: 0 0 10px #0000004d;
}

.profile__main {
  margin-bottom: 5%;
  height: 50%;
  width: 100%;
  height: 17vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.profile__avatar-container {
  width: 55%;
  height: 100%;
}

.profile__avatar-square {
  position: relative;
  height: 17vw;
  width: 17vw;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile__modal-button {
  height: 2vw;
  font-size: 1vw;
}

.profile__save-button {
  background-color: #2ecc71;
  border: none;
}

.profile__save-button:hover {
  background-color: #5bed99;
}

.profile__save-button:active {
  background-color: #5bed99;
}

.profile__avatar-square:hover .black-background {
  opacity: 1;
  transition: 300ms ease-in-out;
}

.profile__avatar-square:hover .input-label {
  opacity: 1;
  transition: 300ms ease-in-out;
}

.profile__avatar {
  width: 100%;
}

.input-label {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5vw;
  font-weight: 700;
  color: white;
  cursor: pointer;
  z-index: 3;
  transition: 300ms ease-in-out;
  opacity: 0;
}

.black-background {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.5vw;
  color: #f8f7fc;
  font-weight: 500;
  align-items: center;
  z-index: 3;
  background-color: #00000080;
  transition: 300ms ease-in-out;
  cursor: pointer;
  opacity: 0;
}

.profile__main-inputs {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.input__write {
  padding: 0;
  margin: 0;
  margin-bottom: 3%;
  width: 90%;
}

.input-file {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.input-file__label {
  padding: 2% 5%;
  margin: auto;
  font-size: 1vw;
  color: #f8f7fc;
  border-radius: 5px;
  cursor: pointer;
  background-color: #34495e;
}

.input__label {
  padding: 0;
  margin: 0;
  font-size: 1.2vw;
  color: #516f8c;
  font-weight: 300;
  cursor: pointer;
}

.input__input {
  padding: 0;
  margin: 0;
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

.profile__extra {
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.profile__extra-inputs {
  height: 100%;
  width: 55%;
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
  justify-content: flex-start;
  align-items: center;
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
  height: 2.5vw;
  font-size: 1vw;
}

.profile__save-button {
  background-color: #2ecc71;
  border: none;
}

.profile__save-button:hover {
  background-color: #5bed99;
}

.birthday__input {
  margin-bottom: 3%;
}

.calendar {
  width: 100%;
}

@media (max-width: 1024px) {
  .profile {
    padding-bottom: 3%;
    min-height: 70vw;
    height: auto;
    width: 90%;
    border-radius: 3%;
  }

  .profile__main {
    height: 50%;
  }

  .profile__avatar-container {
    width: 50%;
  }

  .profile__avatar-square {
    width: 100%;
    height: 100%;
  }

  .black-background {
    font-size: 4vw;
    opacity: 1;
  }

  .input-file__label {
    font-size: 3vw;
  }

  .input__label {
    font-size: 3vw;
  }

  .input__input {
    font-size: 3vw;
  }

  .profile__extra-inputs {
    height: 100%;
    width: 50%;
    justify-content: space-between;
  }

  .calendar {
    width: 100%;
  }

  .profile__extra-buttons {
    align-items: flex-start;
  }

  .profile__extra-button {
    margin-bottom: 5%;
    height: 8vw;
    font-size: 3vw;
  }

  .input-file__button {
    height: 7vw;
    font-size: 3vw;
  }

  .profile__modal-button {
    height: 5vw;
    font-size: 2.5vw;
  }

  /* .profile__modal {
    font-size: 5vw;
  } */
}

@media (max-width: 700px) {
  .profile__extra-buttons {
    flex-direction: column;
  }
}
</style>
