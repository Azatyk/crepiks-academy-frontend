<template>
  <div class="course-card">
    <img class="card-image" :src="image" :alt="title" />
    <div class="card-text">
      <h2 class="card-text-title">{{ title }}</h2>
      <p class="card-text-description">{{ description }}</p>
      <div class="card-link">
        <span class="card-link-text">Узнать про курс</span>
        <i class="bx bx-right-arrow-alt card-link-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String
    },
    title: {
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

.course-card {
  width: 400px;
  display: flex;
  flex-direction: row;
}

.card-image {
  margin-right: 10px;
  height: 100px;
  width: 100px;
}

.card-text {
  display: flex;
  flex-direction: column;

  &-title {
    margin-bottom: 5px;
    color: $dark;
    font-size: 18px;
    font-weight: bold;
  }

  &-description {
    margin-bottom: 10px;
    color: $dark;
    font-size: 13px;
    font-weight: 500;
    opacity: 0.6;
  }
}

.card-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: $primary;
  opacity: 0.7;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 1;
  }

  &-text {
    margin-right: 5px;
    font-size: 14px;
    font-weight: 500;
  }

  &-icon {
    font-size: 18px;
  }
}
</style>
