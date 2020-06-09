<template>
  <button
    :type="type"
    class="button"
    @click="$emit('action')"
    :class="{ bold: isBold }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    isBold: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false
    }
  }
};
</script>

<style scoped>
.button {
  padding: 11px 35px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8vw;
  color: white;
  font-weight: 300;
  text-decoration: none;
  border: none;
  background-color: #fc7979;
  border-radius: 4px;
  cursor: pointer;
  transition: 300ms ease-in-out;
  box-shadow: 0 0 5px 0px #d4d4d4;
}

.button:hover {
  background-color: #f78f8f;
  transition: 300ms ease-in-out;
}

.button:focus {
  border: none;
}

.bold {
  font-weight: 500;
}
</style>
