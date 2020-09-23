<template>
  <div class="sidebar__container" @mouseenter="enter" @mouseleave="leave">
    <vs-sidebar
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
      <vs-sidebar-item id="/app/home" to="/app/home">
        <template #icon>
          <i class="bx bx-home"></i>
        </template>
        {{ $t("appNavigationHome") }}
      </vs-sidebar-item>
      <vs-sidebar-item id="/app/courses" to="/app/courses">
        <template #icon>
          <i class="bx bx-code-block"></i>
        </template>
        {{ $t("appNavigationCourses") }}
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar
            badge-color="danger"
            badge-position="top-right"
            @click="openProfile"
            class="sidebar__profile-button"
          >
            <i class="bx bxs-user"></i>
          </vs-avatar>
          <vs-button @click="logout" icon color="danger">
            <i class="bx bx-log-out bx-rotate-180"></i>
          </vs-button>
        </vs-row>
      </template>
      <vs-sidebar-item id="/app/test" to="/app/soon">
        <template #icon>
          <i class="bx bx-task"></i>
        </template>
        {{ $t("appNavigationTests") }}
      </vs-sidebar-item>
      <vs-sidebar-item id="/app/trainer" to="/app/soon">
        <template #icon>
          <i class="bx bx-timer"></i>
        </template>
        {{ $t("appNavigationTrainer") }}
      </vs-sidebar-item>
    </vs-sidebar>
    <cProfile
      v-show="!isMobile"
      :is-profile-open="isProfileOpen"
      @close-profile="closeProfile"
      @open-change-password="isChangePasswordOpen = true"
    />
    <cChangePassword
      v-show="!isMobile"
      :is-change-password-open="isChangePasswordOpen"
      @close-change-password="isChangePasswordOpen = false"
    />
    <cCreateAccountDialog
      v-show="!isMobile"
      :is-create-account-dialog-open="isCreateProfileDialogOpen"
      @close-create-account-dialog="isCreateProfileDialogOpen = false"
    />
  </div>
</template>

<script>
import cProfile from "@/components/mainLayout/cProfile";
import cChangePassword from "@/components/mainLayout/cChangePassword";
import cCreateAccountDialog from "@/components/mainLayout/cCreateAccountDialog";
import { mapGetters, mapMutations } from "vuex";

export default {
  props: {
    isProfileOpenFromMainLayout: {
      type: Boolean
    }
  },
  components: {
    cProfile,
    cChangePassword,
    cCreateAccountDialog
  },

  data() {
    return {
      activeLink: "home",
      isSidebarOpen: false, // для корректной работа логотипа
      isProfileOpen: false,
      isChangePasswordOpen: false,
      isCreateProfileDialogOpen: false,
      isMobile: false
    };
  },

  watch: {
    isProfileOpenFromMainLayout() {
      if (this.isProfileOpenFromMainLayout) {
        this.isProfileOpen = true;
      }
    }
  },

  mounted() {
    this.activeLink = this.$route.fullPath;
    if (document.body.clientWidth <= 1200) {
      this.isMobile = true;
    }
  },

  methods: {
    ...mapMutations(["logout"]),

    enter() {
      this.isSidebarOpen = true;
    },

    leave() {
      this.isSidebarOpen = false;
    },

    openProfile() {
      if (this.isLoggedIn) {
        this.isProfileOpen = true;
      } else {
        this.isCreateProfileDialogOpen = true;
      }
    },

    closeProfile() {
      this.isProfileOpen = false;
      this.$emit("close-profile");
    }
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.sidebar {
  position: fixed !important;
}

.sidebar__logo-short {
  font-size: 23px;
  color: $color-1;
  font-weight: bold;
}

.sidebar__logo-full-start {
  font-size: 0px;
  color: $color-1;
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
  color: $color-1;
  text-decoration: none;
}

.sidebar__profile-button {
  cursor: pointer;
}
</style>
