<template>
  <div class="side-block" :class="{ 'side-block-open': isOpen }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.side-block {
  position: fixed;
  right: -40%;
  top: 0;
  padding: 60px 50px;
  padding-bottom: 0;
  width: 40%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: $white;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  transition: 400ms ease-in-out;
  z-index: 3;

  &-open {
    right: 0;
  }
}
</style>
