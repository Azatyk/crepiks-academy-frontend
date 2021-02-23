<template>
  <div
    class="task-notification"
    :class="{
      'task-notification-success': status == 'success',
      'task-notification-error': status == 'error',
      'task-notification-open': isActive
    }"
  >
    <i
      class="bx task-notification-icon"
      :class="{
        'bxs-check-circle task-notification-icon-success': status == 'success',
        ' bxs-x-circle task-notification-icon-error': status == 'error'
      }"
    ></i>
    <p class="task-notification-text">
      {{ text }}
    </p>
    <i
      class="bx bx-x task-notification-close"
      @click="$emit('close-notification')"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    status: {
      type: String
    },
    text: {
      type: String
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

.task-notification {
  position: fixed;
  bottom: 70px;
  right: -460px;
  padding: 20px 15px;
  padding-right: 35px;
  min-width: 300px;
  max-width: 450px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  border: 1px solid $dark;
  background-color: $white;
  z-index: 3;
  transition: 400ms ease-in-out;

  &-open {
    right: 20px;
  }

  &-success {
    border-color: $primary;
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

    &-error {
      color: $error;
    }
  }

  &-text {
    color: $dark;
    font-size: 16px;
    opacity: 0.8;
  }

  &-close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: $dark;
    font-size: 20px;
    opacity: 0.5;
    cursor: pointer;
    transition: 100ms ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
