<template>
  <div class="page">
    <cHeader type="common" class="header" />
    <div class="content">
      <div class="profile">
        <div class="profile__main">
          <div class="profile__first-info">
            <div class="profile__avatar-container">
              <div class="profile__avatar-square">
                <img
                  :src="user.image"
                  :alt="user.firstName"
                  class="profile__avatar"
                />
              </div>
            </div>
            <div class="profile__description">
              <div class="profile__text">
                <h1 class="profile__full-name">
                  {{ user.lastName }} {{ user.firstName }}
                </h1>
                <div class="profile__about">
                  {{ user.description || "Не указано" }}
                </div>
              </div>
              <div class="profile__links">
                <router-link to="/profile/change" class="profile__change-link">
                  <div class="profile__change-button">
                    Редактировать профиль
                  </div>
                </router-link>
                <router-link
                  to="/profile/change-password"
                  class="profile__change-link"
                >
                  <div class="profile__change-button">Изменить пароль</div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="profile__social-networks">
            <a :href="user.links.github">
              <i
                class="fab fa-github-square profile__social-network"
                :class="{ active: user.links.github }"
              ></i>
            </a>
            <a :href="user.links.linkedIn">
              <i
                class="fab fa-linkedin profile__social-network"
                :class="{ active: user.links.linkedIn }"
              ></i>
            </a>
            <a :href="user.links.instagram">
              <i
                class="fab fa-instagram-square profile__social-network"
                :class="{ active: user.links.instagram }"
              ></i>
            </a>
            <a :href="user.links.vk">
              <i
                class="fab fa-vk profile__social-network"
                :class="{ active: user.links.vk }"
              ></i>
            </a>
          </div>
        </div>
        <div class="profile__extra">
          <div class="profile__extra-info">
            <div class="extra-info__element">
              <i class="far fa-calendar-alt extra-info__icon"></i>
              <div class="extra-info__text">
                {{ user.birthday || "не указано" }}
              </div>
            </div>
            <div class="extra-info__element">
              <i class="fas fa-phone-square-alt extra-info__icon"></i>
              <div class="extra-info__text">
                {{ user.phone || "не указано" }}
              </div>
            </div>
            <div class="extra-info__element">
              <i class="fas fa-envelope extra-info__icon"></i>
              <div class="extra-info__text">{{ user.email }}</div>
            </div>
            <div class="extra-info__element">
              <i class="fas fa-house-user extra-info__icon"></i>
              <div class="extra-info__text">
                {{ user.address || "не указано" }}
              </div>
            </div>
          </div>
          <div class="profile__courses">
            <div class="profile__courses-heading">Курсы:</div>
            <div class="courses__container">
              <div class="profile__course">
                <div class="course__main-info">
                  <i class="fab fa-js-square course__icon"></i>
                  <div class="course__heading">JavaScript Базовый</div>
                </div>
                <div class="course__progress">
                  <div class="progress__line">
                    <div class="progress__full-line"></div>
                    <div class="progress__comleted-line"></div>
                  </div>
                  <div class="progress__percent">60%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="profile__logout-container">
          <cButton text="Выйти" @action="profileLogout" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cHeader from "@/components/general/cHeader";
import cButton from "@/components/general/cButton";
import { mapGetters } from "vuex";

export default {
  components: {
    cHeader,
    cButton
  },
  methods: {
    profileLogout() {
      this.$store.commit("logout");
      this.$router.push("/");
    }
  },
  data() {
    return {
      user: {
        links: {}
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
  padding: 3vh 4vh;
  width: 50%;
  height: 35vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f7fc;
  border-radius: 20px;
  box-shadow: 0 0 10px #0000004d;
  z-index: 2;
}

.profile__main {
  width: 100%;
  height: 17vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.profile__first-info {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
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

.profile__description {
  height: 100%;
  width: 17vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.profile__text {
  width: 100%;
}

.profile__full-name {
  margin-bottom: 5%;
  font-size: 2.5vw;
  color: #34495e;
  font-weight: 500;
  line-height: 1.1;
}

.profile__about {
  font-size: 0.9vw;
  color: #516f8c;
  font-weight: 300;
}

.profile__change-button {
  font-size: 0.9vw;
  color: #516f8c;
  font-weight: 500;
  cursor: pointer;
  transition: 300ms ease-in-out;
}

.profile__change-button:hover {
  color: #fc7979;
  transition: 300ms ease-in-out;
}

.profile__links {
  width: 30vw;
  display: flex;
  flex-direction: row;
}

.profile__change-link {
  margin-right: 5%;
  text-decoration: none;
}

.profile__social-networks {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.profile__social-network {
  margin-bottom: 2vw;
  font-size: 2vw;
  color: #516f8c;
  cursor: pointer;
  transition: 300ms ease-in-out;
}

.profile__social-network:hover {
  color: #7799ba;
  transition: 300ms ease-in-out;
}

.profile__extra {
  margin-top: 5%;
  width: 100%;
  height: 10vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.profile__extra-info {
  height: 100%;
  width: 20vw;
}

.extra-info__element {
  margin-bottom: 5%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.extra-info__icon {
  margin-right: 5%;
  font-size: 1.2vw;
  color: #34495e;
}

.extra-info__text {
  font-size: 0.8vw;
  color: #516f8c;
  font-weight: 300;
}

.profile__courses {
  height: 100%;
}

.profile__courses-heading {
  margin-bottom: 10%;
  font-size: 1.2vw;
  color: #34495e;
  font-weight: 300;
}

.courses__container {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.profile__course {
  padding: 1vh 2vh !important;
  width: 11vw;
  height: 7vw;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 0 10px #c9c9c9;
}

.course__main-info {
  margin-bottom: 5%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.course__icon {
  margin-right: 10%;
  font-size: 4vw;
  color: #34495e;
}

.course__heading {
  width: 45%;
  font-size: 0.9vw;
  color: #33334f;
  font-weight: 500;
}

.course__progress {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.progress__line {
  position: relative;
  width: 70%;
}

.progress__full-line {
  position: absolute;
  height: 3px;
  width: 100%;
  background-color: #b2c4d6;
  z-index: 1;
}

.progress__comleted-line {
  position: absolute;
  height: 3px;
  width: 60%;
  background-color: #34495e;
  z-index: 2;
}

.profile__logout-container {
  width: 100%;
}
</style>
