<template>
  <div class="news">
    <div class="news__text">
      <div class="news__title">
        {{ $t("courseInfoTitle") }}
      </div>
      <div class="news__description">
        {{ $t("courseInfoDescription") }}
      </div>
      <router-link to="/app/courses/1" class="news__button">{{
        $t("courseInfoButtonText")
      }}</router-link>
    </div>
    <img
      src="@/assets/images/homeCupOfCoffee.png"
      alt="Coffee"
      class="news__image"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.news {
  margin: 5vh 0;
  width: 100%;
  height: 350px;
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

  &:hover .news__image {
    transform: translateX(-10px) translateY(-10px) rotate(-3deg);
  }

  &__text {
    margin-right: 10%;
    width: 47%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &__title {
    margin-bottom: 10px;
    width: 110%;
    font-size: 38px;
    font-weight: bold;
    color: $color-5;
  }

  &__description {
    font-size: 20px;
    color: $color-5;
  }

  &__button {
    margin-top: 25px;
    padding: 8px 23px;
    font-size: 20px;
    color: $color-4;
    text-decoration: none;
    border: 3px solid $color-2;
    border-radius: 20px;
    background-color: $color-2;
    transition: 150ms ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
      color: $color-2;
      background-color: $color-6;
    }
  }

  &__image {
    width: 30%;
    height: auto;
    transition: 150ms ease-in-out;
  }

  @media (max-width: 1024px) {
    & {
      padding: 3% 0;
      height: auto;
    }

    &__title {
      font-size: 4vw;
    }

    &__description {
      font-size: 2vw;
    }

    &__button {
      padding: 6px 20px;
      font-size: 2vw;
    }
  }

  @media (max-width: 650px) {
    & {
      padding: 5% 5%;
      width: auto;
      height: auto;
      flex-direction: column-reverse;

      &:hover {
        transform: none;
        box-shadow: 7px 7px 7px 0px $color-7;

        .news__image {
          transform: none;
        }
      }

      &__image {
        margin-right: 20px;
        margin-bottom: 30px;
        width: 80%;
      }

      &__text {
        margin: 0;
        width: 100%;
      }

      &__title {
        width: 100%;
        font-size: 5.5vw;
      }

      &__description {
        width: 95%;
        font-size: 3.5vw;
      }

      &__button {
        font-size: 3.5vw;
      }
    }
  }
}
</style>
