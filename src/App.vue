<template>
  <div id="app">
    <vuescroll :ops="ops">
      <div class="container">
        <router-view :key="$route.path" />
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
      isMobile: null,
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
  },

  created() {
    if (document.body.clientWidth <= 414) {
      this.isMobile = true;
      this.ops.rail.size = "0px";
      this.ops.bar.size = "0px";
    } else {
      this.isMobile = false;
    }

    this.$store.commit("setIsMobile", this.isMobile);
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
</style>
