<template>
  <router-link to="/" class="link">
    <h3 class="logo" :style="{ fontSize: fontSize + 'vw' }">
      Crepiks <span class="logo__bold">Academy</span>
    </h3>
  </router-link>
</template>

<script>
export default {
  props: {
    fontSize: {
      type: Number,
      required: false,
      default: 2
    }
  }
};
</script>

<style scoped>
.link {
  text-decoration: none;
}

.logo {
  color: white;
  font-weight: normal;
  text-transform: uppercase;
}

.logo__bold {
  color: #fc7979;
  font-weight: 700;
}
</style>
