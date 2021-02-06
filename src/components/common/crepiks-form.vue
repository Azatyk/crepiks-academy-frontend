<template>
  <div class="form-container">
    <logo class="logo" />
    <form @submit.prevent="$emit('submit')" class="form">
      <h2 class="subtitle">{{ subtitle }}</h2>
      <h1 class="title">{{ title }}</h1>
      <slot></slot>
    </form>
  </div>
</template>

<script>
import logo from "@/components/common/crepiks-logo.vue";

export default {
  components: {
    logo
  },

  props: {
    subtitle: {
      type: String
    },
    title: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.form-container {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  padding: 35px 50px 55px;
  width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $white;
  border-radius: 20px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.05);
}

.logo {
  margin-bottom: 30px;
  margin-right: -15px; // точка в логотипе создает ощущение, что логотип расположен не по центру и по этому приходится ровнять визуально с помощью отрицательного margin
  width: 170px;
  opacity: 0.8;
}

.subtitle {
  color: $dark;
  font-size: 16px;
  font-weight: 500;
  opacity: 0.5;
}

.title {
  margin-bottom: 30px;
  color: $dark;
  font-size: 30px;
  font-weight: 600;
  opacity: 0.8;
}
</style>
