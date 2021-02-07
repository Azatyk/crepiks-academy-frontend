<template>
  <div class="description">
    <div class="description-content">
      <h2 class="description-heading">
        Crepiks - это способ самостоятельно изучить программирование
      </h2>
      <p class="description-paragraph">
        Мы верим, что самостоятельное обучение наиболее эффективно, поэтому от
        вас лишь требуется желание учиться, а мы в свою очередь предоставим
        понятную теорию и занимательную практику.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.description {
  width: 100%;
  height: 58vh;
  box-sizing: border-box;
  padding: 0 12%;
  text-align: center;

  &-content {
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
  }

  &-heading {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 29vh;
    font-weight: 400;
    font-size: 35px;
    color: $dark;
  }

  &-paragraph {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    padding-top: 5vh;
    font-size: 20px;
    color: $light-dark;
  }
}

@media (max-width: 1000px) {
  .description {
    padding: 0 5%;
  }
}

@media (max-width: 550px) {
  .description {
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
