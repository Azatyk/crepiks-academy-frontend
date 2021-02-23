<template>
  <div class="promocode-block">
    <notification
      :isActive="isNotificationOpen"
      :heading="notificationHeading"
      :text="notificationText"
      @close-notification="isNotificationOpen = false"
      :status="notificationStatus"
    />
    <rightSideBlock
      :isOpen="isOpen"
      @close-block="$emit('close-promocode-block')"
    >
      <div class="promocode-content">
        <h2 class="promocode-heading">Использование промокода</h2>
        <cInput
          class="promocode-input"
          title="Промокод"
          v-model="promocode"
          placeholder="Введите промокод"
          type="text"
        />
      </div>
      <cButton
        class="promocode-button"
        text="Использовать"
        :isLoading="isLoading"
        @click="handlePromocodeButton()"
      />
    </rightSideBlock>
  </div>
</template>

<script>
import rightSideBlock from "@/components/common/crepiks-right-side-block";
import cInput from "@/components/common/crepiks-input";
import cButton from "@/components/common/crepiks-button";
import notification from "@/components/common/crepiks-notification";

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },

  components: {
    rightSideBlock,
    cInput,
    cButton,
    notification
  },

  data() {
    return {
      promocode: "",
      isLoading: false,
      isNotificationOpen: false,
      notificationHeading: "",
      notificationText: "",
      notificationStatus: "error"
    };
  },

  watch: {
    isOpen() {
      if (!this.isOpen) {
        this.promocode = "";
      }
    }
  },

  methods: {
    handlePromocodeButton() {
      if (this.promocode.trim()) {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
          this.notificationHeading = "Не верный промокод";
          this.notificationText =
            "Возможно вы допустили ошибку. Проверьте промокод и попробуйте снова.";
          this.isNotificationOpen = true;
        }, 800);
      } else {
        this.isLoading = false;
        this.notificationHeading = "Введите промокод";
        this.notificationText =
          "Пожалуйста, не оставляйте поле ввода промокода пустым";
        this.isNotificationOpen = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.promocode {
  &-content {
    display: flex;
    flex-direction: column;
  }

  &-heading {
    margin-bottom: 30px;
    font-size: 32px;
    font-weight: 500;
  }

  &-input {
    margin-bottom: 40px;
  }

  &-button {
    width: 160px;
  }
}
</style>
