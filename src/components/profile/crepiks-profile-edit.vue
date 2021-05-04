<template>
  <div>
    <notification
      :isActive="isNotificationOpen"
      :heading="notificationHeading"
      :text="notificationText"
      @close-notification="isNotificationOpen = false"
      :status="notificationStatus"
    />
    <rightSideBlock
      :isOpen="isProfileEditOpen"
      @close-block="$emit('close-profile-block')"
    >
      <div class="right-block">
        <h2 class="right-block-heading">Редактирование профиля</h2>
        <div class="right-block-container">
          <cInput
            class="right-block-input"
            title="Имя"
            v-model="updatedUser.firstName"
            :maxlength="maxlength"
          />
          <cInput
            class="right-block-input"
            title="Фамилия"
            v-model="updatedUser.lastName"
            :maxlength="maxlength"
          />
          <cInput
            class="right-block-input"
            title="Почта"
            type="email"
            v-model="updatedUser.email"
            :maxlength="maxlength"
          />
          <cInput
            class="right-block-input"
            title="Номер"
            v-mask="'+7(###)-###-##-##'"
            placeholder="+7(707)-777-77-77"
            v-model="updatedUser.phoneNumber"
            :maxlength="maxlength"
          />
          <cButton
            class="right-block-button"
            text="Изменить"
            @click="changeUserData"
          />
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
    isProfileEditOpen: {
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
      user: {
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: null
      },
      updatedUser: {
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: null
      },
      userId: null
    };
  },
  methods: {
    changeUserData() {
      this.$emit("close-profile-block");

      let updatedData = {
        firstName: this.updatedUser.firstName,
        lastName: this.updatedUser.lastName,
        email: this.updatedUser.email,
        phoneNumber: `7${this.updatedUser.phoneNumber[3] +
          this.updatedUser.phoneNumber[4] +
          this.updatedUser.phoneNumber[5] +
          this.updatedUser.phoneNumber[8] +
          this.updatedUser.phoneNumber[9] +
          this.updatedUser.phoneNumber[10] +
          this.updatedUser.phoneNumber[12] +
          this.updatedUser.phoneNumber[13] +
          this.updatedUser.phoneNumber[15] +
          this.updatedUser.phoneNumber[16]}`
      };

      let id = this.userId;
      this.$store
        .dispatch("changeUserData", { id, updatedData })
        .then(() => {
          this.isNotificationOpen = true;
          this.notificationStatus = "success";
          (this.notificationHeading = "Профиль сохранен"),
            (this.notificationText = "Ваши данные изменены");
        })
        .catch(() => {
          this.isNotificationOpen = true;
          this.notificationStatus = "error";
          (this.notificationHeading = "Ошибка"),
            (this.notificationText = "Не удалось редактировать профиль");
        });
    }
  },
  computed: {
    ...mapGetters(["userData"])
  },
  mounted() {
    if (this.userData) {
      this.user = this.userData;
      this.updatedUser.firstName = this.userData.firstName;
      this.updatedUser.lastName = this.userData.lastName;
      this.updatedUser.email = this.userData.email;
      this.updatedUser.phoneNumber = this.userData.phoneNumber;
      this.userId = this.user.id;
    }
  },

  watch: {
    userData() {
      this.user = this.userData;
      this.updatedUser.firstName = this.userData.firstName;
      this.updatedUser.lastName = this.userData.lastName;
      this.updatedUser.email = this.userData.email;
      this.updatedUser.phoneNumber = this.userData.phoneNumber;
    },

    isProfileEditOpen() {
      if (this.isProfileEditOpen) {
        this.updatedUser.firstName = this.userData.firstName;
        this.updatedUser.lastName = this.userData.lastName;
        this.updatedUser.email = this.userData.email;
        this.updatedUser.phoneNumber = this.userData.phoneNumber;
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
