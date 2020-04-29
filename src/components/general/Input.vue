<template>
  <div class="input">
    <label :for="id" class="input__label">
      <img :src="icon" alt="Icon" class="input__icon" />
    </label>
    <input
      :type="type"
      :id="id"
      class="input__input"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    id: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: "text"
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    value: String
  }
};
</script>

<style scoped>
.input {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input__label {
  width: 66px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a285fc;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
}

.input__input {
  width: 100%;
  height: 47px;
  padding: 0 17px;
  font-size: 16px;
  font-weight: 400;
  color: #5164cd;
  background-color: rgba(96, 120, 255, 0.14);
  border: none;
  border-radius: 0 5px 5px 0;
  box-sizing: border-box;
}
</style>
