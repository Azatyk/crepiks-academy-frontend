<template>
  <vs-dialog
    blur
    width="400px"
    not-center
    class="no-account"
    v-model="isCreateAccountDialogOpenLocal"
  >
    <template #header>
      <div class="dialog__heading no-account__heading">
        {{ $t("noAccountHeading") }}
      </div>
    </template>
    <div class="no-account__description">
      {{ $t("noAccountDescription") }}
    </div>
    <template #footer>
      <div class="no-account__buttons">
        <div @click="$router.push('/auth/login')" class="no-account__button">
          {{ $t("noAccountPushButtonText") }}
        </div>
        <div
          @click="isCreateAccountDialogOpenLocal = false"
          class="no-account__button no-account__button-undesirable"
        >
          {{ $t("noAccountCancelButtonText") }}
        </div>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
export default {
  props: {
    isCreateAccountDialogOpen: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      isCreateAccountDialogOpenLocal: false
    };
  },

  watch: {
    isCreateAccountDialogOpen(updatedState) {
      this.isCreateAccountDialogOpenLocal = updatedState;
    },

    isCreateAccountDialogOpenLocal() {
      if (!this.isCreateAccountDialogOpenLocal) {
        this.$emit("close-create-account-dialog");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.no-account {
  &__heading {
    margin-top: 10px;
    font-size: 33px;
  }

  &__description {
    margin-bottom: 20px;
    font-size: 19px;
    color: $color-1;
  }

  &__buttons {
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  &__button {
    padding: 6px 15px;
    font-size: 18px;
    color: $color-4;
    border: 2px solid $color-2;
    border-radius: 15px;
    background-color: $color-2;
    transition: 150ms ease-in-out;
    cursor: pointer;

    &:hover {
      color: $color-2;
      background-color: $color-6;
    }

    &-undesirable {
      margin-left: 15px;
      color: $color-2;
      background-color: $color-3;

      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
