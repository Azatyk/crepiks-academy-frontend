<template>
  <div>
    <notification
      :isActive="isNotificationOpen"
      :heading="notificationHeading"
      :text="notificationText"
      @close-notification="isNotificationOpen = false"
      @open-notification="isNotificationOpen = true"
      :status="notificationStatus"
    />
    <rightSideBlock
      :isOpen="isOpenChangePassword"
      @close-block="$emit('close-change-password-block')"
    >
      <div class="right-block">
        <h2 class="right-block-heading">Изменение пароля</h2>
        <div class="right-block-container">
          <cInput
            class="right-block-input"
            title="Старый пароль"
            v-model="passwords.currentPassword"
            placeholder="Введите старый пароль"
            type="password"
          />
          <cInput
            class="right-block-input"
            title="Новый пароль"
            v-model="passwords.newPassword"
            placeholder="Введите новый пароль"
            type="password"
          />
          <cInput
            class="right-block-input"
            title="Повторите новый пароль"
            v-model="passwords.newPasswordCheck"
            placeholder="Повторите новый пароль"
            type="password"
          />
          <cButton class="right-block-button" @click="changePassword"
            >Изменить</cButton
          >
        </div>
      </div>
    </rightSideBlock>
  </div>
</template>

<script>
import rightSideBlock from "@/components/common/crepiks-right-side-block";
import cInput from "@/components/common/crepiks-input";
import cButton from "@/components/common/crepiks-button";
import notification from "@/components/common/crepiks-notification";

import { mapGetters } from "vuex";

export default {
  components: {
    rightSideBlock,
    cInput,
    cButton,
    notification
  },
  props: {
    isOpenChangePassword: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      maxlength: 34,
      isNotificationOpen: false,
      notificationHeading: "",
      notificationText: "",
      notificationStatus: "",
      passwords: {
        currentPassword: null,
        newPassword: null,
        newPasswordCheck: null
      },
      userId: null
    };
  },
  methods: {
    changePassword() {
      if (
        this.passwords.newPassword.trim() !==
        this.passwords.newPasswordCheck.trim()
      ) {
        this.isNotificationOpen = true;
        this.notificationStatus = "error";
        (this.notificationHeading = "Ошибка"),
          (this.notificationText = "Пароли не совпадают");
      } else {
        let passwords = {
          oldPassword: this.passwords.currentPassword,
          newPassword: this.passwords.newPassword
        };

        let id = this.userId;
        this.$store
          .dispatch("changePassword", { id, passwords })
          .then(() => (this.isChangePasswordLoading = false))
          .then(() => {
            this.$emit("close-change-password-block");
            this.isNotificationOpen = true;
            this.notificationStatus = "success";
            (this.notificationHeading = "Пароль изменен"),
              (this.notificationText =
                "Вы удачно изменили пароль, используйте его для входа");
          })
          .catch(() => {
            this.isNotificationOpen = true;
            this.notificationStatus = "error";
            (this.notificationHeading = "Неверный пароль"),
              (this.notificationText =
                "Вы неверно ввели текущий пароль, попробуйте снова");
          });
      }
    }
  },
  computed: {
    ...mapGetters(["userData"])
  },
  mounted() {
    if (this.userData) {
      this.userId = this.userData.id;
    }
  },

  watch: {
    isOpenChangePassword: function() {
      if (this.isOpenChangePassword) {
        this.passwords.currentPassword = null;
        this.passwords.newPassword = null;
        this.passwords.newPasswordCheck = null;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.right-block {
  padding: 30px 0;
  box-sizing: border-box;

  &-heading {
    font-weight: 500;
    font-size: 32px;
    margin-bottom: 30px;
  }

  &-input {
    margin-top: 20px;
  }

  &-button {
    margin-top: 40px;
  }
}

@media (max-width: 1244px) {
  .right-block {
    &-heading {
      font-size: 27px;
    }
  }
}

@media (max-width: 1100px) {
  .right-block {
    &-heading {
      font-size: 24px;
    }
  }
}

@media (max-width: 525px) {
  .right-block {
    &-heading {
      font-size: 20px;
    }
  }
}
</style>
