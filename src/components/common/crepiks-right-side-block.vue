<template>
  <div
    class="side-block"
    :class="{ 'side-block-open': isOpen, 'side-block-wide': isWide }"
  >
    <div class="side-block-close-wrapper">
      <i class="bx bx-x side-block-close" @click="$emit('close-block')"></i>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },

    isWide: {
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
  right: -600px;
  top: 0;
  padding: 60px 50px;
  padding-bottom: 0;
  width: 600px;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: $white;
  transition: transform 400ms ease-in-out;
  will-change: transform;
  z-index: 4;

  &-open {
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  }

  &-close {
    width: fit-content;
    color: $dark;
    font-size: 25px;
    opacity: 0.4;
    cursor: pointer;
    transition: 200ms ease-in-out;
    z-index: 4;
    position: absolute;

    &-wrapper {
      height: 40px;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  &-wide {
    right: -800px;
    width: 800px;
  }
}

@media (max-width: 1024px) {
  .side-block {
    width: 600px;
    right: -600px;

    &-open {
      -moz-transform: translateX(-100%);
      -ms-transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
      -o-transform: translateX(-100%);
      transform: translateX(-100%);
      box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    }
  }
}

@media (max-width: 750px) {
  .side-block {
    width: 100%;
    right: -100%;

    &-open {
      -moz-transform: translateX(-100%);
      -ms-transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
      -o-transform: translateX(-100%);
      transform: translateX(-100%);
      box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    }
  }
}

@media (max-width: 414px) {
  .side-block {
    padding: 30px 30px;
  }
}
</style>
