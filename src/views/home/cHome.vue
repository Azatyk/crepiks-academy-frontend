<template>
  <div class="home-page">
    <div class="home__news">
      <div class="home__news-text">
        <div class="home__news-title">Новый курс "Базовый HTML & CSS"</div>
        <div class="home__news-description">
          Пройдите новый курс по базовой верстке и создайте свой собственный
          одностраничный сайт!
        </div>
        <s-button
          class="home__news-button"
          @click="$router.push('/app/courses')"
          >Попробовать</s-button
        >
      </div>
      <i class="fas fa-money-check home__news-icon"></i>
    </div>
  </div>
</template>

<script>
import Button from "vuesax/dist/vsButton";

export default {
  components: {
    "s-button": Button
  }
};
</script>

<style>
.home-page {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

.home__news {
  margin-top: 10vh;
  width: 60%;
  height: 350px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f5f7f6;
  border-radius: 30px;
  box-shadow: 10px 10px 7px 0px #0000001a;
}

.home__news-text {
  margin-right: 10%;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.home__news-title {
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: bold;
  color: #2e2e3d;
}

.home__news-description {
  font-size: 20px;
  color: #2e2e3d;
}

.home__news-button {
  margin-left: 0;
  margin-top: 25px;
  height: 40px;
  width: 35%;
  font-size: 17px;
}

.home__news-icon {
  font-size: 220px;
  color: #2e2e3d;
}
</style>
