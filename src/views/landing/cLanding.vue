<template>
  <div class="landing__page">
    <header class="header">
      <router-link to="/" class="header__logo-link">
        <div class="header__logo">
          Crepiks
        </div>
      </router-link>
      <nav class="header__navigation">
        <div class="header__navigation-link">Зачем мне это</div>
        <div class="header__navigation-link">Как это проходит</div>
        <div class="header__navigation-link">Как проходит курс</div>
        <template>
          <div class="center">
            <vs-select
              placeholder="Select"
              v-model="value"
              class="header__select"
              color="#0d0b6d"
            >
              <vs-option label="Русский" value="1">
                Русский
              </vs-option>
              <vs-option label="Казакша" value="2">
                Казакша
              </vs-option>
              <vs-option label="English" value="3">
                English
              </vs-option>
            </vs-select>
          </div>
        </template>
        <div class="header__button" @click="$router.push('/auth/login')">
          Начать
        </div>
      </nav>
    </header>
    <div class="landing__welcome">
      <div class="welcome__text">
        <h1 class="welcome__heading">Не откладывай.<br />Программируй.</h1>
        <div class="welcome__description">
          Хватит откладывать на бесконечно завтрашний день. Освой одну из самых
          востребованных профессий нашего века прямо сейчас!
        </div>
        <div class="welcome__button">
          Не откладывать
        </div>
      </div>
      <img
        src="@/assets/images/landingWelcome.png"
        alt="Programming"
        class="welcome__image"
      />
    </div>
    <div class="landing__what-for">
      <h2 class="what-for__heading">Зачем мне это?</h2>
      <div class="what-for__description">
        Сегодня программисты (веб разработчики) являются одними из самых
        востребованых специалистов во всем мире. Не верите? Взгляните на
        несколько примеров вакансий на популярном сервисе поиска работы
        <a href="https://hh.kz/" class="what-for__description-link"
          >Head Hunter</a
        >
      </div>
      <carousel class="what-for__carousel" autoplay>
        <slide class="what-for__carousel-slide">
          <img
            src="@/assets/images/job1.jpg"
            alt="Вакансия"
            class="what-for__carousel-image"
          />
        </slide>
        <slide class="what-for__carousel-slide">
          <img
            src="@/assets/images/job2.jpg"
            alt="Вакансия"
            class="what-for__carousel-image"
          />
        </slide>
        <!-- <slide class="what-for__carousel-slide">
          <img
            src="@/assets/images/job3.jpg"
            alt="Вакансия"
            class="what-for__carousel-image"
          />
        </slide> -->
      </carousel>
    </div>
    <div class="landing__how">
      <h2 class="how__heading">Как это проходит?</h2>
      <div class="how__cards">
        <cHowCard
          :path="firstStepImage"
          heading="Авторизуйтесь"
          description="Войдите в аккаунт или создайте новый аккаунт. Всего 2 минуты и вы в деле!"
        />
        <cHowCard
          :path="secondStepImage"
          heading="Пройдите курс"
          description="Выберите подходящий для вас курс и пройдите веселые, интерактивные уроки"
        />
        <cHowCard
          :path="thirdStepImage"
          heading="Станьте программистом"
          description="Используйте полученые навыки, чтобы получить работу востребованного разработчика"
        />
      </div>
    </div>
    <div class="about-course">
      <div class="about-course__text">
        <div class="about-course__title">Как проходит курс?</div>
        <div class="about-course__description">
          Курс будет проходить на нашей онлайн интерактивной платформе. Что
          значит интерактивный? Это значит, что вы будете писать код прямо в
          браузере, а проверять вас будет не учитель, а специальные
          автоматические тесты
        </div>
      </div>
      <div class="about-course__image-container">
        <img
          class="about-course__image"
          src="@/assets/images/aboutCourseImage.jpg"
          alt="Интерактивный курс"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import cHowCard from "@/components/landing/cHowCard";
import firstImage from "@/assets/images/firstStep.svg";
import secondImage from "@/assets/images/secondStep.svg";
import thirdImage from "@/assets/images/thirdStep.svg";

export default {
  components: {
    Carousel,
    Slide,
    cHowCard
  },
  data() {
    return {
      value: "1",
      firstStepImage: firstImage,
      secondStepImage: secondImage,
      thirdStepImage: thirdImage
    };
  }
};
</script>

<style>
.landing__page {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #eeeef6;
}

.header {
  position: absolute;
  padding: 0 7%;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  font-size: 35px;
  font-weight: bold;
  color: #0d0b6d;
}

.header__logo-link {
  text-decoration: none;
}

.header__logo-main {
  color: #5d33f6;
  font-weight: 900;
}

.header__navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header__navigation-link {
  margin-right: 25px;
  color: #384a62;
  font-size: 17px;
  opacity: 0.6;
  cursor: pointer;
  transition: 150ms ease-in-out;
}

.header__navigation-link:hover {
  opacity: 1;
  transition: 150ms ease-in-out;
}

.vs-select__input {
  font-size: 15px;
}

.vs-select__option {
  font-size: 15px;
}

.header__link-button {
  padding: 3px 5px;
  margin-left: 70px;
  font-size: 17px;
  font-weight: 400;
  cursor: pointer;
}

.header__button {
  margin-left: 40px;
  padding: 8px 30px;
  font-size: 17px;
  color: #eeeef6;
  background-color: #2522a0;
  border: 2px solid #2522a0;
  border-radius: 15px;
  transition: 170ms;
  cursor: pointer;
}

.header__button:hover {
  color: #2522a0;
  background-color: #eeeef6;
  border: 2px solid #2522a0;
}

.landing__welcome {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eeeef6;
}

.welcome__text {
  position: absolute;
  left: 7%;
  bottom: 23%;
  display: flex;
  flex-direction: column;
}

.welcome__heading {
  margin-bottom: 40px;
  font-size: 5.5vw;
  line-height: 1.1;
  color: #0d0b6d;
  font-weight: bold;
}

.welcome__description {
  width: 37%;
  font-size: 1.5vw;
  line-height: 1.3;
  color: #0d0b6d;
  opacity: 0.7;
}

.welcome__button {
  margin-top: 50px;
  padding: 15px 25px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eeeef6;
  font-size: 1.4vw;
  font-weight: 500;
  text-align: center;
  background-color: #2522a0;
  border: 4px solid #2522a0;
  border-radius: 30px;
  overflow: hidden;
  transition: 150ms ease-in-out;
  cursor: pointer;
}

.welcome__button:hover {
  color: #2522a0;
  background-color: #eeeef6;
  transform: scale(1.05);
  transition: 150ms ease-in-out;
}

.welcome__image {
  position: absolute;
  bottom: 5%;
  right: 0;
  height: 80%;
  width: auto;
}

.landing__what-for {
  padding-top: 5%;
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eeeef6;
  overflow-x: hidden;
}

.what-for__heading {
  margin-bottom: 20px;
  color: #2522a0;
  font-size: 3.5vw;
  font-weight: bold;
}

.what-for__description {
  margin-bottom: 50px;
  width: 40%;
  color: #2522a0;
  text-align: center;
  opacity: 0.6;
  font-size: 1.2vw;
  font-weight: normal;
}

.what-for__description-link {
  color: #5d33f6;
  opacity: 0.8;
  text-decoration: none;
  transition: 150ms ease-in-out;
}

.what-for__description-link:hover {
  opacity: 1;
  transition: 150ms ease-in-out;
}

.what-for__carouse-image {
  width: 100%;
}

.landing__how {
  margin-top: 200px;
  padding-bottom: 170px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.how__heading {
  margin-bottom: 60px;
  font-size: 3.5vw;
  color: #2522a0;
}

.how__cards {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.about-course {
  padding-bottom: 150px;
  margin: auto;
  margin-top: 150px;
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
  font-size: 3.5vw;
  color: #2522a0;
  font-weight: bold;
}

.about-course__description {
  font-size: 1.5vw;
  color: #2522a0;
  font-weight: 300;
  opacity: 0.8;
}

.about-course__image-container {
  width: 48%;
}

.about-course__image {
  width: 100%;
  height: auto;
}
</style>
