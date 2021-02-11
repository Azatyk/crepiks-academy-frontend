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
    <div class="content-half">
      <div class="navigation-links-extra">
        <div class="link">
          <i class="bx bx-help-circle link-icon"></i>
          <span class="link-text">Помощь</span>
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
        @mouseleave.native="hover = false"
      >
        <div
          class="subscription-light-circle"
          :class="{ light_circle_active: hover }"
        ></div>
        <div
          class="subscription-dark-circle"
          :class="{ dark_circle_active: hover }"
        ></div>
        <span class="subscription-text"
          >Получи полный доступ с
          <span class="subscription-text-important">Pro</span> подпиской!</span
        >
        <i
          class="bx bx-right-arrow-alt subscription-icon"
          :class="{ arrow_icon: hover }"
        ></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import logo from "@/components/common/crepiks-logo";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      hover: false
    };
  },
  components: {
    logo
  },

  methods: mapMutations(["logout"])
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
    left: 10%;
    bottom: 15%;
    width: 70%;
    color: $white;
    font-size: 17px;
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
  top: -90%;
  left: 15%;
}

.dark_circle_active {
  top: -80%;
  left: 60%;
}

.arrow_icon {
  right: 10%;
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
    border-radius: 30px 30px 0 0;
    box-shadow: 50px 50px 100px rgba(0, 0, 0, 0.02);
    background-color: $primary;

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
    color: $white;

    &.router-link-exact-active {
      color: $white;
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
