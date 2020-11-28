<template>
  <div ref="slider" class="slider">
    <div class="slider__dots">
      <div
        class="slider__dots-dot"
        :class="{
          'slider__dots-first': activeSlide == 1,
          'slider__dots-active': activeSlide == 1
        }"
        @click="activeSlide = 1"
      ></div>
      <div
        class="slider__dots-dot"
        :class="{
          'slider__dots-active': activeSlide == 2,
          'slider__dots-first': activeSlide == 1
        }"
        @click="activeSlide = 2"
      ></div>
      <div
        class="slider__dots-dot"
        :class="{
          'slider__dots-active': activeSlide == 3,
          'slider__dots-first': activeSlide == 1
        }"
        @click="activeSlide = 3"
      ></div>
      <div
        class="slider__dots-dot"
        :class="{
          'slider__dots-active': activeSlide == 4,
          'slider__dots-first': activeSlide == 1
        }"
        @click="activeSlide = 4"
      ></div>
      <div
        class="slider__dots-dot"
        :class="{
          'slider__dots-active': activeSlide == 5,
          'slider__dots-first': activeSlide == 1
        }"
        @click="activeSlide = 5"
      ></div>
    </div>
    <transition name="slide">
      <div
        class="slide first-slide"
        :class="{ 'slide-first': activeSlide == 1 }"
        v-if="activeSlide == 1"
      >
        <header class="first-slide__header">
          <h2 class="first-slide__header-logo">Crepiks</h2>
          <button
            class="first-slide__header-button"
            @click="$router.push('/app/home')"
          >
            Войти
          </button>
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
        <img
          class="first-slide__welcome-image"
          src="@/assets/images/landingSlide1.png"
          alt="Crepiks Academy"
        />
      </div>
    </transition>
    <transition name="slide">
      <div
        class="slide"
        :class="{ 'slide-second': activeSlide == 2 }"
        v-if="activeSlide == 2"
      >
        <div class="slide-text slide-text-second">
          <h2 class="slide-text__heading">
            Учитесь без ограничений.
          </h2>
          <p class="slide-text__paragraph">
            День? Ночь? Улица? Дом? Без разницы, ведь тут вы можете обучаться в
            удобное для вас время в удобном для вас месте и в удобном для вас
            темпе.
          </p>
          <button class="slide-text__button slide-text__button-second">
            Попробовать
          </button>
        </div>
        <img
          class="slide__image slide__image-second"
          src="@/assets/images/landingSlide2.jpg"
          alt="Интерактивность"
        />
      </div>
    </transition>
    <transition name="slide">
      <div
        class="slide"
        :class="{ 'slide-third': activeSlide == 3 }"
        v-if="activeSlide == 3"
      >
        <div class="slide-text">
          <h2 class="slide-text__heading">
            Пишите код на интерактивных курсах.
          </h2>
          <p class="slide-text__paragraph">
            Не нужно сидеть в зуме в 8 вечера и смотреть как ваш преподаватель
            программирует, программируйте сами! На интерактивных курсах вы
            можете практиковаться и писать код прямо на платформе.
          </p>
          <button class="slide-text__button slide-text__button-third">
            Попробовать
          </button>
        </div>
        <img
          class="slide__image slide__image-third"
          src="@/assets/images/landingSlide3.png"
          alt="Интерактивность"
        />
      </div>
    </transition>
    <transition name="slide">
      <div
        class="slide"
        :class="{ 'slide-fourth': activeSlide == 4 }"
        v-if="activeSlide == 4"
      >
        <div class="slide-text">
          <h2 class="slide-text__heading">
            Вам понадобятся две чашки кофе.
          </h2>
          <p class="slide-text__paragraph">
            Нет, это не шутка. Курсы на Crepiks Academy стоят не дороже двух
            чашек кофе или трех поездок на такси. Почему так? Дело в том что, мы
            стремимся сделать обучение программирование доступными каждому.
          </p>
          <button class="slide-text__button slide-text__button-fourth">
            Попробовать
          </button>
        </div>
        <img
          class="slide__image slide__image-fourth"
          src="@/assets/images/landingSlide4.png"
          alt="Интерактивность"
        />
      </div>
    </transition>
    <transition name="slide">
      <div
        class="slide"
        :class="{ 'slide-fifth': activeSlide == 5 }"
        v-if="activeSlide == 5"
      >
        <div class="slide-text slide-text__fifth">
          <h2 class="slide-text__heading">
            Не верите нам? Послушайте их.
          </h2>
          <p class="slide-text__paragraph">
            Если у вас остались сомнения, то взгляните на отзывы тех, кто уже
            прошел курс и во всю используют свои знания в жизни.
          </p>
          <button class="slide-text__button slide-text__button-fifth">
            Попробовать
          </button>
          <div class="slide-text__buttons-wrapper">
            <button class="arrow__button" @click="previousReview()">
              &larr;
            </button>
            <button class="arrow__button" @click="nextReview()">&rarr;</button>
          </div>
        </div>
        <transition name="slide">
          <img
            v-if="activeReview == 1"
            class="slide__image slide__image-fifth"
            src="@/assets/images/landingSlide5.png"
            alt="Интерактивность"
          />
        </transition>
        <transition name="slide">
          <img
            v-if="activeReview == 2"
            class="slide__image slide__image-fifth"
            src="@/assets/images/reviewAyana.png"
            alt="Интерактивность"
          />
        </transition>
        <transition name="slide">
          <img
            v-if="activeReview == 3"
            class="slide__image slide__image-fifth"
            src="@/assets/images/reviewArsen.png"
            alt="Интерактивность"
          />
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSlide: 1,
      activeReview: 1
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

      window.addEventListener("keydown", this.handleKeyPress);
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

      window.removeEventListener("keydown", this.handleKeyPress);
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
    },

    handleKeyPress(e) {
      console.log("handle key press");

      if (e.code == "ArrowUp") {
        if (this.activeSlide != 1) {
          this.activeSlide--;
        }
      } else if (e.code == "ArrowDown") {
        if (this.activeSlide != 5) {
          this.activeSlide++;
        }
      }

      if (e.code == "ArrowLeft") {
        if (this.activeReview != 1) {
          this.activeReview--;
        }
      } else if (e.code == "ArrowRight") {
        if (this.activeReview != 3) {
          this.activeReview++;
        }
      }

      this.removeMouseEventListener();

      setTimeout(() => {
        this.addMouseEventListener();
      }, 1300);
    },

    nextReview() {
      if (this.activeReview == 3) {
        this.activeReview == 3;
      } else {
        this.activeReview++;
      }
    },

    previousReview() {
      if (this.activeReview == 1) {
        this.activeReview == 1;
      } else {
        this.activeReview--;
      }
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
      background-color: white;
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
      border: 5px solid white;
      background: transparent !important;
    }

    &-first {
      background-color: #252528;
      border-color: #252528;
    }
  }
}

.slide {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0 5%;
  margin: auto;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &-first {
    background-color: white;
  }

  &-second {
    background: #050505;
  }

  &-third {
    background: linear-gradient(28deg, #c65840 26%, #ed8f60 50%, #f39e68 70%);
  }

  &-fourth {
    background: linear-gradient(180deg, #8dbac0, #8dbac0);
  }

  &-fifth {
    background: radial-gradient(
      circle farthest-corner at 30% 40%,
      #553e8d,
      #302153
    );
  }

  &-text {
    margin-right: 480px;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: 3;

    &-second {
      margin-bottom: 50px;
    }

    &__fifth {
      margin-right: 650px;
      max-width: 500px;
    }

    &__heading {
      margin-bottom: 20px;
      color: white;
      font-size: 50px;
      font-weight: 500;
    }

    &__paragraph {
      margin-bottom: 40px;
      color: #fffc;
      font-size: 23px;
      font-weight: 300;
      line-height: 150%;
    }

    &__button {
      padding: 8px 25px;
      font-size: 20px;
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

      &-second {
        color: #141414;
      }

      &-third {
        color: #d75900;
      }

      &-fourth {
        color: #8dbac0;
      }

      &-fifth {
        color: #553e8d;
      }
    }

    &__buttons-wrapper {
      width: 100px;
      display: flex;
      justify-content: space-between;
    }
  }

  &__image {
    position: absolute;
    width: 50%;

    &-second {
      width: 100%;
    }

    &-third {
      left: 60%;
      height: 700px;
      width: auto;
      transform: rotate(5deg);
    }

    &-fourth {
      width: 800px;
      right: auto;
      left: 38%;
    }

    &-fifth {
      bottom: 0;
      left: 40%;
      height: 700px;
      width: auto;
    }
  }

  &__heading {
    color: white;
  }

  &-enter-active,
  &-leave-active {
    transition: 800ms ease-in-out;
    opacity: 1;
    transform: translateY(0);
  }

  &-enter {
    opacity: 0;
    // transform: translateY(100px);
  }

  &-leave-to {
    opacity: 0;
    // transform: translateY(-100px);
  }
}

.first-slide {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
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
    margin-right: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: 2;

    &-heading {
      margin-bottom: 20px;
      color: #3d3d3d;
      line-height: 100%;
      font-size: 60px;
      font-weight: 700;
    }

    &-paragraph {
      margin-bottom: 40px;
      width: 500px;
      color: #252528;
      font-size: 21px;
      line-height: 130%;
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

    &-image {
      position: absolute;
      bottom: 0;
      left: 40%;
      right: 0;
      height: 600px;
      margin: auto;
    }
  }
}

.arrow__button {
  background-color: transparent;
  color: #ffffff;
  border: 0;
  font-size: 40px;
}

@media (max-width: 1200px) {
  .slide {
    &__image {
      &-fourth {
        left: 36%;
        width: 700px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .first-slide {
    &__header {
      padding: 0 5%;
      height: 130px;

      &-logo {
        font-size: 40px;
      }

      &-button {
        font-size: 23px;
      }
    }

    &__welcome {
      margin-right: 0;
      margin-bottom: 52%;
      align-items: center;
      text-align: center;

      &-heading {
        font-size: 70px;
      }

      &-paragraph {
        width: 650px;
        font-size: 30px;
      }

      &-button {
        padding: 12px 30px;
        font-size: 30px;
        border-radius: 10px;
      }

      &-image {
        left: 0;
        bottom: -50px;
        height: 50%;
      }
    }
  }

  .slider {
    &__dots {
      height: 160px;

      &-dot {
        width: 23px;
        height: 23px;
      }

      &-active {
        width: 30px;
        height: 30px;
        border-width: 8px;
      }
    }
  }

  .slide {
    flex-direction: column;

    &-text {
      margin-bottom: 500px;
      margin-right: 0;
      width: 700px;

      &-second {
        margin-bottom: 300px;
        margin-right: 100px;
      }

      &__heading {
        font-size: 70px;
      }

      &__paragraph {
        font-size: 30px;
      }

      &__button {
        padding: 10px 30px;
        font-size: 30px;
      }
    }

    &__image {
      &-second {
        right: 0;
        width: auto;
        height: 100%;
      }

      &-third {
        left: 10%;
        right: 0;
        top: 45%;
        margin: auto;
        transform: rotate(15deg);
      }

      &-fourth {
        left: 0;
        right: 0;
        top: 50%;
        margin: auto;
      }
    }
  }
}

@media (max-width: 768px) {
  .first-slide {
    &__header {
      height: 100px;

      &-logo {
        font-size: 35px;
      }

      &-button {
        font-size: 20px;
      }
    }

    &__welcome {
      &-heading {
        font-size: 53px;
      }

      &-paragraph {
        width: 500px;
        font-size: 23px;
      }

      &-button {
        padding: 10px 25px;
        font-size: 23px;
      }
    }
  }

  .slider {
    &__dots {
      height: 130px;

      &-dot {
        width: 17px;
        height: 17px;
      }

      &-active {
        width: 20px;
        height: 20px;
        border-width: 6px;
      }
    }
  }

  .slide {
    &-text {
      margin-bottom: 350px;
      width: 600px;

      &-second {
        margin-right: 0;
      }

      &__heading {
        font-size: 50px;
      }

      &__paragraph {
        font-size: 23px;
      }

      &__button {
        font-size: 23px;
      }
    }

    &__image {
      &-third {
        height: 500px;
      }

      &-fourth {
        width: 600px;
      }
    }
  }
}

@media (max-width: 550px) {
  .first-slide {
    &__header {
      height: 80px;

      &-logo {
        font-size: 25px;
      }

      &-button {
        padding: 7px 18px;
        font-size: 15px;
      }
    }

    &__welcome {
      &-heading {
        font-size: 38px;
      }

      &-paragraph {
        margin-bottom: 30px;
        width: 280px;
        font-size: 14px;
      }

      &-button {
        padding: 8px 20px;
        font-size: 15px;
        border-radius: 5px;
      }
    }
  }

  .slider {
    &__dots {
      height: 100px;

      &-dot {
        width: 13px;
        height: 13px;
      }

      &-active {
        width: 15px;
        height: 15px;
        border-width: 5px;
      }
    }
  }

  .slide {
    &-text {
      margin-bottom: 220px;
      width: 300px;

      &-second {
        margin-bottom: 200px;
      }

      &__heading {
        margin-bottom: 10px;
        font-size: 33px;
      }

      &__paragraph {
        margin-bottom: 20px;
        font-size: 15px;
      }

      &__button {
        padding: 8px 20px;
        font-size: 15px;
      }
    }

    &__image {
      &-third {
        left: 5%;
      }

      &-fourth {
        left: auto;
        right: 0%;
        top: 45%;
        width: 500px;
      }
    }
  }
}

@media (max-width: 320px) {
  .first-slide {
    &__welcome {
      &-heading {
        font-size: 35px;
      }

      &-paragraph {
        width: 270px;
        font-size: 13px;
      }

      &-button {
        font-size: 13px;
      }
    }
  }

  .slide {
    &-text {
      width: 280px;

      &__heading {
        font-size: 30px;
      }

      &__paragraph {
        font-size: 13px;
      }

      &__button {
        padding: 6px 17px;
        font-size: 13px;
      }
    }
  }
}
</style>
