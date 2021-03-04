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
    max-width: 1300px;
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
    padding-top: 5vh;
    margin-right: auto;
    margin-left: auto;
    width: 80%;
    color: $dark;
    font-size: 24px;
    line-height: 130%;
    opacity: 0.6;
  }
}

@media (min-width: 1500px) {
  .description {
    &_heading {
      font-size: 2.6vw;
    }

    &-paragraph {
      font-size: 1.5vw;
      line-height: 1.9vw;
    }
  }
}

@media (max-width: 1000px) {
  .description {
    padding: 0 5%;
  }
}

@media (max-width: 550px) {
  .description {
    height: 350px;
    margin-bottom: 10vh;

    &-heading {
      width: 100%;
      font-size: 25px;
      margin-top: 145px;
    }

    &-paragraph {
      width: 100%;
      font-size: 17px;
    }
  }
}
</style>
