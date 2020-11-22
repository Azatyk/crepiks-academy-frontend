<template>
  <div
    ref="slider"
    class="slider"
    :class="{
      'slider-first': activeSlide == 1,
      'slider-second': activeSlide == 2,
      'slider-third': activeSlide == 3
    }"
  >
    <transition name="slide">
      <div class="slide" v-if="activeSlide == 1">
        <h1 class="slide__heading">Я первый слайд</h1>
      </div>
    </transition>
    <transition name="slide">
      <div class="slide" v-if="activeSlide == 2">
        <h1 class="slide__heading">Я второй слайд</h1>
      </div>
    </transition>
    <transition name="slide">
      <div class="slide" v-if="activeSlide == 3">
        <h1 class="slide__heading">Я третий слайд</h1>
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
        if (this.activeSlide != 3) {
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
      }, 1000);
    }
  }
};
</script>

<style scoped lang="scss">
::-webkit-scrollbar {
  width: 0 !important;
}

.slider {
  position: fixed;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1000ms ease-in-out;
  overflow: hidden;

  &-first {
    background-color: #3d3d3d;
  }

  &-second {
    background-color: #8dbac0;
  }

  &-third {
    background-color: #ed8f60;
  }
}

.slide {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

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
</style>
