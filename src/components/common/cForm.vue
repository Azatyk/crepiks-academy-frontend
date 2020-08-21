<template>
  <div class="form-page">
    <form @submit.prevent="$emit('submit')" class="form">
      <div class="form__info-block">
        <img
          src="@/assets/images/authImage.svg"
          alt="Login"
          class="form__image"
        />
      </div>
      <slot></slot>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form-page {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b35f6f;
}

.form {
  width: 1000px;
  height: 700px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px 0px #00000026;
  background-color: #384a62;
  border-radius: 10px;
}

.form__info-block {
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6ddeca;
  border-radius: 10px 0px 0px 10px;
}

.form__image {
  width: 70%;
}
</style>
