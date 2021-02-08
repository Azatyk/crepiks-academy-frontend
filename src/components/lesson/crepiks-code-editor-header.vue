<template>
  <div class="editor-header">
    <div class="files">
      <div class="file file-active">
        <span class="file-title">index.html</span>
        <i class="bx bx-x file-icon"></i>
      </div>
      <div class="file">
        <span class="file-title">styles.css</span
        ><i class="bx bx-x file-icon"></i>
      </div>
    </div>
    <div class="links">
      <div class="navigation-link">
        <span class="navigation-link-title">Список уроков</span>
        <i class="bx bx-list-ul navigation-link-icon"></i>
      </div>
      <div class="browser-link">
        <span class="browser-link-title">К браузеру</span>
        <i class="bx bx-right-arrow-alt browser-link-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.editor-header {
  padding-right: 30px;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d1d2d6;
  background-color: $white;
}

.files {
  height: 100%;
  display: flex;
  flex-direction: row;
}

.file {
  padding-left: 25px;
  padding-right: 15px;
  width: 200px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid #d1d2d6;
  background-color: $background;

  &-active {
    background-color: $white;
  }

  &-title {
    color: $dark;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    transition: 200ms ease-in-out;
    opacity: 0.7;

    &:hover {
      background-color: $white;
      opacity: 1;
    }
  }

  &-icon {
    color: $dark;
    font-size: 18px;
    opacity: 0.7;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.9;
    }
  }
}

.links {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.navigation-link {
  margin-right: 40px;
  display: flex;
  flex-direction: row;
  color: $dark;
  opacity: 0.7;
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

.browser-link {
  display: flex;
  flex-direction: row;
  color: $primary;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  &-title {
    margin-right: 10px;
    font-size: 16px;
  }

  &-icon {
    font-size: 20px;
    opacity: 0.7;
  }
}
</style>
