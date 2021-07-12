<template>
  <div class="form-container">
    <logo class="form-logo" />
    <div class="form">
      <transition name="fade" mode="out-in">
        <div class="form-inner" v-if="true" :key="activeForm">
          <h1 class="form-title">{{ title }}</h1>
          <h2 class="form-subtitle">{{ subtitle }}</h2>
          <slot></slot>
          <cButton
            class="form-button"
            @click="$emit('main-button-clicked')"
            :isLoading="isLoading"
            >{{ buttonText }}</cButton
          >
        </div>
      </transition>
      <p class="form-text">
        <span class="form-text-info">Ты уже с нами?</span>
        <router-link class="form-text form-text-link" to="/auth/login"
          >Тогда войди в аккаунт!</router-link
        >
      </p>
      <div class="form-switcher">
        <div class="form-switcher-container">
          <button
            class="form-switcher-button"
            @click="$emit('credentials-button-clicked')"
            :class="{
              'form-switcher-button-active': activeForm == 'credentials'
            }"
          ></button>
          <button
            class="form-switcher-button"
            @click="$emit('contacts-button-clicked')"
            :class="{ 'form-switcher-button-active': activeForm == 'contacts' }"
          ></button>
          <button
            class="form-switcher-button"
            @click="$emit('additional-button-clicked')"
            :class="{
              'form-switcher-button-active': activeForm == 'additional'
            }"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/components/common/crepiks-logo.vue";
import cButton from "@/components/common/crepiks-button";

export default {
  components: {
    logo,
    cButton
  },
  props: {
    subtitle: {
      type: String
    },
    title: {
      type: String
    },
    buttonText: {
      type: String
    },
    activeForm: {
      type: String
    },
    isLoading: {
      type: Boolean
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.form {
  padding: 35px 50px;
  width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $white;
  border-radius: 20px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.05);

  &-inner {
    width: 100%;
  }

  &-container {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-subtitle {
    color: $dark;
    font-size: 18px;
    font-weight: 500;
    opacity: 0.5;
    margin-bottom: 20px;
    text-align: center;
  }

  &-title {
    color: $dark;
    font-size: 22px;
    font-weight: 500;
    opacity: 0.8;
    margin-bottom: 10px;
    text-align: center;
  }

  &-button {
    margin-top: 10px;
    width: 100%;
  }

  &-text {
    margin-top: 20px;
    width: 100%;
    color: $dark;
    font-size: 12px;
    font-weight: 500;
    opacity: 1;
    text-align: center;

    &-info {
      margin-right: 5px;
      opacity: 0.5;
    }

    &-link {
      margin: 0;
      color: $primary;
      text-decoration: none;
      opacity: 0.7;
      transition: 200ms ease-in-out;

      &:hover {
        opacity: 1;
      }
    }
  }

  &-switcher {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;

    &-container {
      width: 70px;
      display: flex;
      justify-content: space-between;
    }

    &-button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #dfdfdf;
      cursor: pointer;
      outline: none;
      border: 0;

      &-active {
        background-color: $primary;
      }
    }
  }

  &-logo {
    margin-bottom: 30px;
    margin-right: -15px; // точка в логотипе создает ощущение, что логотип расположен не по центру и по этому приходится ровнять визуально с помощью отрицательного margin
    width: 170px;
    opacity: 0.8;
  }
}

@media (max-width: 560px) {
  .form {
    width: 85%;
    box-sizing: border-box;
    padding: 30px 30px;
    border-radius: 15px;

    &-title {
      font-size: 20px;
    }

    &-subtitle {
      font-size: 16px;
    }

    &-switcher {
      margin-top: 20px;
    }

    &-logo {
      width: 130px;
      margin-bottom: 15px;
    }
  }
}

@media (max-width: 374px) {
  .form {
    padding: 25px 25px 18px;

    &-title {
      font-size: 18px;
    }

    &-logo {
      display: none;
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
</style>
