<template>
  <div class="mockup">
    <div class="mockup-text">
      <h2 class="mockup-heading">
        Интересно? <br />
        Лови <span class="mockup-heading-green">бесплатный</span> интерактив по
        основам веб-программирования
      </h2>
      <p class="mockup-paragraph">
        Пройди 10 уроков первого интерактива и получи скидку в -15%. Начни прямо
        сейчас
      </p>
      <cButton @click="$router.push('/auth/register')" class="mockup-button"
        >Попробовать бесплатно</cButton
      >
    </div>
    <img
      class="mockup-image"
      src="@/assets/images/girl-with-laptop.svg"
      alt="girl-with-laptop"
    />
  </div>
</template>

<script>
import cButton from "@/components/common/crepiks-button.vue";

export default {
  components: {
    cButton
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.mockup {
  width: 100%;
  height: 650px;
  margin-top: 330px;
  background-image: url(../../assets/images/macbook-mockup.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;

  &-text {
    width: 400px;
    height: fit-content;
    padding: 35px 30px;
    box-sizing: border-box;
    background-color: $white;
    border-radius: 20px;
    box-shadow: 50px 50px 100px rgba(0, 0, 0, 0.02);
    margin-top: 130px;
    margin-left: 22%;
    z-index: 2;
  }

  &-heading {
    font-weight: 500;
    font-size: 28px;
    line-height: 120%;
    width: 97%;

    &-green {
      color: $primary;
    }
  }

  &-paragraph {
    font-size: 17px;
    margin-top: 15px;
    color: $dark;
    opacity: 0.8;
  }

  &-button {
    margin-top: 32px;
  }

  &-image {
    margin-left: -100px;
    width: 500px;
  }
}

@media (max-width: 1350px) {
  .mockup {
    &-text {
      margin-left: 18%;
    }
  }
}

@media (max-width: 1166px) {
  .mockup {
    &-text {
      margin-left: 15%;
    }
  }
}

@media (max-width: 1100px) {
  .mockup {
    margin-top: 230px;
    width: 90%;

    &-text {
      width: 350px;
      margin-left: 15%;
      margin-top: 150px;
    }

    &-heading {
      font-size: 23px;
    }

    &-paragraph {
      font-size: 14px;
      margin-top: 15px;
    }

    &-image {
      margin-left: -100px;
      width: 400px;
    }

    &-button {
      margin-top: 22px;
    }
  }
}

@media (max-width: 992px) {
  .mockup {
    &-text {
      width: 300px;
      padding: 30px 25px;
      margin-top: 180px;
    }

    &-heading {
      font-size: 20px;
    }

    &-paragraph {
      font-size: 12px;
      margin-top: 15px;
    }

    &-image {
      margin-left: -8%;
      width: 350px;
    }
  }
}

@media (max-width: 893px) {
  .mockup {
    &-text {
      width: 300px;
      padding: 30px 25px;
      margin-top: 180px;
    }

    &-heading {
      font-size: 20px;
    }

    &-paragraph {
      font-size: 12px;
      margin-top: 15px;
    }

    &-image {
      margin-left: -9%;
      width: 300px;
    }
  }
}

@media (max-width: 821px) {
  .mockup {
    &-text {
      width: 270px;
    }

    &-heading {
      font-size: 17px;
    }

    &-paragraph {
      font-size: 12px;
      margin-top: 15px;
    }

    &-image {
      margin-left: -7%;
      width: 270px;
    }

    &-button {
      margin-top: 26px;
      padding: 8px 20px;
      font-size: 12px;
    }
  }
}

@media (max-width: 752px) {
  .mockup {
    background-image: none;
    margin-top: 130px;
    height: 600px;
    width: 100%;
    flex-direction: column;
    padding: 0 7.5%;
    box-sizing: border-box;
    align-items: center;

    &-text {
      width: 100%;
      margin-left: 0;
      margin-top: 50px;
      box-shadow: 0px 0px 57.2657px rgba(0, 0, 0, 0.13);
    }

    &-heading {
      font-size: 23px;
      line-height: 30px;
    }

    &-paragraph {
      font-size: 14px;
      margin-top: 15px;
      line-height: 25px;
    }

    &-image {
      margin-left: 0;
      width: 400px;
      margin-top: -50px;
    }

    &-button {
      margin-top: 22px;
    }
  }
}

@media (max-width: 414px) {
  .mockup {
    height: 800px;
    padding: 0;
    margin-top: 100px;

    &-text {
      width: 80%;
      margin-left: 0;
      margin-top: 190px;
      box-shadow: 0px 0px 57.2657px rgba(0, 0, 0, 0.13);
    }

    &-heading {
      font-size: 20px;
      line-height: 26px;
    }

    &-paragraph {
      font-size: 12px;
      margin-top: 12px;
      line-height: 14px;
      opacity: 0.8;
    }

    &-image {
      margin-top: -120px;
    }

    &-button {
      margin-top: 25px;
      font-size: 13px;
      padding: 12px 35px;
      border-radius: 6px;
    }
  }
}

@media (max-width: 375px) {
  .mockup {
    &-image {
      width: 240px;
      margin-top: -45px;
    }
  }
}

@media (max-width: 320px) {
  .mockup {
    height: 100vh;

    &-text {
      width: 54%;
      padding: 20px 20px;
      margin-top: 110px;
    }

    &-heading {
      font-size: 13px;
      line-height: 15px;
    }

    &-image {
      width: 180px;
      margin-top: -40px;
    }
  }
}
</style>
