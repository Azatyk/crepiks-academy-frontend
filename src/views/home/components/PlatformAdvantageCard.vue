<template>
  <article class="advantage-card">
    <img :src="icon" :alt="title" class="advantage-card__icon" />
    <div class="advantage-card__text-block">
      <h3 class="avantage-card__heading">{{ title }}</h3>
      <p class="advantage-card__paragraph">{{ paragraph }}</p>
    </div>
  </article>
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
      default: ""
    },
    paragraph: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.advantage-card {
  padding: 14px 30px;
  display: flex;
  align-items: center;
  background-color: #f8f7fc;
  border: 1px solid #767ead;
  border-radius: 5px;
  box-sizing: border-box;
}

.advantage-card__icon {
  margin-right: 30px;
}

.advantage-card__heading {
  color: #33334f;
  font-size: 18px;
  font-weight: 500;
}

.advantage-card__paragraph {
  margin-top: 6px;
  color: #767ead;
  font-size: 12px;
}
</style>
