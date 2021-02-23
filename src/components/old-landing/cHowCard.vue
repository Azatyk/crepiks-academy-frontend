<template>
  <div class="card">
    <div class="card__image-container">
      <img :src="path" :alt="heading" class="card__image" />
    </div>
    <div class="card__text">
      <div class="card__heading">{{ heading }}</div>
      <div class="card__description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String
    },
    heading: {
      type: String
    },
    description: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.card {
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.card__image-container {
  width: 100%;
  height: 240px;
}

.card__image {
  width: 100%;
  height: auto;
}

.card__text {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.card__heading {
  margin-bottom: 15px;
  font-size: 33px;
  font-weight: 500;
  color: $color-2;
}

.card__description {
  width: 100%;
  font-size: 22px;
  color: $color-2;
  opacity: 0.7;
}

@media (max-width: 1200px) {
  .card {
    width: 250px;
    height: 350px;
  }

  .card__heading {
    font-size: 30px;
  }

  .card__description {
    font-size: 20px;
  }
}

@media (max-width: 1024px) {
  .card {
    margin-bottom: 70px;
    width: 550px;
    height: 550px;
  }

  .card__image-container {
    width: 90%;
    height: auto;
  }

  .card__text {
    margin-top: 50px;
  }

  .card__heading {
    font-size: 60px;
  }

  .card__description {
    font-size: 35px;
  }
}

@media (max-width: 768px) {
  .card {
    margin-bottom: 60px;
    width: 450px;
    height: 450px;
  }

  .card__text {
    margin-top: 30px;
  }

  .card__heading {
    font-size: 45px;
  }

  .card__description {
    font-size: 25px;
  }
}

@media (max-width: 650px) {
  .card {
    margin-bottom: 20px;
    width: 90%;
    height: auto;
  }

  .card__heading {
    font-size: 25px;
  }

  .card__description {
    font-size: 18px;
  }
}
</style>
