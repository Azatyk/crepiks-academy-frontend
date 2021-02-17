<template>
  <div class="offer">
    <div class="offer-content">
      <div class="offer-text">
        <h2 class="offer-heading">
          Попробуйте курс базовой верстки сайтов
          <span class="offer-heading-green">бесплатно</span>
        </h2>
        <p class="offer-paragraph">
          Вы освоите основы создание веб сайтов с помощью языка разметки HTML и
          таблицы каскадных стилей CSS
        </p>
        <cButton
          @click="$router.push('/auth/register')"
          class="offer-button"
          text="Начать учиться"
        />
      </div>
    </div>
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

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.offer {
  background-color: $primary;
  height: 100vh;
  padding: 18vh 12%;
  box-sizing: border-box;
  background-image: url(../../assets/images/offer-image-landing.svg);
  background-repeat: no-repeat;
  background-position: bottom 35% right 25%;
  background-size: 52%;

  &-content {
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
  }

  &-text {
    width: 500px;
    padding: 45px 40px;
    box-sizing: border-box;
    background-color: $white;
    border-radius: 20px;
    box-shadow: 50px 50px 100px rgba(0, 0, 0, 0.02);
  }

  &-heading {
    font-weight: 500;
    font-size: 35px;
    width: 97%;

    &-green {
      color: $primary;
    }
  }

  &-paragraph {
    font-size: 20px;
    margin-top: 15px;
    color: $dark;
    opacity: 0.8;
  }

  &-button {
    margin-top: 32px;
  }
}

@media (max-width: 1000px) {
  .offer {
    padding: 18vh 5%;

    &-text {
      width: 55%;
    }
  }
}

@media (max-width: 720px) {
  .offer {
    height: 130vh;
    padding: 12vh 5%;
    background-position: bottom 20% right 20%;
    background-size: 80%;

    &-text {
      width: 100%;
    }

    &-heading {
      font-size: 25px;
      width: 100%;
    }

    &-paragraph {
      font-size: 17px;
    }
  }
}

@media (max-width: 375px) {
  .offer {
    height: 110vh;
    &-text {
      padding: 35px 30px;
    }

    &-heading {
      font-size: 22px;
    }

    &-paragraph {
      font-size: 15px;
    }
  }
}
</style>
