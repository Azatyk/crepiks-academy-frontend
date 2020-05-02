<template>
  <section class="register-section">
    <register-form class="register-section__form" />
  </section>
</template>

<script>
import RegisterForm from "./RegisterForm";

export default {
  components: {
    "register-form": RegisterForm
  }
};
</script>

<style scoped>
.register-section {
  width: 80%;
  margin: auto;
}

.register-section__form {
  width: 35%;
}
</style>
