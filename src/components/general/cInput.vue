<template>
  <input :type="type" class="input" :placeholder="placeholder" />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: "text"
    },
    placeholder: {
      type: String,
      required: false,
      default: "Write anything..."
    }
  }
};
</script>

<style scoped>
.input {
  padding: 0vw 0.5vw;
  height: 2vw;
  width: 15vw;
  box-sizing: border-box;
  color: #516f8c;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px 0px #d4d4d4;
  outline: none;
}

input::-webkit-input-placeholder {
  color: #516f8c;
}
input::-moz-placeholder {
  color: #516f8c;
}

.input:focus {
  border: 1px solid #fc7979;
}
</style>
