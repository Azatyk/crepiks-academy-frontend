<template>
  <div class="ad-notification" :class="{ 'ad-notification__open': isActive }">
    <img
      :src="require(`@/assets/images/${imageFileName}`)"
      alt="Реклама"
      class="ad-notification__image"
    />
    <div class="ad-text">
      <h2 class="ad-text__title">{{ heading }}</h2>
      <p class="ad-text__paragraph">
        {{ text }}
      </p>
      <button
        v-if="isDetailsButtonActive"
        class="ad-text__link"
        @click="handleAdNotificationClick"
      >
        Подробнее <i class="bx bx-right-arrow-alt ad-text__link-icon"></i>
      </button>
    </div>
    <i
      class="bx bx-x ad-notification__close-icon"
      @click="handleCloseButton()"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    imageFileName: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    },
    isDetailsButtonActive: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      setTimeoutId: null
    };
  },

  methods: {
    handleCloseButton() {
      this.$emit("close-notification");
    },

    handleAdNotificationClick() {
      this.$store.commit("setAdBanner", true);
      this.$emit("close-notification");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.ad-notification {
  position: fixed;
  top: 20px;
  right: -530px;
  padding: 30px 20px;
  padding-right: 25px;
  box-sizing: border-box;
  width: 520px;
  min-width: 400px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  background-color: $white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
  transition: 400ms ease-in-out;
  z-index: 7;

  &__open {
    right: 30px;
  }
}

.ad-notification__image {
  margin-right: 5%;
  width: 30%;
}

.ad-notification__close-icon {
  position: absolute;
  top: 15px;
  right: 15px;
  color: $dark;
  font-size: 22px;
  opacity: 0.6;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.4;
  }
}

.ad-text {
  width: 65%;
  height: auto;
}

.ad-text__title {
  margin-bottom: 8px;
  color: $dark;
  font-size: 17px;
  font-weight: bold;
  opacity: 0.9;
}

.ad-text__paragraph {
  margin-bottom: 15px;
  color: $dark;
  font-size: 15px;
  line-height: 160%;
}

.ad-text__link {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: $primary;
  font-size: 15px;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }
}

.ad-text__link-icon {
  margin-left: 5px;
  margin-top: 2px;
  font-size: 18px;
}
</style>
