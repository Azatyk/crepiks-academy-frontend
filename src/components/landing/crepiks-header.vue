<template>
  <div class="header">
    <div class="header-logo">
      <img class="header-logo-img" src="@/assets/images/logo.svg" alt="" />
    </div>
    <cButton text="Войти" type="unsolid" />
  </div>
</template>

<script>
import cButton from "@/components/common/crepiks-button.vue";
export default {
  components: {
    cButton
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.header {
  width: 100%;
  box-sizing: border-box;
  padding: 0 12%;
  padding-top: 5vh;
  background-color: $background;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-logo {
    width: 150px;

    &-img {
      width: 100%;
    }
  }
}
</style>
