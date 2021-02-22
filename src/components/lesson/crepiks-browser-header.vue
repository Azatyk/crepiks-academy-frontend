<template>
  <div class="browser-header">
    <div class="editor-link" @click="$emit('switch-editor')">
      <i class="bx bx-left-arrow-alt editor-link-icon"></i>
      <span class="editor-link-title">К редактору кода</span>
    </div>
    <span class="browser-header-size">1920x800</span>
    <div class="navigation-link" @click="$emit('navigation-opened')">
      <span class="navigation-link-title">Список тем</span>
      <i class="bx bx-list-ul navigation-link-icon"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.browser-header {
  padding: 0 30px;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d1d2d6;
  background-color: $background;

  &-size {
    position: absolute;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $dark;
    font-size: 16px;
    z-index: 1;
    opacity: 0.7;
  }
}

.editor-link {
  display: flex;
  flex-direction: row;
  color: $primary;
  cursor: pointer;
  transition: 200ms ease-in-out;
  z-index: 2;

  &:hover {
    opacity: 0.7;
  }

  &-title {
    font-size: 16px;
  }

  &-icon {
    margin-right: 10px;
    font-size: 20px;
    opacity: 0.7;
  }
}

.navigation-link {
  display: flex;
  flex-direction: row;
  color: $dark;
  opacity: 0.7;
  z-index: 1;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.5;
  }

  &-title {
    margin-right: 10px;
    font-size: 16px;
  }

  &-icon {
    font-size: 20px;
  }
}
</style>
