<template>
  <div class="practice">
    <div class="practice-content">
      <h2 class="practice-heading">
        Чего ждать? Попробуем что-нибудь написать.
      </h2>
      <p class="practice-paragraph">
        Перепешите или скопируйте этот код
        <span class="practice-paragraph-bold"
          >&#60;h1&#62;Hello world!&#60;/h1&#62;</span
        >
        и нажмите "Проверить". В мини браузере увидите результат выполнения
        кода, а автоматический тест оповестит вас о решении задания.
      </p>
      <!-- <div class="practice-editor">
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
      </div> -->
      <div class="practice-editor">
        <div class="practice-editor-block">
          <div class="practice-editor-title">Редактор кода</div>
          <div class="practice-editor-content">
            <button class="practice-editor-button">Проверить</button>
          </div>
        </div>
        <div class="practice-editor-block">
          <div class="practice-editor-title practice-editor-heading">
            Мини браузер
          </div>
          <div class="practice-editor-content"></div>
        </div>
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

  &-content {
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
  }

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
    font-weight: 300;
    opacity: 0.9;

    &-bold {
      font-weight: 400;
    }
  }

  &-editor {
    width: 100%;
    margin-top: 5vh;
    border-radius: 15px;
    display: flex;
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.02);

    &-block {
      width: 50%;
      height: 70vh;
      background-color: $white;
      border-radius: 15px 0 0 15px;
      border: 1px solid #d1d2d6;
      border-top: 0;
      border-left: 0;
      border-bottom: 0;
      position: relative;
    }

    &-block:last-child {
      border-radius: 0 15px 15px 0;
      border-right: 0;
    }

    &-title {
      width: 100%;
      font-size: 14px;
      font-weight: 400;
      padding: 20px 20px;
      box-sizing: border-box;
      border: 1px solid #d1d2d6;
      border-top: 0;
      border-left: 0;
      border-right: 0;
      border-radius: 15px 0 0 0;
    }

    &-heading {
      border-radius: 0 15px 0 0;
    }

    &-content {
      width: 100%;
    }

    &-button {
      font-size: 17px;
      color: $primary;
      background-color: transparent;
      height: fit-content;
      border: 0;
      padding: 15px 20px;
      position: absolute;
      right: 0;
      bottom: 0;
      font-weight: 500;
    }
  }
}

@media (max-width: 1000px) {
  .practice {
    padding: 15vh 5%;
  }
}

@media (max-width: 720px) {
  .practice {
    &-editor {
      flex-direction: column;

      &-block {
        width: 100%;
        height: 50vh;
        border-right: 0;
        border-bottom: 1px solid #d1d2d6;
        border-radius: 15px 15px 0 0;
      }

      &-block:last-child {
        border-radius: 0 0 15px 15px;
        border-bottom: 0;
      }
    }
  }
}

@media (max-width: 550px) {
  .practice {
    padding: 10vh 5%;

    &-heading {
      width: 100%;
      font-size: 25px;
    }

    &-paragraph {
      width: 90%;
      font-size: 17px;
    }
  }
}

@media (max-width: 450px) {
  .practice {
    &-editor {
      &-block {
        height: 40vh;
      }
    }
  }
}
</style>
