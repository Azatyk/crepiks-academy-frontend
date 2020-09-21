<template>
  <vs-dialog
    v-model="isChangePasswordOpenLocal"
    :loading="isChangePasswordLoading"
  >
    <template #header>
      <h4 class="change-password__heading">
        {{ $t("changePasswordTitle") }}
      </h4>
    </template>
    <div class="change-password__inputs">
      <vs-input
        :label="$t('changePasswordCurrentPassword')"
        v-model="passwords.currentPassword"
        class="change-password__input"
        type="password"
      />
      <vs-input
        :label="$t('changePasswordNewPassword')"
        v-model="passwords.newPassword"
        class="change-password__input"
        type="password"
      />
      <vs-input
        :label="$t('changePasswordConfirmPassword')"
        v-model="passwords.newPasswordCheck"
        class="change-password__input"
        type="password"
      />
    </div>
    <template #footer>
      <vs-button
        block
        class="change-password__save-button"
        @click="changePassword"
      >
        {{ $t("changePasswordSaveButton") }}
      </vs-button>
    </template>
  </vs-dialog>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    isChangePasswordOpen: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      isChangePasswordOpenLocal: false,
      isChangePasswordLoading: false,
      passwords: {
        currentPassword: null,
        newPassword: null,
        newPasswordCheck: null
      },
      userId: null
    };
  },
  watch: {
    isChangePasswordOpen(updatedState) {
      this.isChangePasswordOpenLocal = updatedState;
    },
    isChangePasswordOpenLocal() {
      if (!this.isChangePasswordOpenLocal) {
        this.$emit("close-change-password");
      }
    }
  },
  computed: mapGetters(["userData"]),
  methods: {
    changePassword() {
      if (
        this.passwords.newPassword.trim() !==
        this.passwords.newPasswordCheck.trim()
      ) {
        this.openNotification(
          "top-center",
          "danger",
          "Пароли не совпадают",
          "Пароли в поле 'Новый пароль' и в поле 'Подтверждение нового пароля' должны совпадать"
        );
      } else {
        this.isChangePasswordLoading = true;

        let passwords = {
          oldPassword: this.passwords.currentPassword,
          newPassword: this.passwords.newPassword
        };

        let id = this.userId;
        this.$store
          .dispatch("changePassword", { id, passwords })
          .then(() => (this.isChangePasswordLoading = false))
          .then(() => {
            this.openNotification(
              "top-center",
              "success",
              "Пароль изменен",
              "Вы удачно изменили пароль, используйте его для входа"
            );
          })
          .catch(() => {
            this.isChangePasswordLoading = false;
            this.openNotification(
              "top-center",
              "danger",
              "Неверный пароль",
              "Вы неверно ввели текущий пароль, попробуйте снова"
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
  mounted() {
    this.userId = this.userData.id;
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.change-password {
  &__heading {
    margin-bottom: 15px;
    font-size: 2vw;
  }

  &__inputs {
    display: flex;
    flex-direction: column;
  }

  &__input {
    margin-left: 0;
    margin: 5% 0;
    width: 100%;
  }

  &__save-button {
    margin-left: 0;
    margin-bottom: 5%;
    font-size: 1vw;
  }
}

.vs-select__input {
  font-size: 15px !important;
}

.vs-select__option {
  font-size: 15px;
}
</style>
