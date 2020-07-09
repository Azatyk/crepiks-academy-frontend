<template>
  <form @submit.prevent="$emit('submit')" class="auth-form">
    <slot></slot>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
.auth-form {
  padding: 42px 50px;
  background-color: #f8f7fc;
  border-radius: 5px;
  box-shadow: 0 0 10px #0000004d;
}

@media (max-width: 700px) {
  .auth-form {
    padding: 20px 25px;
  }
}
</style>
