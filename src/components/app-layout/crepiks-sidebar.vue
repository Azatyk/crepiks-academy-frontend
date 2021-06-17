<template>
  <div class="sidebar">
    <div class="content-half">
      <logo class="sidebar-logo" />
      <div class="dividing-line"></div>
      <div class="navigation-links">
        <router-link class="link link-active" to="/app/courses">
          <i class="bx bx-window-alt link-icon"></i>
          <span class="link-text">Курсы</span>
        </router-link>
        <!-- <router-link class="link" to="/app/sandbox">
          <i class="bx bx-dice-5 link-icon"></i>
          <span class="link-text">Песочница</span>
        </router-link> -->
        <router-link class="link" to="/app/subscription">
          <i class="bx bx-receipt link-icon"></i>
          <span class="link-text">Подписка</span>
        </router-link>
      </div>
    </div>
    <transition name="fade">
      <div class="content-half">
        <div class="navigation-links-extra">
          <!-- <div class="link" @click="openModal">
            <i class="bx bx-chevron-up-square link-icon"></i>
            <span class="link-text">Инструкция</span>
          </div> -->
          <div class="link-help">
            <div
              class="link"
              @click="socials = true"
              :class="{ link_inactive: socials }"
            >
              <i class="bx bx-help-circle link-icon"></i>
              <span class="link-text">Помощь</span>
            </div>
            <div
              class="socials-links"
              :class="{ socials_links_active: socials }"
            >
              <a
                href="https://wa.me/77078139703"
                class="socials-link"
                target="_blank"
              >
                <i class="bx bxl-whatsapp socials-link-icon"></i>
              </a>
              <a
                href="https://t.me/CrepiksAcademyBot"
                class="socials-link"
                target="_blank"
              >
                <i class="bx bxl-telegram socials-link-icon"></i>
              </a>
              <a
                href="https://www.instagram.com/crepiks_academy/"
                class="socials-link"
                target="_blank"
              >
                <i class="bx bxl-instagram socials-link-icon"></i>
              </a>
              <a
                href="mailto:crepiks.academy@mail.ru"
                class="socials-link"
                target="_blank"
              >
                <i class="bx bx-mail-send socials-link-icon"></i>
              </a>
              <a
                href="https://vk.com/public200320088"
                class="socials-link"
                target="_blank"
              >
                <i class="bx bxl-vk socials-link-icon"></i>
              </a>
              <div @click="socials = false" class="socials-link socials-link-x">
                <i class="bx bx-x socials-link-icon"></i>
              </div>
            </div>
          </div>
          <div class="link link-exit" @click="logout">
            <i class="bx bx-log-out-circle link-icon"></i>
            <span class="link-text">Выход</span>
          </div>
        </div>
        <router-link
          class="subscription"
          to="/app/subscription"
          @mouseover.native="hover = true"
        >
          <div
            class="subscription-light-circle"
            :class="{ light_circle_active: hover }"
          ></div>
          <div
            class="subscription-dark-circle"
            :class="{ dark_circle_active: hover }"
          ></div>
          <span class="subscription-text">Получите полный доступ к курсам</span>
          <i
            class="bx bx-right-arrow-alt subscription-icon"
            :class="{ arrow_icon: hover }"
          ></i>
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
import logo from "@/components/common/crepiks-logo";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      hover: false,
      socials: false,
      isModalOpen: false
    };
  },
  components: {
    logo
  },

  methods: {
    ...mapMutations(["logout"]),
    openModal() {
      setTimeout(() => {
        this.$root.$emit("open-modal");
      }, 1);
    }
  },

  watch: {
    hover() {
      if (this.hover) {
        setTimeout(() => {
          this.hover = false;
        }, 1000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  padding: 45px 50px;
  padding-right: 0;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: $white;
  z-index: 3;

  &-logo {
    margin-bottom: 40px;
    width: 130px;
  }
}

.content-half {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.dividing-line {
  margin-bottom: 40px;
  height: 2px;
  width: 200px;
  background-color: #f3f3f3;
}

.navigation-links {
  width: 100%;
  display: flex;
  flex-direction: column;

  &-extra {
    position: relative;
  }
}

.link {
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: $dark;
  text-decoration: none;
  opacity: 0.7;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  &.router-link-exact-active {
    color: $primary;
    opacity: 0.9;
  }

  &-help {
    position: relative;
  }

  &-exit:hover {
    color: #e74c3c;
  }

  &-icon {
    margin-right: 8px;
    font-size: 20px;
  }

  &-text {
    font-size: 15px;
    font-weight: 500;
  }
}

.subscription {
  position: relative;
  padding: 5%;
  width: 200px;
  height: 120px;
  box-sizing: border-box;
  background-color: #16a085;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;

  &-light-circle {
    position: absolute;
    top: -80%;
    left: 15%;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background-color: #17e0b9;
    //   box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    z-index: 2;
    transition: 200ms ease-in-out;
  }

  &-dark-circle {
    position: absolute;
    top: -70%;
    left: 50%;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background-color: #1abc9c;
    transition: 200ms ease-in-out;
    //   box-shadow: 0 0 60px rgba(0, 0, 0, 0.08);
  }

  &-text {
    position: absolute;
    left: 8%;
    bottom: 13%;
    width: 70%;
    color: $white;
    font-size: 18px;
    font-weight: 500;

    &-important {
      font-weight: 700;
    }
  }

  &-icon {
    position: absolute;
    right: 7%;
    bottom: 10%;
    color: $white;
    font-size: 30px;
    transition: 200ms ease-in-out;
  }
}

.light_circle_active {
  animation: hover-light-circle ease 0.7s;
}

.dark_circle_active {
  animation: hover-dark-circle ease 0.7s;
}

.arrow_icon {
  animation: arrow ease 0.7s;
}

@keyframes hover-light-circle {
  0% {
    top: -80%;
    left: 15%;
  }
  40% {
    top: -85%;
    left: 15%;
  }
  100% {
    top: -80%;
    left: 15%;
  }
}

@keyframes hover-dark-circle {
  20% {
    top: -70%;
    left: 50%;
  }
  60% {
    top: -80%;
    left: 50%;
  }
  120% {
    top: -70%;
    left: 50%;
  }
}

@keyframes arrow {
  10% {
    right: 7%;
  }
  40% {
    right: 10%;
  }
  100% {
    right: 7%;
  }
}

.socials {
  &-links {
    position: absolute;
    top: 0;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    opacity: 0;
    z-index: -1;
    transition: 200ms ease-in-out;
  }

  &-link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    color: $primary;
    text-decoration: none;
    transition: 200ms ease-in-out;
    cursor: pointer;
    background-color: transparent;

    &:hover {
      opacity: 0.5;
    }

    &-icon {
      font-size: 20px;
      margin-right: 5px;
    }

    &-x {
      color: $dark;
    }
  }
}

.socials_links_active {
  opacity: 1;
  z-index: 3;
}

.link_inactive {
  opacity: 0;
  z-index: -1;
}

.link_inactive:hover {
  opacity: 0;
}

@media (max-width: 1024px) {
  .sidebar {
    justify-content: center;
    bottom: 0;
    left: 0;
    top: auto;
    height: 50px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;
    border-radius: 25px 25px 0 0;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.25);
    background-color: $white;

    &-logo {
      display: none;
    }
  }

  .dividing-line {
    display: none;
  }

  .navigation-links-extra {
    display: none;
  }

  .subscription {
    display: none;
  }

  .navigation-links {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: fit-content;
  }

  .link {
    width: auto;
    margin-bottom: 0;
    color: $dark;

    &.router-link-exact-active {
      color: $primary;
      opacity: 1;
    }
  }
}

@media (max-width: 750px) {
  .sidebar {
    width: 100%;
  }
}
</style>
