<template>
  <div class="advantage">
    <div class="image-container">
      <img :src="icon" alt="icon" class="image" />
    </div>
    <div class="advantage__title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    }
  }
};
</script>

<style scoped>
.advantage {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.image-container {
  margin-bottom: 10%;
  height: 10vw;
  width: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #34495e;
  border-radius: 50%;
}

.image {
  height: auto;
  width: 40%;
}

.advantage__title {
  font-size: 1.5vw;
  color: #34495e;
  font-weight: 700;
}

@media (max-width: 1024px) {
  .image-container {
    height: 13vw;
    width: 13vw;
  }

  .advantage__title {
    font-size: 2.1vw;
  }
}
</style>
