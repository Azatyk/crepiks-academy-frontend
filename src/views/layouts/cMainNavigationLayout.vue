<template>
  <div class="navigation-page">
    <div id="navigation__nav" class="navigation__nav">
      <router-link to="/"
        ><div class="nav__logo">
          Crepiks <span class="nav__logo-thin">Academy</span>
        </div></router-link
      >
      <div class="nav__bar">
        <router-link to="/app/courses" class="nav__link nav__link-active"
          >Курсы</router-link
        >
        <router-link to="/app/courses" class="nav__link">Тренажер</router-link>
        <router-link to="/app/courses" class="nav__link">Тесты</router-link>
      </div>
      <div class="navigation__target" @click="ShowHideNav">
        <a-icon
          type="right"
          id="navigation__icon-open"
          class="navigation__icon active"
        />
        <a-icon
          type="close"
          id="navigation__icon-close"
          class="navigation__icon"
        />
      </div>
    </div>
    <div id="content" class="content wide">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    ShowHideNav() {
      if (this.isOpen) {
        document
          .getElementById("navigation__icon-open")
          .classList.add("active");
        document
          .getElementById("navigation__icon-close")
          .classList.remove("active");
        document.getElementById("navigation__nav").classList.remove("show");
        document.getElementById("content").classList.add("wide");
        this.isOpen = !this.isOpen;
      } else {
        document
          .getElementById("navigation__icon-close")
          .classList.add("active");
        document
          .getElementById("navigation__icon-open")
          .classList.remove("active");
        document.getElementById("navigation__nav").classList.add("show");
        document.getElementById("content").classList.remove("wide");
        this.isOpen = !this.isOpen;
      }
    }
  }
};
</script>

<style scoped>
.navigation-page {
  width: 100%;
  height: 100%;
  background-color: #dff9fb;
}

.navigation__nav {
  position: fixed;
  top: 0;
  left: -240px;
  padding: 30px 0 0 30px;
  width: 300px;
  min-height: 100vh;
  height: 100%;
  box-sizing: border-box;
  background-color: #1e272e;
  transition: 200ms ease-in-out;
}

.show {
  left: 0;
  transition: 200ms ease-in-out;
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
  transition: 100ms ease-in-out;
}

.nav__link:hover {
  color: #dff9fb;
  transition: 100ms ease-in-out;
}

.nav__link-active {
  color: #dff9fb;
}

@media (max-width: 1400px) {
  .navigation__target {
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1e272e;
    transition: 200ms ease-in-out;
    cursor: pointer;
  }

  .navigation__target:hover {
    background-color: #242e36;
    transition: 200ms ease-in-out;
  }

  .navigation__target:hover .navigation__icon {
    color: #dff9fb;
    transition: 200ms ease-in-out;
  }

  .navigation__icon {
    font-size: 20px;
    color: #acbebf;
    transition: 200ms ease-in-out;
    display: none;
  }

  .active {
    display: block;
  }

  .wide {
    margin-left: 60px;
    width: calc(100% - 60px);
    transition: 200ms ease-in-out;
  }
}
</style>
