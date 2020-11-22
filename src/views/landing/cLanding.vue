<template>
  <div
    ref="slider"
    class="slider"
    :class="{
      'slider-first': activeSlide == 1,
      'slider-second': activeSlide == 2,
      'slider-third': activeSlide == 3,
      'slider-fourth': activeSlide == 4,
      'slider-fifth': activeSlide == 5
    }"
  >
    <div class="slider__dots">
      <div
        class="slider__dots-dot"
        :class="{ 'slider__dots-active': activeSlide == 1 }"
        @click="activeSlide = 1"
      ></div>
      <div
        class="slider__dots-dot"
        :class="{ 'slider__dots-active': activeSlide == 2 }"
        @click="activeSlide = 2"
      ></div>
      <div
        class="slider__dots-dot"
        :class="{ 'slider__dots-active': activeSlide == 3 }"
        @click="activeSlide = 3"
      ></div>
      <div
        class="slider__dots-dot"
        :class="{ 'slider__dots-active': activeSlide == 4 }"
        @click="activeSlide = 4"
      ></div>
      <div
        class="slider__dots-dot"
        :class="{ 'slider__dots-active': activeSlide == 5 }"
        @click="activeSlide = 5"
      ></div>
    </div>
    <transition name="slide">
      <div class="slide first-slide" v-if="activeSlide == 1">
        <header class="first-slide__header">
          <h2 class="first-slide__header-logo">Crepiks</h2>
          <button class="first-slide__header-button">Войти</button>
        </header>
        <div class="first-slide__welcome">
          <div class="first-slide__welcome-heading">
            Не откладывай.<br />Программируй.
          </div>
          <p class="first-slide__welcome-paragraph">
            Ни один курс не сделает из вас программиста, пока вы сами этого не
            захотите. Самое время начать, а Crepiks Academy вам с этим поможет.
          </p>
          <button class="first-slide__welcome-button">Начать обучение</button>
        </div>
      </div>
    </transition>
    <transition name="slide">
      <div class="slide" v-if="activeSlide == 2">
        <h1 class="slide__heading">Я второй слайд</h1>
      </div>
    </transition>
    <transition name="slide">
      <div class="slide" v-if="activeSlide == 3">
        <div class="slide-text">
          <h2 class="slide-text__heading">
            Пишите код на интерактивных курсах.
          </h2>
          <p class="slide-text__paragraph">
            Не нужно сидеть в зуме в 8 вечера и смотреть как ваш преподаватель
            программирует, программируйте сами! На интерактивных курсах вы
            можете практиковаться и писать код прямо на платформе.
          </p>
          <button class="slide-text__button">Попробовать</button>
        </div>
        <img
          class="slide__image"
          src="@/assets/images/landingSlide3.png"
          alt="Интерактивность"
        />
      </div>
    </transition>
    <transition name="slide">
      <div class="slide" v-if="activeSlide == 4">
        <h1 class="slide__heading">Я четвертый слайд</h1>
      </div>
    </transition>
    <transition name="slide">
      <div class="slide" v-if="activeSlide == 5">
        <h1 class="slide__heading">Я пятый слайд</h1>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSlide: 1
    };
  },

  mounted() {
    // немного кросс-браузерности
    this.addMouseEventListener();
  },

  methods: {
    addMouseEventListener() {
      let slider = this.$refs.slider;
      if (slider.addEventListener) {
        if ("onwheel" in document) {
          // IE9+, FF17+, Ch31+
          slider.addEventListener("wheel", this.handleScroll);
        } else if ("onmousewheel" in document) {
          // устаревший вариант события
          slider.addEventListener("mousewheel", this.handleScroll);
        } else {
          // Firefox < 17
          slider.addEventListener("MozMousePixelScroll", this.handleScroll);
        }
      } else {
        // IE8-
        slider.attachEvent("onmousewheel", this.handleScroll);
      }
    },

    removeMouseEventListener() {
      let slider = this.$refs.slider;
      if (slider.addEventListener) {
        if ("onwheel" in document) {
          // IE9+, FF17+, Ch31+
          slider.removeEventListener("wheel", this.handleScroll);
        } else if ("onmousewheel" in document) {
          // устаревший вариант события
          slider.removeEventListener("mousewheel", this.handleScroll);
        } else {
          // Firefox < 17
          slider.removeEventListener("MozMousePixelScroll", this.handleScroll);
        }
      } else {
        // IE8-
        slider.removeEventListener("onmousewheel", this.handleScroll);
      }
    },

    handleScroll(e) {
      e = e || window.event;

      // wheelDelta не даёт возможность узнать количество пикселей
      var delta = e.deltaY || e.detail || e.wheelDelta;

      if (delta > 0) {
        if (this.activeSlide != 5) {
          this.activeSlide++;
        }
      } else {
        if (this.activeSlide != 1) {
          this.activeSlide--;
        }
      }

      e.preventDefault ? e.preventDefault() : (e.returnValue = false);

      this.removeMouseEventListener();

      setTimeout(() => {
        this.addMouseEventListener();
      }, 1300);
    }
  }
};
</script>

<style scoped lang="scss">
::-webkit-scrollbar {
  width: 0 !important;
}

.slider {
  position: relative;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1000ms ease-in-out;
  overflow: hidden;

  &__dots {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translate(0, -50%);
    margin: auto;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 5;

    &-dot {
      width: 13px;
      height: 13px;
      box-sizing: border-box;
      border-radius: 50%;
      background-color: #252528;
      transition: 300ms ease-in-out;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
      }
    }

    &-active {
      width: 17px;
      height: 17px;
      box-sizing: border-box;
      border: 5px solid #252528;
      background: transparent;
    }
  }

  &-first {
    background-color: white;
  }

  &-second {
    background-color: #3d3d3d;
  }

  &-third {
    background: linear-gradient(28deg, #c65840 26%, #ed8f60 50%, #f39e68 70%);
  }

  &-fourth {
    background-color: #8dbac0;
  }

  &-fifth {
    background-color: #553e8d;
  }
}

.slide {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &-text {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    &__heading {
      margin-bottom: 20px;
      color: white;
      font-size: 3.3rem;
      font-weight: 500;
    }

    &__paragraph {
      margin-bottom: 40px;
      color: #fffc;
      font-size: 1.3rem;
      font-weight: 300;
      line-height: 150%;
    }

    &__button {
      padding: 8px 25px;
      color: #d75900;
      font-size: 1.3rem;
      font-weight: 500;
      border: 2px solid white;
      border-radius: 5px;
      outline: none;
      background-color: white;
      transition: 200ms ease-in-out;

      &:hover {
        color: white;
        background: transparent;
      }
    }
  }

  &__image {
    height: 700px;
  }

  &__heading {
    color: white;
  }

  &-enter-active,
  &-leave-active {
    transition: 1000ms ease-in-out;
    opacity: 1;
    transform: translateY(0);
  }

  &-enter {
    opacity: 0;
    transform: translateY(50px);
  }

  &-leave-to {
    opacity: 0;
    transform: translateY(-50px);
  }
}

.first-slide {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;

  &__header {
    position: absolute;
    top: 0;
    padding: 0 3%;
    width: 100%;
    max-width: 1200px;
    height: 90px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-logo {
      color: #545fd9;
      font-size: 35px;
      font-weight: 700;
    }

    &-button {
      padding: 8px 25px;
      box-sizing: border-box;
      color: #545fd9;
      font-size: 17px;
      border: 2px solid #545fd9;
      border-radius: 5px;
      outline: none;
      background-color: transparent;
      transition: 200ms ease-in-out;

      &:hover {
        color: white;
        background-color: #545fd9;
      }
    }
  }

  &__welcome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-heading {
      margin-bottom: 20px;
      color: #252528;
      font-size: 60px;
      font-weight: 700;
    }

    &-paragraph {
      margin-bottom: 40px;
      width: 500px;
      color: #252528;
      font-size: 20px;
      text-align: center;
    }

    &-button {
      padding: 8px 25px;
      color: white;
      font-size: 20px;
      border: 1px solid #4316f3;
      border-radius: 5px;
      outline: none;
      background-color: #4316f3;
      transition: 200ms ease-in-out;

      &:hover {
        color: #4316f3;
        background-color: transparent;
      }
    }
  }
}
</style>
