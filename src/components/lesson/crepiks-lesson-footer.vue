<template>
  <div class="lesson-footer">
    <button class="lesson-footer-theory">Теория</button>
    <button class="lesson-footer-check">Проверить</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.lesson-footer {
  position: relative;
  width: 100%;
  height: 50px;
  z-index: 2;

  &-theory {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $dark;
    font-size: 18px;
    font-weight: 500;
    border: none;
    border-top: 1px solid $border;
    outline: none;
    opacity: 0.8;
    z-index: 2;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.6;
    }
  }

  &-check {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 30px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $dark;
    font-size: 16px;
    font-weight: 500;
    border: none;
    border-left: 1px solid $border;
    border-top: 1px solid $border;
    z-index: 3;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      color: $white;
      background-color: $primary;
      border-color: $primary;
    }
  }
}
</style>
