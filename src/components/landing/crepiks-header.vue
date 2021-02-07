<template>
  <div class="header">
    <div class="header-content">
      <logo class="header-logo" />
      <cButton
        @click="$router.push('/auth/login')"
        text="Войти"
        type="unsolid"
      />
    </div>
  </div>
</template>

<script>
import cButton from "@/components/common/crepiks-button.vue";
import Logo from "@/components/common/crepiks-logo.vue";
export default {
  components: {
    cButton,
    Logo
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.header {
  width: 100%;
  box-sizing: border-box;
  padding: 0 12%;
  padding-top: 5vh;

  &-content {
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-logo {
    width: 150px;

    &-img {
      width: 100%;
    }
  }
}

@media (max-width: 1000px) {
  .header {
    padding: 0 5%;
    padding-top: 5vh;
  }
}
</style>
