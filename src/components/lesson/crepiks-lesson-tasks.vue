<template>
  <div class="tasks" :class="{ 'tasks-closed': !isOpen }">
    <div class="tasks-header" @click="isOpen = !isOpen">
      <h3 class="tasks-header-title">Урок 2: Первый HTML</h3>
      <i
        class="bx bx-chevron-down tasks-header-icon"
        :class="{ 'tasks-header-icon-closed': !isOpen }"
      ></i>
    </div>
    <p
      class="tasks-description"
      :class="{ 'tasks-description-hidden': !isOpen }"
    >
      Ну вот и ваше первое задание, сейчас вы можете не понимать некоторые вещи,
      но не беспокойтесь, ведь мы просто пробуем написания кода на практике, да?
      На первой и 17 строке есть странные короткие символы, так вот, удалите их
      и посмотрите, что из этого выйдет.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.tasks {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 20px 25px;
  width: calc(100% - 240px);
  height: 40vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #d1d2d6;
  background-color: $white;
  z-index: 2;
  transition: 200ms ease-in-out;

  &-closed {
    height: 70px;
  }

  &-header {
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &-title {
      color: $dark;
      font-size: 18px;
      font-weight: 500;
    }

    &-icon {
      color: $dark;
      font-size: 30px;
      opacity: 0.4;
      cursor: pointer;
      transition: 200ms ease-in-out;

      &:hover {
        opacity: 0.6;
      }

      &-closed {
        transform: rotate(180deg);
      }
    }
  }

  &-description {
    color: $dark;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
    opacity: 0.7;
    transition: 200ms ease-in-out;

    &-hidden {
      opacity: 0;
    }
  }
}
</style>
