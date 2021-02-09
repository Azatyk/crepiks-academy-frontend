<template>
  <iframe
    src="/browser.html"
    name="browser"
    class="browser"
    ref="browserFrame"
    id="browserFrame"
    noresize
  ></iframe>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.browser {
  width: 100%;
  min-height: calc(100vh - 100px);
}
</style>
