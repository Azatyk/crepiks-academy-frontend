<template>
  <div class="footer">
    <div class="footer-content">
      <Logo class="footer-logo" />
      <div class="footer-email">info@crepiks.com</div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/common/crepiks-logo.vue";
export default {
  components: {
    Logo
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.footer {
  background-color: #f2f2f3;
  padding: 10vh 12%;
  box-sizing: border-box;
  width: 100%;

  &-email {
    opacity: 0.8;
  }

  &-content {
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &-logo {
    width: 110px;
  }
}

@media (max-width: 1000px) {
  .footer {
    padding: 10vh 7.5%;
  }
}

@media (max-width: 550px) {
  .footer {
    padding-right: 10%;

    &-email {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 5px;
    }

    &-logo {
      width: 90px;
      opacity: 0.85;
    }
  }
}

@media (max-width: 374px) {
  .footer {
    &-email {
      font-size: 12px;
    }
  }
}
</style>
