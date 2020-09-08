<template>
  <div class="target__page">
    <header class="header">
      <router-link to="/" class="header__logo-link">
        <div class="header__logo">
          Crepiks
        </div>
      </router-link>
      <nav class="header__navigation">
        <div class="header__navigation-link">Зачем мне это</div>
        <div class="header__navigation-link">Как это проходит</div>
        <div class="header__navigation-link">Как начать</div>
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
        <!-- <vs-button class="header__link-button">Вперед</vs-button> -->
      </nav>
    </header>
    <div class="target__welcome">
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
        src="@/assets/images/targetWelcome.png"
        alt="Programming"
        class="welcome__image"
      />
    </div>
    <div class="target__what-for">
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
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      value: "1"
    };
  }
};
</script>

<style>
.target__page {
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

.target__welcome {
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

.target__what-for {
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
</style>
