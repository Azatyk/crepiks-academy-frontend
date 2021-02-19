<template>
  <rightSideBlock
    :isOpen="isOpen"
    @close-block="$emit('close-transactions-block')"
  >
  </rightSideBlock>
</template>

<script>
import rightSideBlock from "@/components/common/crepiks-right-side-block";

export default {
  components: {
    rightSideBlock
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
