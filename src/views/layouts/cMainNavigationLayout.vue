<template>
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
        <!-- <s-sidebar-group>
          <template #header>
            <s-sidebar-item arrow>
              <template #icon>
                <i class="fas fa-laptop-code"></i>
              </template>
              Курсы
            </s-sidebar-item>
          </template>
          <s-sidebar-item
            v-for="(course, index) in courses"
            :key="index"
            :to="'/app/courses/' + course.id"
            :id="course._id"
          >
            <template #icon><i class="fas fa-file-code"></i></template>
            {{ course.title }}
          </s-sidebar-item>
        </s-sidebar-group> -->
        <s-sidebar-item id="courses" to="/app/courses">
          <template #icon>
            <i class="fas fa-laptop-code"></i>
          </template>
          Курсы
        </s-sidebar-item>
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar
              badge-color="danger"
              badge-position="top-right"
              @click="isProfileOpen = true"
              class="sidebar__profile-button"
            >
              <i class="fas fa-user"></i>
            </vs-avatar>
            <vs-button @click="logout" icon color="danger">
              <i class="fas fa-sign-out-alt sidebar__logout-button"></i>
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
      <vs-dialog v-model="isProfileOpen" blur :loading="isProfileLoading">
        <template #header>
          <h4 class="profile__heading">
            Профиль
          </h4>
        </template>
        <div class="profile__inputs">
          <s-input
            label="Имя"
            v-model="user.firstName"
            class="profile__input"
          />
          <s-input
            label="Фамилия"
            v-model="user.lastName"
            class="profile__input"
          />
          <s-input
            label="Email"
            v-model="user.email"
            type="email"
            class="profile__input"
          />
        </div>
        <div
          class="profile__change-password"
          @click="isChangePasswordOpen = true"
        >
          Изменить пароль
        </div>
        <template #footer>
          <div class="profile__footer">
            <vs-button
              block
              class="profile__save-button"
              @click="changeUserData"
            >
              Сохранить
            </vs-button>
          </div>
        </template>
      </vs-dialog>
      <vs-dialog
        v-model="isChangePasswordOpen"
        :loading="isChangePasswordLoading"
      >
        <template #header>
          <h4 class="profile__heading change-password__heading">
            Изменение пароля
          </h4>
        </template>
        <div class="profile__inputs">
          <s-input
            label="Текущий пароль"
            v-model="passwords.currentPassword"
            class="profile__input"
            type="password"
          />
          <s-input
            label="Новый пароль"
            v-model="passwords.newPassword"
            class="profile__input"
          />
          <s-input
            label="Подтверждение нового пароля"
            v-model="passwords.newPasswordCheck"
            class="profile__input"
          />
        </div>
        <template #footer>
          <vs-button block class="profile__save-button" @click="changePassword">
            Сохранить
          </vs-button>
        </template>
      </vs-dialog>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import Sidebar from "vuesax/dist/vsSidebar";
import SidebarItem from "vuesax/dist/vsSidebarItem";
// import SidebarGroup from "vuesax/dist/vsSidebarGroup";
import Input from "vuesax/dist/vsInput";

export default {
  components: {
    "s-sidebar": Sidebar,
    "s-sidebar-item": SidebarItem,
    // "s-sidebar-group": SidebarGroup,
    "s-input": Input
  },
  data() {
    return {
      activeLink: "home",
      isSidebarOpen: null,
      courses: {},
      isProfileOpen: false,
      isProfileLoading: false,
      user: {
        firstName: null,
        lastName: null,
        email: null
      },
      isChangePasswordOpen: false,
      isChangePasswordLoading: false,
      passwords: {
        currentPassword: null,
        newPassword: null,
        newPasswordCheck: null
      },
      userId: null
    };
  },
  methods: {
    ...mapMutations(["logout"]),
    enter() {
      this.isSidebarOpen = true;
    },
    leave() {
      this.isSidebarOpen = false;
    },
    changeUserData() {
      this.isProfileLoading = true;

      let updatedData = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email
      };
      let id = this.userId;
      this.$store
        .dispatch("changeUserData", { id, updatedData })
        .then(() => (this.isProfileLoading = false))
        .then(() =>
          this.openNotification(
            "top-center",
            "success",
            "Изменения сохранены",
            "Данные профиля удачно обновлены ;)"
          )
        );
    },

    changePassword() {
      if (
        this.passwords.newPassword.trim() !==
        this.passwords.newPasswordCheck.trim()
      ) {
        console.log(
          this.passwords.currentPassword.trim(),
          this.passwords.newPassword.trim()
        );
        this.openNotification(
          "top-center",
          "danger",
          "Пароли не совпадают",
          "Пароли в поле 'Новый пароль' и в поле 'Подтверждение нового пароля' должны совпадать"
        );
      } else {
        this.isChangePasswordLoading = true;

        let updatedData = {
          oldPassword: this.passwords.currentPassword,
          newPassword: this.passwords.newPassword
        };

        let id = this.userId;
        this.$store
          .dispatch("changePassword", { id, updatedData })
          .then(() => (this.isChangePasswordLoading = false))
          .then(() => {
            this.openNotification(
              "top-center",
              "success",
              "Пароль изменен",
              "Вы удачно изменили пароль, используйте его для входа"
            );
          });
      }
    },

    openNotification(
      position = "top-center",
      color = null,
      title = "",
      text = ""
    ) {
      this.$vs.notification({
        position,
        color,
        title,
        text
      });
    }
  },
  computed: {
    ...mapGetters(["userData", "accessToken"])
  },
  watch: {
    userData(updatedData) {
      this.userId = updatedData.id;

      this.$store
        .dispatch("getUserData", this.userId)
        .then(res => (this.user = res.data.user));
    }
  },
  mounted() {
    this.$store.dispatch("getCourses").then(res => {
      this.courses = res.data.courses;
      console.log(this.courses);
    });
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

.sidebar__profile-button {
  cursor: pointer;
}

.profile__heading {
  font-size: 2vw;
}

.change-password__heading {
  margin-bottom: 15px;
}

.profile__inputs {
  display: flex;
  flex-direction: column;
}

.profile__input {
  margin-left: 0;
  margin: 5% 0;
  width: 100%;
}

.profile__change-password {
  margin-left: 3px;
  color: #5d33f6;
  font-size: 0.9vw;
  cursor: pointer;
}

.profile__save-button {
  margin-left: 0;
  margin-bottom: 5%;
  font-size: 1vw;
}

.content {
  margin-left: 50px;
  padding: 0.1px;
  box-sizing: border-box;
  min-height: 100vh;
  height: 100%;
  width: calc(100% - 50px);
}
</style>
