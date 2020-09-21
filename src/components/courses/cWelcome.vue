<template>
  <div class="welcome">
    <div class="welcome__text">
      <h1 class="welcome__text-title">Подбери идеальный курс для себя</h1>
      <div class="welcome__text-description">
        Приобрети навыки 21 века с помощью веселых и увлекательных интерактивных
        курсов. Начни курс веб разработки и познай основы создания сайтов за 2
        недели!
      </div>
    </div>
    <div class="welcome__images">
      <img
        src="@/assets/images/coursesLaptop.png"
        alt="Laptop"
        class="welcome__images-main"
      />
      <img
        src="@/assets/images/coursesCoffee.png"
        alt="Coffee"
        class="welcome__images-left"
      />
      <img
        src="@/assets/images/coursesBook.png"
        alt="Book"
        class="welcome__images-right"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.welcome {
  margin: 5vh 0;
  width: 100%;
  height: 350px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: $color-6;
  border-radius: 30px;
  box-shadow: 7px 7px 7px 0px $color-7;
  transition: 200ms ease-in-out;

  &:hover {
    transform: translateX(-15px) translateY(-15px);
    box-shadow: 20px 20px 7px 0px $color-7;
  }

  &:hover .welcome__images {
    &-main {
      transform: translateX(-20px) translateY(-10px) rotate(-5deg);
    }

    &-left {
      transform: translateX(-15px) translateY(-15px) rotate(-15deg);
    }

    &-right {
      transform: translateX(-15px) translateY(-30px) rotate(10deg);
    }
  }

  &__text {
    margin-right: 10%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    &-title {
      margin-bottom: 20px;
      font-size: 2.5vw;
      font-weight: bold;
      color: $color-5;
    }

    &-description {
      font-size: 1.1vw;
      color: $color-5;
    }
  }

  &__images {
    position: relative;
    width: 30%;
    height: 100%;
    transition: 150ms ease-in-out;

    &-main {
      position: absolute;
      right: 16%;
      bottom: 15%;
      width: 300px;
      height: auto;
      transition: 200ms ease-in-out;
    }

    &-left {
      position: absolute;
      bottom: 15%;
      right: 105%;
      width: 80px;
      height: auto;
      transition: 200ms ease-in-out;
    }

    &-right {
      position: absolute;
      bottom: 15%;
      right: -5%;
      width: 70px;
      height: auto;
      transition: 200ms ease-in-out;
    }
  }
}
</style>
