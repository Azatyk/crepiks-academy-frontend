<template>
  <div class="course">
    <div class="main-content">
      <img class="course__image" :src="image" :alt="title" />
      <h3 class="course__heading">{{ title }}</h3>
      <div class="course__lessons-amount">{{ lessonsAmount }} уроков</div>
    </div>
    <cButtonLink
      :route="'/courses/' + id"
      text="Перейти к курсу"
      class="course__button"
    />
  </div>
</template>

<script>
import cButtonLink from "@/components/common/cButtonLink";

export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    lessonsAmount: {
      type: Number,
      required: false
    },
    id: {
      type: String,
      required: true
    }
  },
  components: {
    cButtonLink
  }
};
</script>

<style scoped>
.course {
  margin-bottom: 5%;
  width: 16vw;
  height: 17vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #f8f7fc;
  box-shadow: 0 0 20px #00000026;
}

.course:hover .main-content {
  transform: translateY(-1px);
  transition: 300ms ease-in-out;
}

.course:hover .course__button {
  opacity: 1;
  transition: 300ms ease-in-out;
}

.main-content {
  padding: 0.1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transform: translateY(1.2vw);
  transition: 300ms ease-in-out;
}

.course__image {
  margin: auto;
  margin-bottom: 1vw;
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
}

.course__heading {
  margin-bottom: 5%;
  font-size: 1.3vw;
  color: #516f8c;
  font-weight: 300;
  text-align: center;
}

.course__lessons-amount {
  margin-bottom: 1vw;
  font-size: 1vw;
  color: #516f8c;
  font-weight: 400;
  text-align: center;
}

.course__button {
  padding: 4% 7%;
  opacity: 0;
  transition: 300ms ease-in-out;
}
</style>
