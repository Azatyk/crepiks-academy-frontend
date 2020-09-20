<template>
  <div class="test">
    <div class="test__text">
      <div class="test__text-title">{{ $t("testInfoTitle") }}</div>
      <div class="test__text-description">
        {{ $t("testInfoDescription") }}
      </div>
      <router-link to="/app/tests" class="test__button">{{
        $t("testInfoButtonText")
      }}</router-link>
    </div>
    <div class="test__images">
      <img
        src="@/assets/images/homeTest1.png"
        alt="Test"
        class="test__image-main"
      />
      <img
        src="@/assets/images/homeTest3.png"
        alt="Test"
        class="test__image-left"
      />
      <img
        src="@/assets/images/homeTest2.png"
        alt="Test"
        class="test__image-right"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.test {
  padding: 0 3%;
  width: 47%;
  height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 30px;
  background-color: $color-6;
  box-shadow: 7px 7px 7px 0px #0000001a;
  transition: 200ms ease-in-out;

  &:hover {
    transform: translateX(-15px) translateY(-15px);
    box-shadow: 20px 20px 7px 0px #0000001a;
  }

  &:hover {
    .test__image {
      &-main {
        transform: translateX(-10px) translateY(-15px) rotate(-13deg);
      }

      &-left {
        transform: translateX(-5px) translateY(-10px) rotate(-20deg);
      }

      &-right {
        transform: translateX(-10px) translateY(-10px) rotate(0deg);
      }
    }
  }

  &__text {
    margin-right: 10%;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    &-title {
      margin-bottom: 10px;
      font-size: 1.5vw;
      color: $color-5;
      font-weight: bold;
    }

    &-description {
      width: 95%;
      font-size: 0.85vw;
      color: $color-5;
    }
  }

  &__button {
    margin-top: 20px;
    padding: 7px 20px;
    font-size: 17px;
    color: $color-4;
    text-decoration: none;
    border: 3px solid $color-2;
    border-radius: 17px;
    background-color: $color-2;
    transition: 150ms ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
      color: $color-2;
      background-color: $color-6;
    }
  }

  &__images {
    position: relative;
    width: 25%;
    height: 100%;
  }

  &__image {
    &-main {
      position: absolute;
      top: 22%;
      right: 14%;
      width: 110px;
      height: auto;
      transform: rotate(-10deg);
      transition: 150ms ease-in-out;
    }

    &-left {
      position: absolute;
      right: 125%;
      bottom: 13%;
      width: 40px;
      height: auto;
      transform: rotate(-15deg);
      transition: 150ms ease-in-out;
    }

    &-right {
      position: absolute;
      right: -3%;
      top: 15%;
      width: 6px;
      height: auto;
      transform: rotate(5deg);
      transition: 150ms ease-in-out;
    }
  }
}
</style>
