<template>
  <div class="course">
    <i class="bx bx-x course-close"></i>
    <div class="course-content">
      <div class="main-info">
        <img
          class="main-info-image"
          src="@/assets/images/basic-markup-image-big.png"
          alt="Базовая верстка сайтов"
        />
        <h2 class="main-info-title">Базовая верстка сайтов</h2>
        <p class="main-info-description">
          На этом курсе вы гораздо подробнее изучите верстку сайтов. Если раньше
          с помощью CSS вы могли лишь менять цвета, шрифты и размеры блоков, то
          теперь вам откроется мир сеток, анимаций, форм и множества других
          особенностей стилизации сайтов.
        </p>
        <cButton text="Перейти к курсу" class="main-info-button" />
      </div>
      <div class="course-lessons">
        <div class="course-lessons-labels">
          <div class="course-lessons-title">Уроки курса</div>
          <div class="course-lessons-amount">32 урока</div>
        </div>
        <div class="course-lessons-list">
          <div class="lesson">
            <div class="lesson-title">
              <div class="lesson-title-number">1.</div>
              <div class="lesson-title-text">Здравствуйте</div>
            </div>
            <div class="lesson-status">Не пройден</div>
          </div>
          <div class="lesson">
            <div class="lesson-title">
              <div class="lesson-title-number">2.</div>
              <div class="lesson-title-text">Первый код</div>
            </div>
            <div class="lesson-status">Не пройден</div>
          </div>
          <div class="lesson">
            <div class="lesson-title">
              <div class="lesson-title-number">3.</div>
              <div class="lesson-title-text">Первый HTML</div>
            </div>
            <div class="lesson-status">Не пройден</div>
          </div>
          <div class="lesson">
            <div class="lesson-title">
              <div class="lesson-title-number">4.</div>
              <div class="lesson-title-text">Первый CSS</div>
            </div>
            <div class="lesson-status">Не пройден</div>
          </div>
          <div class="lesson">
            <div class="lesson-title">
              <div class="lesson-title-number">5.</div>
              <div class="lesson-title-text">Что такое HTML</div>
            </div>
            <div class="lesson-status">Не пройден</div>
          </div>
          <div class="lesson">
            <div class="lesson-title">
              <div class="lesson-title-number">6.</div>
              <div class="lesson-title-text">HTML теги</div>
            </div>
            <div class="lesson-status">Не пройден</div>
          </div>
          <div class="lesson">
            <div class="lesson-title">
              <div class="lesson-title-number">7.</div>
              <div class="lesson-title-text">Здравствуйте</div>
            </div>
            <div class="lesson-status">Не пройден</div>
          </div>
          <div class="lesson">
            <div class="lesson-title">
              <div class="lesson-title-number">8.</div>
              <div class="lesson-title-text">Заголовок</div>
            </div>
            <div class="lesson-status">Не пройден</div>
          </div>
          <div class="lesson">
            <div class="lesson-title">
              <div class="lesson-title-number">9.</div>
              <div class="lesson-title-text">Параграф</div>
            </div>
            <div class="lesson-status">Не пройден</div>
          </div>
          <div class="lesson">
            <div class="lesson-title">
              <div class="lesson-title-number">10.</div>
              <div class="lesson-title-text">Кнопка</div>
            </div>
            <div class="lesson-status">Не пройден</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cButton from "@/components/common/crepiks-button";

export default {
  components: {
    cButton
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.course {
  position: fixed;
  right: 0;
  top: 0;
  padding: 60px 50px;
  padding-bottom: 0;
  width: 40%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: $white;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  z-index: 3;

  &-close {
    color: $dark;
    font-size: 25px;
    opacity: 0.4;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

  &-content {
    padding-bottom: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }
}

.main-info {
  margin-top: 30px;
  margin-bottom: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;

  &-image {
    margin-bottom: 25px;
    width: 100%;
  }

  &-title {
    margin-bottom: 10px;
    color: $dark;
    font-size: 30px;
    font-weight: 600;
    opacity: 0.9;
  }

  &-description {
    margin-bottom: 20px;
    color: $dark;
    font-size: 16px;
    font-weight: 500;
    opacity: 0.7;
  }

  &-button {
    width: 170px;
  }
}

.course-lessons {
  width: 100%;
  display: flex;
  flex-direction: column;

  &-labels {
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &-title {
    color: $dark;
    font-size: 20px;
    font-weight: 500;
    opacity: 0.9;
  }

  &-amount {
    color: $dark;
    font-size: 15px;
    font-weight: 400;
    opacity: 0.7;
  }

  &-list {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}

.lesson {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &-title {
    display: flex;
    flex-direction: row;
    color: $dark;
    font-size: 16px;
    opacity: 0.7;

    &-number {
      margin-right: 7px;
    }
  }

  &-status {
    color: $dark;
    font-size: 12px;
    opacity: 0.6;
  }
}
</style>
