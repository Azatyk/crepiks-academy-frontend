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
  height: 85vh;
  box-sizing: border-box;
  padding: 0 12%;
  background-color: $background;
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
    padding-top: 27vh;
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
</style>
