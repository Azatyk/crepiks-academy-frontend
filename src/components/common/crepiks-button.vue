<template>
  <button
    class="button"
    :disabled="isDisabled"
    :class="{
      unsolid: type == 'unsolid',
      small: size == 'small',
      big: size == 'big',
      bold: isBold,
      disabled: isDisabled
    }"
    @click="$emit('click')"
  >
    {{ text }}
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.button {
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
</style>
