<template>
  <div class="intro">
    <div class="intro-content">
      <div class="intro-text">
        <h2 class="intro-heading">
          Попробуйте курс базовой верстки сайтов
          <span class="intro-heading-free">бесплатно</span>
        </h2>
        <p class="intro-paragraph">
          Вы освоите основы создания веб сайтов с помощью языка разметки HTML и
          таблицы каскадных стилей CSS
        </p>
        <cButton
          @click="$router.push('/auth/register')"
          class="intro-button"
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
.intro {
  width: 100%;
  height: 80vh;
  box-sizing: border-box;
  padding: 0 12%;
  padding-top: 12vh;
  background-image: url(../../assets/images/intro-image-landing.svg);
  background-repeat: no-repeat;
  background-position: bottom right 24%;
  background-size: 50%;

  &-content {
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
  }

  &-text {
    width: 520px;
    text-align: left;
  }

  &-heading {
    color: $dark;
    font-size: 35px;
    font-weight: 400;

    &-free {
      color: $primary;
    }
  }

  &-paragraph {
    font-size: 20px;
    width: 80%;
    margin-top: 10px;
    color: $light-dark;
  }

  &-button {
    margin-top: 40px;
  }
}

@media (max-width: 1000px) {
  .intro {
    padding: 0 5%;
    padding-top: 12vh;
    height: 90vh;
    background-position: bottom right 5%;

    background-size: 500px;
  }
}

@media (max-width: 550px) {
  .intro {
    &-text {
      width: 100%;
    }

    &-heading {
      width: 100%;
      font-size: 25px;
    }

    &-paragraph {
      width: 100%;
      font-size: 17px;
    }
  }
}
</style>
