<template>
  <router-link to="/" class="link">
    <h3 class="logo" :style="{ fontSize: fontSize + 'vw' }" :class="colorType">
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
    },
    colorType: {
      type: String,
      required: false,
      default: "dark"
    }
  }
};
</script>

<style scoped>
.link {
  text-decoration: none;
}

.logo {
  font-weight: normal;
  text-transform: uppercase;
}

.dark {
  color: #34495e;
}

.light {
  color: #f8f7fc;
}

.logo__bold {
  color: #fc7979;
  font-weight: 700;
}
</style>
