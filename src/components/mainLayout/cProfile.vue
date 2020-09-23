<template>
  <vs-dialog v-model="isProfileOpenLocal" blur :loading="isProfileLoading">
    <template #header>
      <h4 class="profile__heading">
        {{ $t("profileTitle") }}
      </h4>
    </template>
    <div class="profile__inputs">
      <vs-input
        :label="$t('profileFirstName')"
        :value="user.firstName"
        class="profile__input"
      />
      <vs-input
        :label="$t('profileLastName')"
        v-model="user.lastName"
        class="profile__input"
      />
      <vs-input
        :label="$t('profileEmail')"
        v-model="user.email"
        type="email"
        class="profile__input"
      />
    </div>
    <div
      class="profile__change-password"
      @click="$emit('open-change-password')"
    >
      {{ $t("profileChangePasswordText") }}
    </div>
    <template #footer>
      <div class="profile__footer">
        <div class="profile__save-button" @click="changeUserData">
          {{ $t("profileSaveButtonText") }}
        </div>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    isProfileOpen: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      isProfileOpenLocal: false,
      isProfileLoading: false,
      user: {
        firstName: null,
        lastName: null,
        email: null
      },
      userId: null
    };
  },
  watch: {
    isProfileOpen(updatedState) {
      this.isProfileOpenLocal = updatedState;
    },
    isProfileOpenLocal() {
      if (!this.isProfileOpenLocal) {
        this.$emit("close-profile");
      }
    }
  },
  computed: {
    ...mapGetters(["userData"])
  },
  methods: {
    changeInputData(value) {
      this.user.firstName = value;
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
    if (this.userData) {
      this.user = this.userData;
      this.userId = this.user.id;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.profile {
  &__heading {
    font-size: 2vw;
  }

  &__inputs {
    display: flex;
    flex-direction: column;
  }

  &__input {
    margin: auto;
    margin: 5% 0;
    width: 100%;
  }

  &__change-password {
    margin-left: 3px;
    color: $color-2;
    font-size: 0.9vw;
    cursor: pointer;
  }

  &__save-button {
    margin-left: 0;
    margin-bottom: 3%;
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1vw;
    color: $color-3;
    border: 2px solid $color-2;
    border-radius: 15px;
    background-color: $color-2;
    transition: 200ms ease-in-out;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      color: $color-2;
      background-color: $color-3;
    }
  }
}

@media (max-width: 1200px) {
  .profile {
    &__heading {
      font-size: 3vw;
    }

    &__change-password {
      font-size: 1.2vw;
    }

    &__save-button {
      font-size: 1.5vw;
    }
  }
}
</style>
