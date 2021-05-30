<template>
  <div class="mockup">
    <div class="mockup-text">
      <h2 class="mockup-heading">
        Интересно? <br />
        Лови <span class="mockup-heading-green">бесплатный</span> интерактив по
        основам верстки сайтов
      </h2>
      <p class="mockup-paragraph">
        Ты освоишь основы создание веб сайтов с помощью языка разметки HTML и
        таблицы каскадных стилей CSS
      </p>
      <cButton
        @click="$router.push('/auth/register')"
        class="mockup-button"
        text="Начать учиться"
      />
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
    margin-left: 330px;
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
</style>
