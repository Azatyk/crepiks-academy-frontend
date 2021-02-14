<template>
  <div
    class="notification"
    :class="{
      'notification-success': status == 'success',
      'notification-warning': status == 'warning',
      'notification-error': status == 'error',
      'notification-top': position == 'top',
      'notification-bottom': position == 'bottom',
      'notification-active': isActive
    }"
  >
    <i
      class="notification-icon"
      :class="{
        'bx bxs-check-circle notification-icon-success': status == 'success',
        'bx bxs-alarm-exclamation notification-icon-warning':
          status == 'warning',
        'bx bxs-x-circle notification-icon-error': status == 'error'
      }"
    ></i>
    <div class="notification-text">
      <h2 class="notification-heading" v-if="heading != ''">{{ heading }}</h2>
      <p class="notification-paragraph">{{ text }}</p>
    </div>
    <i
      class="bx bx-x notification-close"
      @click="$emit('close-notification')"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: "success"
    },

    heading: {
      type: String,
      default: ""
    },

    text: {
      type: String,
      default: ""
    },

    position: {
      type: String,
      default: "top"
    },

    isActive: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    isActive() {
      if (this.isActive) {
        setTimeout(() => {
          this.$emit("close-notification");
        }, 5000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.notification {
  position: fixed;
  right: -510px;
  padding: 20px 30px 20px 15px;
  max-width: 400px;
  display: flex;
  flex-direction: row;
  border: 1px solid $dark;
  border-radius: 5px;
  background-color: $white;
  transition: 350ms ease-in-out;
  z-index: 7;

  &-active {
    right: 20px;
  }

  &-top {
    top: 20px;
  }

  &-bottom {
    bottom: 20px;
  }

  &-success {
    border-color: $primary;
  }

  &-warning {
    border-color: #f1c40f;
  }

  &-error {
    border-color: $error;
  }

  &-icon {
    margin-right: 10px;
    font-size: 23px;

    &-success {
      color: $primary;
    }

    &-warning {
      color: #f1c40f;
    }

    &-error {
      color: $error;
    }
  }

  &-text {
    display: flex;
    flex-direction: column;
  }

  &-heading {
    margin-bottom: 5px;
    color: $dark;
    font-size: 18px;
    font-weight: 500;
    opacity: 0.9;
  }

  &-paragraph {
    color: $dark;
    font-size: 16px;
    opacity: 0.8;
  }

  &-close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: $dark;
    font-size: 18px;
    opacity: 0.5;
    z-index: 5;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
