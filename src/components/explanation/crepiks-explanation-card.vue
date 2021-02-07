<template>
  <div class="card">
    <div class="card-image">
      <div class="card-image-container"></div>
    </div>
    <div class="card-text">
      <div class="card-title">
        <div class="card-number">{{ number }}</div>
        <h3 class="card-heading">{{ heading }}</h3>
      </div>
      <p class="card-paragraph">{{ paragraph }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String
    },
    paragraph: {
      type: String
    },
    number: {
      type: Number
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.card {
  display: flex;
  flex-direction: row;
  color: $white;
  text-align: left;

  &-image {
    width: 540px;

    &-container {
      width: 100%;
      height: 320px;
      background-color: $white;
      border-radius: 15px;
    }
  }

  &-text {
    width: 50%;
    padding-left: 10%;
    padding-top: 5%;
  }

  &-title {
    display: flex;
  }

  &-heading {
    width: 100%;
    font-weight: 400;
    font-size: 30px;
    margin-left: 15px;
  }

  &-number {
    border: 1px solid $white;
    color: $dark;
    border-radius: 50%;
    background-color: $white;
    font-weight: 700;
    margin: auto;
    font-size: 20px;
    padding: 3px 9px;
  }

  &-paragraph {
    width: 100%;
    font-size: 20px;
    margin-top: 15px;
    font-weight: 300;
    opacity: 60%;
    line-height: 28px;
  }
}

@media (max-width: 800px) {
  .card {
    flex-direction: column;
    align-items: center;

    &-image {
      width: 100%;

      &-container {
        height: 320px;
      }
    }

    &-text {
      width: 100%;
      padding-left: 0;
    }
  }
}
</style>
