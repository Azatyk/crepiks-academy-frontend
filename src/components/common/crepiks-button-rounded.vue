<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.button {
  height: fit-content;
  padding: 8px 20px;
  color: $white;
  background-color: $primary;
  border: 1px solid $primary;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;
}
</style>
