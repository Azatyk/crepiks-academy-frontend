<template>
  <button
    class="button"
    :disabled="isDisabled"
    :class="{
      unsolid: type == 'unsolid',
      small: size == 'small',
      big: size == 'big',
      bold: isBold,
      disabled: isDisabled,
      'button-loading': isLoading
    }"
    @click="$emit('click')"
    @mouseover="$emit('mouseover')"
    @mouseout="$emit('mouseout')"
  >
    <span class="button-content"><slot></slot></span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    type: {
      type: String,
      default: "solid"
    },
    size: {
      type: String
    },
    isBold: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.button {
  position: relative;
  padding: 10px 25px;
  box-sizing: border-box;
  color: $white;
  font-size: 15px;
  font-weight: 500;
  border: 1px solid $primary;
  border-radius: 10px;
  outline: none;
  background-color: $primary;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  &-loading {
    cursor: default;

    & .button-content {
      visibility: hidden;
      opacity: 0;
    }

    &:hover {
      opacity: 1;
    }

    &::after {
      content: "";
      position: absolute;
      width: 11px;
      height: 11px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border: 3.5px solid transparent;
      border-top-color: $white;
      border-radius: 50%;
      transition: 250ms ease-in-out;
      animation: button-loading-spinner 1s ease infinite;
    }
  }

  &-content {
    transition: 250ms ease-in-out;
  }
}

.unsolid {
  background-color: transparent;
  color: $primary;
}

.small {
  padding: 6px 17px;
  font-size: 13px;
}

.big {
  font-size: 17px;
}

.bold {
  font-weight: 500;
}

.disabled {
  opacity: 0.6;
  cursor: default;

  &:hover {
    opacity: 0.6;
  }
}

@media (max-width: 375px) {
  .button {
    padding: 8px 20px;
  }
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>
