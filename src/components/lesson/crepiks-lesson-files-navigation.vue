<template>
  <div class="files-navigation">
    <span class="files-navigation-title">Файлы</span>
    <div class="structure">
      <div class="structure-folder" @click="isFolderOpen = !isFolderOpen">
        <i
          class="bx bxs-down-arrow structure-folder-arrow"
          :class="{ 'structure-folder-arrow-closed': !isFolderOpen }"
        ></i>
        <i class="bx bxs-folder-open structure-folder-icon"></i>
        <span class="structure-folder-title">my-project</span>
      </div>
      <div class="structure-file" v-if="isFolderOpen">
        <i class="bx bxs-file-html structure-file-icon"></i>
        <span class="structure-file-title">index.html</span>
      </div>
      <div class="structure-file" v-if="isFolderOpen">
        <i class="bx bxs-file-css structure-file-icon"></i>
        <span class="structure-file-title">styles.css</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFolderOpen: true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.files-navigation {
  width: 240px;
  height: calc(100vh - 50px);
  border-right: 1px solid #d1d2d6;
  background-color: $background;

  &-title {
    padding-left: 20px;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: $dark;
    font-size: 18px;
    font-weight: 300;
    border-bottom: 1px solid #d1d2d6;
  }
}

.structure {
  padding-top: 20px;
  width: 100%;
  height: 100%;

  &-folder {
    padding-left: 20px;
    width: 100%;
    height: 35px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &-arrow {
      margin-right: 7px;
      color: $dark;
      font-size: 10px;
      opacity: 0.7;
      transition: 100ms ease-in-out;

      &-closed {
        transform: rotate(-90deg);
      }
    }

    &-icon {
      margin-right: 5px;
      color: $dark;
      font-size: 20px;
      opacity: 0.7;
    }

    &-title {
      color: $dark;
      font-size: 18px;
      font-weight: 300;
    }
  }

  &-file {
    padding-left: 50px;
    width: 100%;
    height: 35px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      background-color: #f2f2f2;
    }

    &-icon {
      margin-right: 7px;
      color: $dark;
      font-size: 20px;
      opacity: 0.7;
    }

    &-title {
      color: $dark;
      font-size: 18px;
      font-weight: 300;
    }
  }
}
</style>
