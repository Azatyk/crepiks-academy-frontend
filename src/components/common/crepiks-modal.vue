<template>
  <div
    class="modal"
    :class="{
      'modal-open': isModalOpen
    }"
  >
    <i class="bx bx-x modal-close" @click="$emit('modal-closed')"></i>
    <vuescroll :ops="ops">
      <div class="content-full">
        <div class="content"><slot></slot></div>
      </div>
    </vuescroll>
  </div>
</template>

<script>
import vuescroll from "vuescroll";

export default {
  props: {
    isModalOpen: {
      type: Boolean,
      default: false
    }
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
          background: "#2d2c2c",
          opacity: 0.2,
          size: "13px",
          specifyBorderRadius: "10px",
          gutterOfEnds: null,
          gutterOfSide: "8px",
          keepShow: false
        },
        bar: {
          showDelay: 1000,
          onlyShowBarOnScroll: true,
          keepShow: true,
          background: "#2d2c2c",
          opacity: 0.3,
          hoverStyle: false,
          specifyBorderRadius: "5px",
          minSize: 0,
          size: "13px",
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
    cursor: pointer;
    z-index: 3;

    &:hover {
      opacity: 0.9;
    }
  }
}

.content {
  padding: 100px 0;
  margin: auto;
  width: 750px;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  &-full {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>