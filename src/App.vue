<template>
  <div id="app">
    <transition name="fade">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("./assets/styles/main.css");

/* .fade-enter-active {
  transition: opacity 2s;
}

.fade-leave-active {
  transition: opacity 2s;
} */

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
