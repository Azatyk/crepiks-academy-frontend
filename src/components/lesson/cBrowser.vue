<template>
  <div class="browser-page" ref="browserPage"></div>
</template>

<script>
export default {
  props: {
    markup: {
      type: String
    },
    styles: {
      type: String,
      default: `body {margin: 0; padding: 0;}`
    }
  },
  watch: {
    markup() {
      let browser = this.$refs.browserPage;
      browser.innerHTML = this.markup;
    }
  },
  mounted() {
    let browser = this.$refs.browserPage;
    browser.innerHTML = this.markup;
  }
};
</script>

<style scoped></style>
