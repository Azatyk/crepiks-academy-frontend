<template>
  <div class="practice">
    <h2 class="practice-heading">Чего ждать? Попробуем что-нибудь написать.</h2>
    <p class="practice-paragraph">
      Перепешите или скопируйте этот код
      <span class="practice-paragraph-bold"
        >&#60;h1&#62;Hello world!&#60;/h1&#62;</span
      >
      и нажмите "Проверить". В мини браузере увидите результат выполнения кода,
      а автоматический тест оповестит вас о решении задания.
    </p>
    <div class="practice-editor">
      <div class="practice-editor-title">
        <div class="practice-editor-heading">Редактор кода</div>
        <div class="practice-editor-heading">Мини браузер</div>
      </div>
      <div class="practice-editor-content">
        <div class="practice-editor-container">
          <button class="practice-editor-button">Проверить</button>
        </div>
        <div class="practice-editor-container"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.practice {
  width: 100%;
  height: fit-content;
  padding: 15vh 12%;
  box-sizing: border-box;
  background-color: $background;
  text-align: left;

  &-heading {
    color: $dark;
    font-weight: 400;
    font-size: 35px;
  }

  &-paragraph {
    width: 85%;
    color: $dark;
    padding-top: 15px;
    font-size: 20px;

    &-bold {
      font-weight: 700;
    }
  }

  &-editor {
    width: 100%;
    padding-top: 10vh;

    &-title {
      width: 100%;
      display: flex;
    }

    &-heading {
      font-size: 14px;
      font-weight: 700;
      width: 50%;
      padding: 20px 20px;
      border: 2px solid $background;
      background-color: $white;
      border-radius: 15px 0 0 0;
    }

    &-heading:last-child {
      border-radius: 0 15px 0 0;
    }

    &-content {
      width: 100%;
      height: 50vh;
      display: flex;
    }

    &-container {
      width: 50%;
      background-color: $white;
      border: 2px solid $background;
      border-radius: 0 0 0 15px;
      position: relative;
    }

    &-container:last-child {
      border-radius: 0 0 15px 0;
    }

    &-button {
      color: $primary;
      background-color: transparent;
      height: fit-content;
      border: 0;
      padding: 15px 20px;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
}
</style>
