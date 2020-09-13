<template>
  <div class="about-course">
    <div class="about-course__text" v-prlx="{ speed: -0.3 }">
      <div class="about-course__title">Как проходит курс?</div>
      <div class="about-course__description">
        Курс будет проходить на нашей онлайн интерактивной платформе. Что значит
        интерактивный? Это значит, что вы будете писать код прямо в браузере, а
        проверять вас будет не учитель, а специальные автоматические тесты
      </div>
    </div>
    <div class="about-course__image-container" v-prlx="{ speed: -0.6 }">
      <img
        class="about-course__image"
        src="@/assets/images/aboutCourseImage.jpg"
        alt="Интерактивный курс"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-course {
  margin: auto;
  margin-bottom: 20%;
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.about-course__text {
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.about-course__title {
  margin-bottom: 30px;
  font-size: 3.7vw;
  color: #2522a0;
  font-weight: bold;
}

.about-course__description {
  font-size: 1.7vw;
  color: #2522a0;
  font-weight: 300;
  opacity: 1;
}

.about-course__image-container {
  width: 50%;
}

.about-course__image {
  width: 100%;
  height: auto;
}
</style>
