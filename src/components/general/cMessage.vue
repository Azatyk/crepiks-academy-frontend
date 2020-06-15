<template>
  <div id="message" class="message" :style="{ backgroundColor: backColor }">
    <i :class="icon" class="message__icon" :style="{ color: textColor }"></i>
    <h2 class="message__heading" :style="{ color: textColor }">{{ text }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
      default: "fas fa-exclamation-circle"
    },
    text: {
      type: String,
      required: false,
      default: "Error"
    },
    backColor: {
      type: String,
      required: false,
      default: "#FC7979"
    },
    textColor: {
      type: String,
      required: false,
      default: "#dbdbdb"
    },
    isActive: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    isActive(val) {
      if (val) {
        document.getElementById("message").classList.add("visible");
      } else {
        document.getElementById("message").classList.remove("visible");
      }
      setTimeout(() => {
        console.log(val);
        this.$emit("change", false);
      }, 2000);
    }
  }
};
</script>

<style scoped>
.message {
  position: fixed;
  top: 0%;
  left: 0;
  right: 0;
  padding: 3px 7px;
  margin: auto;
  min-height: 2.1vw;
  height: auto;
  width: 18%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0.2;
  transform: translateY(-100px);
  transition: 500ms ease-in-out;
}

.visible {
  opacity: 1;
  transform: translateY(30px);
  transition: 500ms ease-in-out;
}

.message__icon {
  margin-right: 2%;
  font-size: 1vw;
  color: #dbdbdb;
}

.message__heading {
  font-size: 0.9vw;
  cursor: default;
}
</style>
