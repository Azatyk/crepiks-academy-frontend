<template>
  <div class="message" :style="{ backgroundColor: backColor }">
    <i :class="icon" class="message__icon"></i>
    <h2 class="message__heading">{{ text }}</h2>
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
    }
  }
};
</script>

<style scoped>
.message {
  position: absolute;
  top: 0%;
  left: 0;
  right: 0;
  margin: auto;
  height: 2.3vw;
  width: 19%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transform: translateY(-100px);
  transition: 500ms ease-in-out;
}

.visible {
  transform: translateY(30px);
  transition: 500ms ease-in-out;
}

.message__icon {
  margin-right: 3%;
  font-size: 1vw;
  color: #dbdbdb;
}

.message__heading {
  font-size: 1vw;
  color: #dbdbdb;
  cursor: default;
}
</style>
