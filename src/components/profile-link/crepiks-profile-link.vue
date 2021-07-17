<template>
  <div class="profile-wrapper">
    <div>
      <Logo class="logo" />
    </div>
    <router-link class="profile" to="/app/profile">
      <span class="profile-name">{{ user.lastName }} {{ user.firstName }}</span>
      <i class="bx bx-user-circle profile-icon"></i>
    </router-link>
  </div>
</template>

<script>
import Logo from "@/components/common/crepiks-logo.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    Logo
  },
  data() {
    return {
      user: {
        firstName: null,
        lastName: null
      }
    };
  },

  computed: mapGetters(["userData", "isLoggedIn"]),

  mounted() {
    this.user = this.userData;
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: $dark;
  opacity: 0.6;
  cursor: pointer;
  transition: 200ms ease-in-out;
  z-index: 1;
  text-decoration: none;

  &-wrapper {
    width: 90%;
    position: absolute;
    top: 50px;
    display: flex;
    justify-content: space-between;
  }

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
  .profile {
    &-name {
      display: none;
    }
  }

  .logo {
    display: block;
    position: absolute;
    width: 100px;
  }
}

@media (max-width: 414px) {
  .profile {
    &-wrapper {
      top: 35px;
    }
  }

  .logo {
    opacity: 0.75;
  }
}
</style>
