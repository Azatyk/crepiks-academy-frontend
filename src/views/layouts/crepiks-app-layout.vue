<template>
  <div class="app-page">
    <sidebar />
    <div class="app-page-content">
      <router-view></router-view>
    </div>
    <Logo class="logo" />
    <router-link class="profile" to="/app/profile">
      <span class="profile-name">Кажимухан Азат</span>
      <i class="bx bx-user-circle profile-icon"></i>
    </router-link>
  </div>
</template>

<script>
import sidebar from "@/components/app-layout/crepiks-sidebar";
import Logo from "@/components/common/crepiks-logo.vue";

export default {
  components: {
    sidebar,
    Logo
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.app-page {
  width: 100%;
  min-height: 100vh;
  background-color: $background;

  &-content {
    margin-left: 300px;
    width: calc(100% - 300px);
  }
}

.profile {
  position: fixed;
  top: 50px;
  right: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: $dark;
  opacity: 0.6;
  cursor: pointer;
  transition: 200ms ease-in-out;
  z-index: 1;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }

  &-icon {
    font-size: 25px;
  }

  &-name {
    margin-right: 7px;
    font-size: 16px;
    font-weight: 500;
  }
}

.logo {
  display: none;
}

@media (max-width: 1024px) {
  .app-page {
    &-content {
      margin-left: 0;
      padding: 0;
      width: 100%;
    }
  }

  .profile {
    right: 5%;

    &-name {
      display: none;
    }
  }

  .logo {
    display: block;
    position: absolute;
    left: 5%;
    top: 50px;
    width: 100px;
  }
}

@media (max-width: 414px) {
  .profile {
    top: 35px;
    position: absolute;
  }

  .logo {
    top: 30px;
  }
}
</style>
