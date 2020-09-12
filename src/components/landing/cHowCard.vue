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

<style scoped>
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
  margin-bottom: 40px;
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
  color: #2522a0;
}

.card__description {
  width: 100%;
  font-size: 22px;
  color: #2522a0;
  opacity: 0.7;
}
</style>
