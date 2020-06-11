<template>
  <div class="page">
    <cHeader pageType="common" />
    <div class="content-container">
      <div class="content">
        <cButton @action="profileLogout" text="Выйти" class="logout" />
        <div class="content__user user">
          <div class="user__image-container">
            <img
              :src="userData.image"
              :alt="userData.firstName"
              class="user__image"
            />
          </div>
          <div class="user__text">
            <div class="user__data-element">
              <div class="user__text-label">Имя:</div>
              <div class="user__text-data">{{ userData.firstName }}</div>
            </div>
            <div class="user__data-element">
              <div class="user__text-label">Фамилия:</div>
              <div class="user__text-data">{{ userData.lastName }}</div>
            </div>
            <div class="user__data-element">
              <div class="user__text-label">Email:</div>
              <div class="user__text-data">{{ userData.email }}</div>
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
import { mapGetters } from "vuex";

export default {
  components: {
    cHeader,
    cButton
  },
  data() {
    return {
      isError: ""
    };
  },
  mounted() {
    this.$store.dispatch("getUserData").catch(err => (this.isError = err));
  },
  computed: mapGetters(["userData"]),
  methods: {
    profileLogout() {
      this.$store.commit("logout");
      this.$router.push("/");
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
  margin-right: 10%;
  font-size: 2.5vw;
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
</style>
