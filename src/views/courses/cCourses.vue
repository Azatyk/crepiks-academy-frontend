<template>
  <div class="courses-page">
    <div class="search-input">
      <input
        type="text"
        class="input"
        placeholder="Чему хотите научиться?"
        disabled
      />
      <div class="button-container">
        <cButton text="Найти" size="small" :isDisabled="true" />
      </div>
    </div>
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

.courses-page {
  padding-top: 50px;
  padding-left: 50px;
}

.search-input {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.input {
  padding: 0 15px;
  height: 40px;
  width: 300px;
  box-sizing: border-box;
  color: $dark;
  border: none;
  border-radius: 10px 0 0 10px;
  outline: none;
  background-color: #f0eff4;
  opacity: 0.6;
  transition: 200ms ease-in-out;

  &:focus {
    padding-left: 20px;
  }
}

.button-container {
  padding: 0 5px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 10px 10px 0;
  background-color: #f0eff4;
}
</style>
