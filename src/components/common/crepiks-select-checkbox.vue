<template>
  <div class="select">
    <div class="select-title">{{ title }}</div>
    <div class="select-container">
      <div
        class="select-option"
        v-for="(option, index) in options"
        :key="index"
        @click="$emit('option-clicked', option)"
      >
        <div
          class="select-checkbox"
          :class="{ 'select-checkbox-active': chosenOption == option }"
          :key="option"
        ></div>
        <p class="select-label">{{ option }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    options: {
      type: Array
    },
    chosenOption: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.select {
  width: 100%;

  &-title {
    margin-bottom: 5px;
    color: $dark;
    font-size: 15px;
    opacity: 0.6;
  }

  &-container {
    display: flex;
    justify-content: space-between;
    margin-top: 19px;
  }

  &-option {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

  &-checkbox {
    margin-right: 5px;
    border: 1px solid $primary;
    border-radius: 5px;
    width: 15px;
    height: 15px;

    &-active {
      background-color: $primary;
    }
  }

  &-label {
    color: $dark;
    font-size: 15px;
    opacity: 0.6;
    user-select: none;
  }
}

@media (max-width: 560px) {
  .select {
    &-title {
      font-size: 12px;
    }

    &-container {
      margin-top: 16px;
    }

    &-label {
      font-size: 12px;
    }
  }
}

@media (max-width: 374px) {
  .select {
    &-checkbox {
      margin-right: 3px;
      width: 10px;
      height: 10px;
      border-radius: 3px;
    }

    &-label {
      font-size: 10px;
    }
  }
}
</style>
