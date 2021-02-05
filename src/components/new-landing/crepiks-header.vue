<template>
  <div class="header">
    <div class="header-logo">
      <img class="header-logo-img" src="@/assets/images/logo.svg" alt="" />
    </div>
    <button class="header-button">Войти</button>
  </div>
</template>

<script>
export default {};
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

  &-button {
    height: fit-content;
    background-color: transparent;
    color: $primary;
    border: 1px solid $primary;
    border-radius: 15px;
    padding: 5px 20px;
  }
}
</style>
