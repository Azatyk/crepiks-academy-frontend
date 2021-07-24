<template>
  <div class="modal">
    <transition name="fadeIn" appear mode="out-in">
      <div class="modal-window">
        <i class="bx bx-x modal-close" @click="$emit('close-modal')"></i>
        <div class="modal-image">
          <img
            class="modal-image-inner"
            src="@/assets/images/subscription-success-image.svg"
          />
        </div>
        <h2 class="modal-title">Добро пожаловать в интерактивы!</h2>
        <p class="modal-text">
          Теперь тебе доступны активные интерактивы. Если вдруг появятся вопросы
          или будут проблемы с прохождением темы — напиши нам, а пока, хорошего
          обучения ;)
        </p>
        <cButton class="modal-button" @click="$emit('route-to-courses')"
          >К интерактивам</cButton
        >
      </div>
    </transition>
  </div>
</template>

<script>
import cButton from "@/components/common/crepiks-button";

export default {
  components: {
    cButton
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

  &-window {
    width: 760px;
    padding: 55px 93px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-radius: 20px;
    position: relative;
  }

  &-image {
    width: 200px;
    margin-bottom: 30px;

    &-inner {
      width: 100%;
    }
  }

  &-title {
    font-size: 32px;
    font-weight: bold;
    color: $dark;
    margin-bottom: 15px;
    text-align: center;
  }

  &-text {
    font-size: 18px;
    color: $dark;
    margin-bottom: 30px;
    line-height: 160%;
    text-align: center;
  }

  &-close {
    position: absolute;
    top: 4%;
    right: 3%;
    font-size: 35px;
    opacity: 0.6;
    transition: 200ms ease-in-out;
    cursor: pointer;
    z-index: 6;

    &:hover {
      opacity: 0.4;
    }
  }
}

@media (max-width: 836px) {
  .modal {
    &-window {
      width: 90%;
      padding: 45px 43px;
    }

    &-title {
      font-size: 24px;
    }

    &-text {
      font-size: 14px;
    }
  }
}

@media (max-width: 414px) {
  .modal {
    &-window {
      width: 90%;
      padding: 45px 40px;
      margin-bottom: 40px;
    }

    &-title {
      font-size: 26px;
      font-weight: normal;
    }

    &-text {
      font-size: 16px;
    }
  }
}

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: all 1.5s;
  transition-delay: 0.5s;
  will-change: animation;
  animation: madalAppear linear 1.3s;
}

.fadeIn-enter,
.fadeIn-leave-to {
  opacity: 0;
}

@keyframes madalAppear {
  0% {
    transform: scale(0);
  }
  90% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
