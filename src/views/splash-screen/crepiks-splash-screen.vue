<template>
  <transition name="fadeIn" appear>
    <div class="splash-screen">
      <notification
        :heading="notificationHeading"
        :text="notificationText"
        :status="notificationStatus"
        :isActive="isNotificationActive"
        @close-notification="isNotificationActive = false"
      />
      <img
        src="@/assets/images/logo.svg"
        alt="Crepiks Логотип"
        class="splash-screen__logo"
      />
    </div>
  </transition>
</template>

<script>
import { mapMutations } from "vuex";
import notification from "@/components/common/crepiks-notification";

export default {
  components: {
    notification
  },

  data: () => ({
    notificationHeading: "",
    notificationText: "",
    notificationStatus: "error",
    isNotificationActive: false
  }),

  mounted() {
    setTimeout(() => {
      if (localStorage.getItem("token")) {
        this.$store
          .dispatch("getUserData", JSON.parse(localStorage.getItem("user")).id)
          .then(() => {
            this.$router.push("/app/courses");
          })
          .catch(err => {
            if (err.response.status == 403) {
              this.logout();
              this.$router.push("/auth/login");
            } else {
              this.notificationHeading = "Упс... Что-то явно пошло не так";
              this.notificationText =
                "Давай разбираться, возможно у тебя не работает интернет. Проверь подключение к интернету и смело перезагружай страницу";
              this.isNotificationActive = true;
            }
          });
      } else {
        this.$router.push("/home");
      }
    }, 2000);
  },

  methods: mapMutations(["logout"])
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.splash-screen {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $background;
  z-index: 5;

  &__logo {
    margin-bottom: 40px;
    width: 360px;
    height: auto;
  }
}

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 2s;
}
.fadeIn-enter,
.fadeIn-leave-to {
  opacity: 0;
}
</style>
