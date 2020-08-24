<template>
  <!-- <div class="navigation-page" :class="{ navClosed: !isOpen }">
    <div class="navigation__nav">
      <router-link to="/"
        ><div class="nav__logo">
          Crepiks <span class="nav__logo-thin">Academy</span>
        </div></router-link
      >
      <div @click="isOpen = false" class="nav__bar">
        <router-link to="/app/courses" class="nav__link nav__link-active"
          >Курсы</router-link
        >
        <router-link to="/app/trainer" class="nav__link">Тренажер</router-link>
        <router-link to="/app/empty" class="nav__link">Тесты</router-link>
      </div>
      <div class="nav__logout-button" @click="logout">Выйти</div>
      <div class="navigation__target" @click="isOpen = !isOpen">
        <i class="fas fa-chevron-up navigation__icon"></i>
      </div>
    </div>
    <div class="content" @click="isOpen = false">
      <router-view></router-view>
    </div>
  </div>-->
  <div class="app-page">
    <div class="sidebar__container" @mouseenter="enter" @mouseleave="leave">
      <s-sidebar
        class="sidebar"
        absolute
        open
        hover-expand
        reduce
        v-model="activeLink"
        background="#f5f7f6"
      >
        <template #logo>
          <span class="sidebar__logo-short">C</span>
          <span
            class="sidebar__logo-full-start"
            :class="{ 'sidebar__logo-full-end': isSidebarOpen }"
          >
            repiks
            <span class="sidebar__logo-thin">Academy</span>
          </span>
        </template>
        <s-sidebar-item id="home" to="/app/home">
          <template #icon>
            <i class="fas fa-home"></i>
          </template>
          Главная
        </s-sidebar-item>
        <s-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <i class="fas fa-laptop-code"></i>
              </template>
              Курсы
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item id="HTML&CSS" to="/app/courses">
            <template #icon>
              <i class="fab fa-html5"></i>
            </template>
            Базовый HTML & CSS
          </vs-sidebar-item>
          <vs-sidebar-item id="Instagram">
            <template #icon>
              <i class="fab fa-js-square"></i>
            </template>
            Базовый JavaScript
          </vs-sidebar-item>
        </s-sidebar-group>
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar badge-color="danger" badge-position="top-right">
              <i class="fas fa-user"></i>
              <template #badge>2</template>
            </vs-avatar>
            <vs-button @click="logout" icon color="danger">
              <i class="fas fa-sign-out-alt"></i>
            </vs-button>
          </vs-row>
        </template>
        <s-sidebar-item id="test">
          <template #icon>
            <i class="far fa-check-square"></i>
          </template>
          Тесты
        </s-sidebar-item>
        <s-sidebar-item id="trainer" to="/app/trainer">
          <template #icon>
            <i class="fas fa-network-wired"></i>
          </template>
          тренажер
        </s-sidebar-item>
      </s-sidebar>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Sidebar from "vuesax/dist/vsSidebar";
import SidebarItem from "vuesax/dist/vsSidebarItem";
import SidebarGroup from "vuesax/dist/vsSidebarGroup";

export default {
  components: {
    "s-sidebar": Sidebar,
    "s-sidebar-item": SidebarItem,
    "s-sidebar-group": SidebarGroup
  },
  data() {
    return {
      activeLink: "home",
      isSidebarOpen: null
    };
  },
  methods: {
    ...mapMutations(["logout"]),
    enter() {
      this.isSidebarOpen = true;
    },
    leave() {
      this.isSidebarOpen = false;
    }
  }
};
</script>

<style scoped>
.app-page {
  padding: 0.1px;
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: #eeeef6;
}

.sidebar {
  position: fixed !important;
}

.sidebar__link {
  text-decoration: none;
}

.sidebar__logo-short {
  font-size: 23px;
  color: #384a62;
  font-weight: bold;
}

.sidebar__logo-full-start {
  font-size: 0px;
  color: #384a62;
  font-weight: bold;
  transition: 100ms ease-in-out;
}

.sidebar__logo-full-end {
  font-size: 23px;
  transition: 100ms ease-in-out;
}

.sidebar__logo-thin {
  font-weight: 300;
}

.sidebar__link {
  color: #384a62;
  text-decoration: none;
}

.content {
  margin-left: 50px;
  padding: 0.1px;
  box-sizing: border-box;
  min-height: 100vh;
  height: 100%;
  width: calc(100% - 50px);
}

/* .navigation-page {
  width: 100%;
  height: 100%;
  background-color: #dff9fb;
}

.navigation__nav {
  position: fixed;
  left: 0;
  padding: 30px 0 0 30px;
  width: 300px;
  min-height: 100vh;
  height: 100%;
  box-sizing: border-box;
  background-color: #1e272e;
  transition: 200ms ease-in-out;
  border-radius: 0;
}

.content {
  padding: 0.1px;
  margin-left: 300px;
  width: calc(100% - 300px);
  min-height: 100vh;
  height: auto;
  transition: 200ms ease-in-out;
}

.nav__logo {
  margin-bottom: 20%;
  color: #dff9fb;
  font-size: 25px;
  font-weight: bold;
}

.nav__logo-thin {
  font-weight: 300;
}

.nav__bar {
  height: auto;
  display: flex;
  flex-direction: column;
}

.nav__link {
  margin-bottom: 15px;
  font-size: 18px;
  color: #acbebf;
  transition: 200ms ease-in-out;
}

.nav__link:hover {
  color: #dff9fb;
  transition: 200ms ease-in-out;
}

.router-link-active {
  color: #dff9fb;
  transition: 200ms ease-in-out;
}

.navigation__icon {
  display: none;
}

.nav__logout-button {
  position: absolute;
  bottom: 3%;
  font-size: 18px;
  color: #acbebf;
  transition: 200ms ease-in-out;
  cursor: pointer;
}

.nav__logout-button:hover {
  color: #fc7979;
  transition: 200ms ease-in-out;
}

@media (max-width: 1400px) {
  .navigation__nav {
    left: 0px;
    padding-top: 35px;
    width: 250px;
    border-radius: 0;
  }

  .navClosed > .navigation__nav {
    left: -200px;
  }

  .nav__logo {
    margin-bottom: 100px;
    font-size: 20px;
  }

  .nav__link {
    font-size: 17px;
  }

  .nav__logout-button {
    font-size: 17px;
  }

  .content {
    margin-left: 250px;
    width: calc(100% - 250px);
  }

  .navClosed > .content {
    margin-left: 50px;
    width: calc(100% - 50px);
  }

  .navigation__target {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1e272e;
    border-radius: 0;
    transition: 200ms ease-in-out;
    cursor: pointer;
  }

  .navigation__target:hover {
    background-color: #242e36;
    transition: 200ms ease-in-out;
  }

  .navigation__target:hover .navigation__icon {
    color: #dff9fb;
  }

  .navigation__icon {
    position: absolute;
    display: block;
    font-size: 18px;
    color: #acbebf;
    transform: rotate(270deg);
    transition: 200ms ease-in-out;
  }

  .navClosed .navigation__icon {
    transform: rotate(90deg);
    transition: 200ms ease-in-out;
  }
}

@media (max-width: 1024px) {
  .navigation__nav {
    bottom: 0;
    padding: 0;
    padding-left: 8%;
    width: 100vw;
    height: 500px;
    min-height: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 30px 30px 0 0;
    z-index: 5;
  }

  .navClosed > .navigation__nav {
    left: 0;
    right: 0;
    bottom: -430px;
  }

  .navigation__target {
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 70px;
    border-radius: 30px 30px 0 0;
  }

  .nav__logo {
    margin-bottom: 50px;
    font-size: 38px;
  }

  .nav__link {
    width: auto;
    font-size: 28px;
  }

  .nav__logout-button {
    bottom: 5%;
    font-size: 28px;
    color: #fc7979;
  }

  .navigation__target:hover {
    background-color: #1e272e;
  }

  .navigation__icon {
    color: #dff9fb;
    transform: rotate(180deg);
    transition: 200ms ease-in-out;
  }

  .navClosed .navigation__icon {
    transform: rotate(0deg);
    transition: 200ms ease-in-out;
  }

  .content {
    margin-left: 0;
    width: 100%;
  }

  .navClosed > .content {
    margin-left: 0;
    width: 100%;
  }
}

@media (max-width: 700px) {
  .navigation__nav {
    padding-left: 15%;
  }

  .nav__logo {
    font-size: 28px;
  }

  .nav__link {
    font-size: 20px;
  }

  .nav__logout-button {
    font-size: 20px;
  }

  .navigation__nav {
    height: 400px;
  }

  .navClosed > .navigation__nav {
    bottom: -350px;
  }

  .navigation__target {
    height: 50px;
  }
} */
</style>
