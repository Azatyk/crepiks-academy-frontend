<template>
  <div
    class="modal"
    :class="{
      'modal-open': isModalOpen
    }"
  >
    <i
      class="bx bx-x modal-close"
      :class="{ 'modal-close-hide': isCloseButtonHide }"
      @click="$emit('close-modal')"
    ></i>
    <vuescroll :ops="ops">
      <div ref="scrollContent" class="content-full">
        <div class="content"><slot></slot></div>
      </div>
    </vuescroll>
  </div>
</template>

<script>
import vuescroll from "vuescroll";

import { mapGetters } from "vuex";

export default {
  props: {
    isModalOpen: {
      type: Boolean,
      default: false
    },
    isCloseButtonHide: {
      type: Boolean,
      default: false
    }
    // wide: {
    //   type: Boolean,
    //   default: false,
    // },
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
          scrollingX: false,
          scrollingY: true,
          speed: 300,
          easing: "easeInOutQuint",
          verticalNativeBarPos: "right"
        },
        rail: {
          background: "#2d2c2c10",
          opacity: 0.2,
          size: "10px",
          specifyBorderRadius: "10px",
          gutterOfEnds: null,
          gutterOfSide: "8px",
          keepShow: false
        },
        bar: {
          showDelay: 1000,
          onlyShowBarOnScroll: true,
          keepShow: true,
          background: "#2d2c2c80",
          opacity: 0.3,
          hoverStyle: false,
          specifyBorderRadius: "5px",
          minSize: 0,
          size: "10px",
          disable: false
        }
      },
      htmlOptions: {
        tabSize: 4,
        mode: "text/html",
        theme: "eclipse",
        lineNumbers: true,
        line: true
      },
      cssOptions: {
        tabSize: 2,
        mode: "text/css",
        theme: "eclipse",
        lineNumbers: true,
        line: true
      }
    };
  },

  components: {
    vuescroll
  },

  computed: {
    ...mapGetters(["isMobile"])
  },

  created() {
    if (this.isMobile) {
      this.ops.rail.size = "0px";
      this.ops.bar.size = "0px";
    }
  },

  watch: {
    isModalOpen() {
      if (this.isModalOpen) {
        this.$refs.scrollContent.scrollIntoView();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.modal {
  position: fixed;
  bottom: -99.5vh;
  left: 0;
  right: 0;
  margin: auto;
  width: 99%;
  height: 99.5vh;
  display: flex;
  justify-content: center;
  border-radius: 10px 10px 0 0;
  background-color: $white;
  z-index: 5;
  transition: transform 400ms ease-in-out;
  will-change: transform;

  &-open {
    -moz-transform: translateY(-99.5vh);
    -ms-transform: translateY(-99.5vh);
    -webkit-transform: translateY(-99.5vh);
    -o-transform: translateY(-99.5vh);
    transform: translateY(-99.5vh);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.2);
  }

  &-close {
    position: absolute;
    top: 4%;
    right: 3%;
    font-size: 35px;
    opacity: 0.6;
    transition: 200ms ease-in-out;
    cursor: pointer;
    z-index: 5;

    &:hover {
      opacity: 0.4;
    }

    &-hide {
      display: none;
    }
  }
}

.content {
  padding: 100px 0;
  margin: auto;
  max-width: 750px;
  height: auto;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;

  &-full {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
}

@media (max-width: 414px) {
  .modal {
    bottom: -100vh;
    width: 100%;
    height: 100vh;
    border-radius: 0;

    &-open {
      -moz-transform: translateY(-100vh);
      -ms-transform: translateY(-100vh);
      -webkit-transform: translateY(-100vh);
      -o-transform: translateY(-100vh);
      transform: translateY(-100vh);
    }
  }

  .content {
    padding: 70px 0;
  }
}

@media (max-width: 375px) {
  .content {
    padding-top: 100px 0;
  }
}

@media (max-width: 320px) {
  .content {
    padding-top: 50px 0;
  }
}
</style>
