<template>
  <div class="input">
    <label :for="id" class="input__label">
      <i :class="icon" class="input__icon"></i>
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
      required: false
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
  background-color: #fc7979;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
}

.input__input {
  width: 100%;
  height: 47px;
  padding: 0 17px;
  font-size: 16px;
  font-weight: 400;
  color: #5e87ad;
  background-color: #dae4eb;
  border: none;
  border-radius: 0 5px 5px 0;
  box-sizing: border-box;
}

.input__icon {
  color: #f8f7fc;
}

input::-webkit-input-placeholder {
  color: #516f8c;
}
input::-moz-placeholder {
  color: #516f8c;
}

@media (max-width: 1024px) {
  .input__label {
    width: 10vw;
    height: 8vw;
  }

  .input__input {
    padding: 0 2.5vw;
    height: 8vw;
    font-size: 3vw;
  }

  .input__icon {
    font-size: 3vw;
  }
}
</style>
