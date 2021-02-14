<template>
  <router-link class="profile" to="/app/profile">
    <span class="profile-name">{{ user.lastName }} {{ user.firstName }}</span>
    <i class="bx bx-user-circle profile-icon"></i>
  </router-link>
</template>

<script>
import { mapGetters } from "vuex";

export default {
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
  position: absolute;
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

@media (max-width: 1024px) {
  .profile {
    right: 5%;

    &-name {
      display: none;
    }
  }
}

@media (max-width: 414px) {
  .profile {
    top: 35px;
  }
}
</style>
