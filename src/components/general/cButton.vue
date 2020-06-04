<template>
  <router-link :to="route" class="button" :class="{ bold: isBold }">{{
    text
  }}</router-link>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: true
    },
    isBold: {
      type: Boolean,
      required: false,
      default: true
    }
  }
};
</script>

<style scoped>
.button {
  margin-right: 10%;
  padding: 11px 35px;
  width: auto;
  font-size: 0.8vw;
  color: white;
  font-weight: 300;
  text-decoration: none;
  background-color: #fc7979;
  border-radius: 4px;
  transition: 300ms ease-in-out;
}

.button:hover {
  background-color: #f78f8f;
  transition: 300ms ease-in-out;
}

.bold {
  font-weight: 500;
}
</style>
