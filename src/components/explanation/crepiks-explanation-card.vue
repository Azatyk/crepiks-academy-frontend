<template>
  <div class="card">
    <div class="card-image">
      <img :src="gif" :alt="heading" class="card-image-container" />
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
    number: {
      type: String
    },
    gif: {
      type: String
    },
    heading: {
      type: String
    },
    paragraph: {
      type: String
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
      height: auto;
      background-color: $white;
      border-radius: 5px;
    }
  }

  &-text {
    width: 50%;
    padding-left: 10%;
    padding-top: 5%;
  }

  &-title {
    display: flex;
    align-items: center;
  }

  &-heading {
    width: 100%;
    font-weight: 400;
    font-size: 30px;
    margin-left: 15px;
  }

  &-number {
    width: 35px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $white;
    color: $dark;
    border-radius: 50%;
    background-color: $white;
    font-weight: 700;
    margin: auto;
    font-size: 20px;
  }

  &-paragraph {
    width: 100%;
    font-size: 20px;
    margin-top: 15px;
    opacity: 0.6;
    line-height: 140%;
  }
}

@media (min-width: 1500px) {
  .card {
    &-heading {
      font-size: 1.8vw;
    }

    &-paragraph {
      font-size: 1.2vw;
      line-height: 1.8vw;
    }
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

@media (max-width: 550px) {
  .card {
    &-heading {
      width: 100%;
      font-size: 25px;
    }

    &-paragraph {
      width: 90%;
      font-size: 17px;
    }
  }
}

@media (max-width: 450px) {
  .card {
    &-image {
      &-container {
        height: 240px;
      }
    }
  }
}

@media (max-width: 375px) {
  .card {
    &-heading {
      width: 100%;
      font-size: 22px;
    }

    &-paragraph {
      width: 100%;
      font-size: 14px;
    }

    &-image {
      &-container {
        height: 210px;
      }
    }

    &-number {
      opacity: 0.9;
    }
  }
}
</style>
