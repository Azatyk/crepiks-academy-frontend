<template>
  <div class="description">
    <h2 class="description-heading">
      Crepiks - это способ самостоятельно изучить программирование
    </h2>
    <p class="description-paragraph">
      Мы верим, что самостоятельное обучение наиболее эффективно, поэтому от вас
      лишь требуется желание учиться, а мы в свою очередь предоставим понятную
      теорию и занимательную практику.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.description {
  width: 100%;
  height: 60vh;
  box-sizing: border-box;
  padding: 0 12%;
  background-color: $background;
  text-align: center;

  &-heading {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    padding-top: 18vh;
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
