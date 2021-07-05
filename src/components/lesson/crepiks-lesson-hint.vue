<template>
  <rightSideBlock :isOpen="isOpen" @close-block="$emit('close-hint')">
    <vuescroll :ops="ops">
      <div class="hint">
        <h2 class="hint-heading">Подсказка</h2>
        <runtime-text :blocks="hintBlocks" :contentTexts="hintBlocksContent" />
        <cButton class="hint-button" @click="$emit('close-hint')"
          >Понятно</cButton
        >
      </div>
    </vuescroll>
  </rightSideBlock>
</template>

<script>
import rightSideBlock from "@/components/common/crepiks-right-side-block";
import cButton from "@/components/common/crepiks-button";
import vuescroll from "vuescroll";
import runtimeText from "@/components/lesson/crepiks-lesson-runtime-text";

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    hintBlocks: {
      type: Array,
      required: true
    },
    hintBlocksContent: {
      type: Array,
      required: true
    }
  },

  components: {
    rightSideBlock,
    cButton,
    vuescroll,
    "runtime-text": runtimeText
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
          opacity: 0.0,
          size: "10px",
          specifyBorderRadius: "10px",
          gutterOfEnds: null,
          gutterOfSide: "0px",
          keepShow: false
        },
        bar: {
          showDelay: 1000,
          onlyShowBarOnScroll: true,
          keepShow: false,
          background: "#2d2c2c",
          opacity: 0.3,
          hoverStyle: false,
          specifyBorderRadius: "5px",
          minSize: 0,
          size: "10px",
          disable: false
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.hint {
  padding-bottom: 80px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;

  &-heading {
    margin-bottom: 20px;
    font-size: 32px;
    font-weight: 500;
  }

  &-text {
    padding-right: 20px;
    margin-bottom: 30px;
    width: 100%;
    box-sizing: border-box;
    color: $dark;
    font-size: 20px;
    line-height: 150%;
  }

  &-button {
    width: 120px;
  }
}
</style>
