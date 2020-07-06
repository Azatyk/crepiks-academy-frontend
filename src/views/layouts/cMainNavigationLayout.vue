<template>
  <div class="navigation-page">
    <div class="navigation__nav">
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
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
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
  left: 0;
  padding: 30px 0 0 30px;
  width: 300px;
  min-height: 100vh;
  height: 100%;
  box-sizing: border-box;
  background-color: #1e272e;
}

.content {
  padding: 0.1px;
  margin-left: 300px;
  width: calc(100% - 300px);
  min-height: 100vh;
  height: auto;
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
</style>
