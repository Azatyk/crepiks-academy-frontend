<template>
  <div>
    <transition v-if="isModalOpen" name="fade" appear>
      <div class="modal">
        <i class="bx bx-x modal-close" @click="isModalOpen = false"></i>
        <transition name="fadeIn" appear>
          <img
            class="modal-image"
            :src="require(`@/assets/images/${fileName}`)"
          />
        </transition>
      </div>
    </transition>
    <div class="modal-default" @click="isModalOpen = true">
      <img
        class="modal-default-image"
        :src="require(`@/assets/images/${fileName}`)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fileName: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      isModalOpen: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.modal {
  width: 100%;
  height: 100vh;
  background: rgba(60, 60, 60, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 6;
  position: fixed;
  top: 0;
  left: 0;

  &-image {
    height: 85%;
  }

  &-close {
    position: absolute;
    top: 4%;
    right: 3%;
    font-size: 35px;
    color: $white;
    opacity: 0.9;
    transition: 200ms ease-in-out;
    cursor: pointer;
    z-index: 6;

    &:hover {
      opacity: 0.4;
    }
  }

  &-default {
    width: 100%;
    border-radius: 10px;
    cursor: pointer;

    &-image {
      width: 100%;
      border-radius: 10px;
    }
  }
}

@media (max-width: 1085px) {
  .modal {
    &-image {
      height: auto;
      width: 85%;
    }

    &-close {
      top: 10%;
      rigth: 5%;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: all 0.7s;
  will-change: animation;
  animation: madalAppear linear 0.7s;
}

.fadeIn-enter,
.fadeIn-leave-to {
  opacity: 0;
}

@keyframes madalAppear {
  0% {
    transform: scale(0.2);
  }
  90% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
