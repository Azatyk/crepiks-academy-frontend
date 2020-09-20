<template>
  <div class="news">
    <div class="news__text">
      <div class="news__title">
        {{ $t("newsTitle") }}
      </div>
      <div class="news__description">
        {{ $t("newsDescription") }}
      </div>
      <router-link to="/app/courses/1" class="news__button">{{
        $t("newsButton")
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
  margin-bottom: 5vh;
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: $color-6;
  border-radius: 30px;
  box-shadow: 7px 7px 7px 0px #0000001a;
  transition: 200ms ease-in-out;

  &:hover {
    transform: translateX(-15px) translateY(-15px);
    box-shadow: 20px 20px 7px 0px #0000001a;
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
}
</style>
