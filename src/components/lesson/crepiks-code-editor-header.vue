<template>
  <div class="editor-header">
    <div class="files">
      <div
        class="file"
        :class="{ 'file-active': isHtmlShowing }"
        v-if="isHtmlExist"
        @click="$emit('index-clicked')"
      >
        <span class="file-title">index.html</span>
        <i class="bx bx-x file-icon" @click="$emit('index-closed')"></i>
      </div>
      <div
        class="file"
        :class="{ 'file-active': !isHtmlShowing }"
        v-if="isCssExist"
        @click="$emit('styles-clicked')"
      >
        <span class="file-title">styles.css</span
        ><i class="bx bx-x file-icon" @click="$emit('styles-closed')"></i>
      </div>
    </div>
    <div class="links">
      <div
        v-if="isTestLesson"
        class="header-link"
        @click="$emit('change-test-lesson-active-code')"
      >
        <span class="header-link-title">{{
          testLessonActiveCode == "userCode"
            ? "Наше решение"
            : testLessonActiveCode == "solutionCode"
            ? "Моё решение"
            : ""
        }}</span>
        <i class="bx bx-code-alt header-link-icon"></i>
      </div>
      <div class="header-link" @click="$emit('hint-opened')">
        <span class="header-link-title">Подсказка</span>
        <i class="bx bx-help-circle header-link-icon"></i>
      </div>
      <div class="header-link" @click="$emit('navigation-opened')">
        <span class="header-link-title">Список тем</span>
        <i class="bx bx-list-ul header-link-icon"></i>
      </div>
      <div class="browser-link" @click="$emit('switch-browser')">
        <span class="browser-link-title">К браузеру</span>
        <i class="bx bx-right-arrow-alt browser-link-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isHtmlShowing: {
      type: Boolean,
      default: true
    },
    isHtmlExist: {
      type: Boolean,
      default: true
    },
    isCssExist: {
      type: Boolean,
      default: true
    },
    isTestLesson: {
      type: Boolean,
      default: false
    },
    testLessonActiveCode: {
      type: String,
      default: ""
    }
  }
};
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
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    background-color: $white;
  }

  &-active {
    background-color: $white;
  }

  &-title {
    color: $dark;
    font-size: 16px;
    font-weight: 400;
    opacity: 0.7;
    user-select: none;
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

.header-link {
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
