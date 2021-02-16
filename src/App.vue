<template>
  <div id="app">
    <vuescroll :ops="ops">
      <div class="container">
        <transition name="fade">
          <router-view :key="$route.path" />
        </transition>
      </div>
    </vuescroll>
  </div>
</template>

<script>
import vuescroll from "vuescroll";

export default {
  components: {
    vuescroll
  },

  data() {
    return {
      ops: {
        vuescroll: {
          mode: "native"
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: true,
          scrollingY: true,
          speed: 300,
          easing: "easeInOutQuint",
          verticalNativeBarPos: "right"
        },
        rail: {
          background: "#2d2c2c",
          opacity: 0.1,
          size: "12px",
          specifyBorderRadius: "10px",
          gutterOfEnds: null,
          gutterOfSide: "2px",
          keepShow: false
        },
        bar: {
          showDelay: 1000,
          onlyShowBarOnScroll: true,
          keepShow: true,
          background: "#838786",
          opacity: 1,
          hoverStyle: false,
          specifyBorderRadius: "5px",
          minSize: 0,
          size: "12px",
          disable: false
        }
      }
    };
  }
};
</script>

<style land="scss">
@import url("./assets/styles/main.css");

#app {
  width: 100vw;
  height: 100vh;
}

.container {
  min-width: 100vw;
  width: 100%;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.fade-enter-leave {
  animation: fadeOut 1s ease-in;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
</style>
