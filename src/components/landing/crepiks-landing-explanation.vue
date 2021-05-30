<template>
  <div class="explanation">
    <h2 class="explanation-title">
      Что ещё за <span class="explanation-title-green">интерактив</span>?
      <img
        src="@/assets/images/smile-think.svg"
        alt="smile-think"
        class="explanation-title-smile"
      />
    </h2>
    <p class="explanation-text">
      Интерактив — это обучающий материал с практикой. Изучив новую тему, ты
      сможешь сразу же опробовать знания на реальном примере.
    </p>
    <p class="explanation-text">
      Каждая тема интерактива состоит из
      <span
        class="explanation-text-green"
        :class="{ 'explanation-text-green-active': isTheoryOpen }"
        @click="isTheoryOpen = true"
        >теории</span
      >
      и
      <span
        class="explanation-text-green"
        :class="{ 'explanation-text-green-active': !isTheoryOpen }"
        @click="isTheoryOpen = false"
        >практики</span
      >
    </p>
    <div class="explanation-container">
      <transition name="fade" mode="out-in">
        <img
          src="@/assets/images/curve-arrow.svg"
          class="explanation-arrow"
          alt="explanation-arrow"
          key="theory"
          v-if="isTheoryOpen"
        />
        <img
          src="@/assets/images/curve-arrow.svg"
          class="explanation-arrow-right"
          alt="explanation-arrow"
          key="practice"
          v-else
        />
      </transition>
    </div>
    <div class="explanation-container-mobile">
      <transition name="fade" mode="out-in">
        <img
          src="@/assets/images/curve-arrow-small.svg"
          class="explanation-arrow"
          alt="explanation-arrow"
          key="theory"
          v-if="isTheoryOpen"
        />
        <img
          src="@/assets/images/curve-arrow-small.svg"
          class="explanation-arrow-right"
          alt="explanation-arrow"
          key="practice"
          v-else
        />
      </transition>
    </div>
    <transition name="fade" mode="out-in">
      <div class="explanation-card" v-if="isTheoryOpen" key="theory">
        <div class="explanation-card-content">
          <h4 class="explanation-card-title">Теория</h4>
          <p class="explanation-card-text">
            Это текстовый теоретический материал с примерами кода и объяснением
            темы
          </p>
        </div>
        <div class="explanation-card-image">
          <img
            src="@/assets/images/explanation-macbook-mockup.svg"
            alt="explanation-macbook-mockup"
            class="explanation-card-image-inner"
          />
        </div>
      </div>
      <div class="explanation-card" v-else key="practice">
        <div class="explanation-card-content">
          <h4 class="explanation-card-title">Практика</h4>
          <p class="explanation-card-text">
            Встроенный текстовый редактор, в котором ты сможешь написать
            реальный код
          </p>
        </div>
        <div class="explanation-card-image">
          <img
            src="@/assets/images/explanation-macbook-mockup.svg"
            alt="explanation-macbook-mockup"
            class="explanation-card-image-inner"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTheoryOpen: true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.explanation {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 300px;
  margin-bottom: 100px;
  width: 100%;

  &-title {
    width: 85%;
    font-size: 50px;
    color: $dark;
    opacity: 0.85;

    &-green {
      color: $primary;
    }

    &-smile {
      margin-bottom: -5px;
    }
  }

  &-text {
    width: 85%;
    font-size: 30px;
    color: $dark;
    margin-top: 30px;
    opacity: 0.7;
    line-height: 44px;

    &-green {
      color: $primary;
      text-decoration: underline;
      cursor: pointer;
      transition: 200ms ease-in-out;
      opacity: 0.7;

      &-active {
        opacity: 1;
      }
    }

    &-green:hover {
      opacity: 0.7;
    }
  }

  &-card {
    width: 85%;
    background-color: $white;
    border-radius: 20px;
    height: 515px;
    padding: 40px 60px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 50px rgba(60, 60, 60, 0.05);

    &-content {
      width: 40%;
    }

    &-title {
      font-size: 40px;
      color: $dark;
      margin-top: 80px;
      font-weight: 400;
    }

    &-text {
      font-size: 26px;
      color: $light-dark;
      margin-top: 35px;
      line-height: 38px;
    }

    &-image {
      height: 100%;
      display: flex;
      align-items: center;
      margin-top: 20px;
      width: 60%;
      margin-right: -30px;

      &-inner {
        width: 100%;
      }
    }
  }

  &-container {
    width: 100%;

    &-mobile {
      display: none;
    }
  }

  &-arrow {
    width: 400px;
    margin-left: 300px;

    &-right {
      width: 400px;
      margin-left: 430px;
    }
  }
}

@media (max-width: 1100px) {
  .explanation {
    margin-top: 200px;

    &-title {
      font-size: 35px;

      &-smile {
        height: 40px;
      }
    }

    &-text {
      font-size: 22px;
      line-height: 35px;
    }

    &-arrow {
      width: 300px;
      margin-left: 220px;

      &-right {
        width: 300px;
        margin-left: 310px;
      }
    }

    &-card {
      &-text {
        line-height: 30px;
        margin-top: 20px;
      }
    }
  }
}

@media (max-width: 941px) {
  .explanation {
    &-card {
      height: fit-content;

      &-title {
        font-size: 30px;
        color: $dark;
        margin-top: 50px;
        font-weight: 400;
      }

      &-text {
        font-size: 17px;
        line-height: 25px;
      }
    }
  }
}

@media (max-width: 864px) {
  .explanation {
    &-card {
      &-title {
        margin-top: 30px;
      }
    }
  }
}

@media (max-width: 739px) {
  .explanation {
    &-card {
      padding: 30px 50px;
      margin-top: 100px;
      flex-direction: column;
      align-items: center;

      &-content {
        width: 100%;
      }

      &-title {
        font-size: 27px;
      }

      &-text {
        font-size: 15px;
      }

      &-image {
        width: 100%;
        margin-top: 50px;
        margin-right: 0;
      }
    }

    &-container {
      display: none;
    }
  }
}

@media (max-width: 414px) {
  .explanation {
    height: 100vh;

    &-title {
      font-size: 26px;

      &-smile {
        display: none;
      }
    }

    &-text {
      font-size: 20px;
      margin-top: 20px;
    }

    &-container {
      &-mobile {
        display: block;
      }
    }

    &-card {
      padding: 20px 30px;
      margin-top: 10px;

      &-content {
        width: 100%;
      }

      &-title {
        font-size: 27px;
      }

      &-text {
        font-size: 17px;
      }

      &-image {
        width: 100%;
        margin-top: 50px;
        margin-right: 0;
      }
    }

    &-arrow {
      width: 160px;
      margin-left: -80px;
      align-self: flex-start;

      &-right {
        width: 160px;
        margin-left: 100px;
      }
    }
  }
}

@media (max-width: 320px) {
  .explanation {
    height: fit-content;

    &-title {
      font-size: 22px;

      &-smile {
        display: none;
      }
    }

    &-text {
      font-size: 16px;
      line-height: 30px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
