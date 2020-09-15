<template>
  <div class="about-course" id="aboutcourse">
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
  padding: 0 2%;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
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
  font-size: 3.4vw;
  color: #2522a0;
  font-weight: bold;
}

.about-course__description {
  font-size: 1.4vw;
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

@media (max-width: 1200px) {
  .about-course {
    justify-content: center;
  }

  .about-course__text {
    margin-right: 50px;
    width: 40%;
  }

  .about-course__title {
    font-size: 3.6vw;
  }

  .about-course__description {
    font-size: 1.9vw;
  }

  .about-course__image-container {
    width: 45%;
  }
}

@media (max-width: 1024px) {
  .about-course {
    margin-top: -10%;
    flex-direction: column;
  }

  .about-course__text {
    padding: 0 5%;
    width: 85%;
    box-sizing: border-box;
  }

  .about-course__title {
    font-size: 7vw;
  }

  .about-course__description {
    font-size: 3.5vw;
  }

  .about-course__image-container {
    width: 80%;
  }
}
</style>
