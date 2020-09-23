<template>
  <div class="input">
    <input
      id="input"
      :type="type"
      class="input__field"
      v-model="inputDataLocal"
      @input="$emit('update-input-data', inputDataLocal)"
    />
    <label for="input" class="input__label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: "Email"
    },
    value: {
      requered: false
    }
  },
  data() {
    return {
      inputDataLocal: null
    };
  },
  mounted() {
    this.inputDataLocal = this.value;
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.input {
  position: relative;

  &__field {
    padding: 0 15px;
    width: 100%;
    height: 35px;
    box-sizing: border-box;
    font-size: 17px;
    border: none;
    border-radius: 12px;
    background-color: $color-3;

    &:focus ~ .input__label {
      bottom: 38px;
      font-size: 14px;
      opacity: 1;
    }

    &:valid ~ .input__label {
      bottom: 38px;
      font-size: 14px;
      opacity: 1;
    }
  }

  &__label {
    position: absolute;
    left: 15px;
    bottom: 7px;
    font-size: 17px;
    opacity: 0.7;
    transition: 150ms ease-in-out;
  }
}
</style>
