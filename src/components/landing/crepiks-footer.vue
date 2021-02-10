<template>
  <div class="footer">
    <div class="footer-content">
      <Logo class="footer-logo" />
      <div class="footer-email">
        crepiks.academy@mail.ru
        <!-- <a href="" class="footer-socials-item">
          <div class="footer-socials-icon">
            <img src="@/assets/images/mail-icon.svg" alt="" />
          </div>
          <div class="footer-socials-text">Почта</div>
        </a>
        <a href="" class="footer-socials-item">
          <div class="footer-socials-icon">
            <img src="@/assets/images/instagram-icon.svg" alt="" />
          </div>
          <div class="footer-socials-text">Инстаграм</div>
        </a>
        <a href="" class="footer-socials-item">
          <div class="footer-socials-icon">
            <img src="@/assets/images/vk-icon.svg" alt="" />
          </div>
          <div class="footer-socials-text">Вконтакте</div>
        </a> -->
      </div>
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

  &-email {
    // display: flex;
    // align-items: center;
    // color: $dark;

    // &-item {
    //   display: flex;
    //   align-items: center;
    //   margin-left: 20px;
    //   text-decoration: none;
    //   color: $dark;
    // }

    // &-item:hover {
    //   opacity: 0.8;
    // }

    // &-icon {
    //   width: 35px;
    //   height: 35px;
    //   background-color: $primary;
    //   border-radius: 50%;
    //   display: flex;
    //   justify-content: space-evenly;
    //   align-items: center;
    //   margin-right: 7px;
    // }
  }
}

@media (max-width: 1000px) {
  .footer {
    padding: 10vh 5%;
  }
}

@media (max-width: 550px) {
  .footer {
    padding-right: 10%;

    // &-content {
    //   align-items: flex-start;
    // }
    &-email {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 5px;
    }

    //   &-item {
    //     margin-left: 0;
    //     margin-bottom: 15px;
    //   }
    // }
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
