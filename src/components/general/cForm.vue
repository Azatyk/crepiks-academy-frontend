<template>
  <form @submit.prevent="$emit('submit')" class="register-form">
    <slot></slot>
    <!-- <h3 class="register-form__heading">Войти</h3>
      <div class="register-form__divider"></div>
      <cFormInput
        v-for="input in inputs"
        :key="input.id"
        class="register-form__input"
        :icon="input.icon"
        :placeholder="input.placeholder"
        :v-model="input.vmodel"
        :id="input.id"
      />
      <button type="submit" class="register-form__submit-button">
        Войти
      </button> -->
  </form>
</template>

<script>
export default {
  // props: {
  //   inputs: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  // components: {
  //   cFormInput,
  // },
  // data() {
  //   return {
  //     email: "",
  //     password: "",
  //   };
  // },
  // methods: {
  //   login() {
  //     if (this.email.trim() && this.password.trim()) {
  //       const { email, password } = this;
  //       this.$store.dispatch("login", { email, password });
  //       // .then(() => this.$router.push('/'))
  //       // .then(() => alert("success login"));
  //     }
  //   },
  // },
};
</script>

<style scoped>
.register-form {
  padding: 42px 50px;
  background-color: #f8f7fc;
  border-radius: 5px;
  box-shadow: 0 0 10px #0000004d;
}

/* .register-form__heading {
  color: #34495E;
  margin-bottom: 5%;
  font-size: 2vw;
  font-weight: 500;
}

.register-form__input {
  margin-bottom: 24px;
}

.register-form__submit-button {
  width: 100%;
  padding: 14px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f8f7fc;
  font-size: 18px;
  font-weight: 500;
  background-color: #fc7979;
  border: none;
  border-radius: 5px;
  cursor: pointer;
} */
</style>
