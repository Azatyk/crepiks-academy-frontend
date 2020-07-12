<template>
  <button
    :type="type"
    class="button"
    @click="$emit('action')"
    :class="[
      appearanceType == 'negative' ? 'negative' : '',
      appearanceType == 'positive' ? 'positive' : '',
      { bold: isBold }
    ]"
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
    },
    appearanceType: {
      type: String,
      required: false,
      default: "negative"
    }
  }
};
</script>

<style scoped>
.button {
  padding: 0.8vw 2vw;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8vw;
  color: white;
  font-weight: 300;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 300ms ease-in-out;
  box-shadow: 0 0 5px 0px #d4d4d4;
}

.negative {
  background-color: #fc7979;
}

.negative:hover {
  background-color: #ff9191;
}

.positive {
  background-color: #2ecc71;
}

.positive:hover {
  background-color: #60e699;
}

.button:hover {
  transition: 300ms ease-in-out;
}

.button:focus {
  border: none;
}

.bold {
  font-weight: 500;
}
</style>
