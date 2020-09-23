<template>
  <div class="soon">
    <div class="soon__text">
      <h1 class="soon__text-title">{{ $t("soonTitle") }}</h1>
      <div class="soon__text-description">
        {{ $t("soonDescription") }}
      </div>
    </div>
    <img src="@/assets/images/soonImage.png" alt="Soon" class="soon__image" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.soon {
  padding: 0 2%;
  margin: auto;
  margin-top: 70px;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__text {
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &-title {
      margin-bottom: 20px;
      color: $color-1;
      font-size: 3.8vw;
      font-weight: bold;
    }

    &-description {
      width: 80%;
      color: $color-1;
      font-size: 1.7vw;
      font-weight: 300;
      text-align: center;
    }
  }

  &__image {
    width: 50%;
    height: auto;
  }

  @media (max-width: 1200px) {
    & {
      &__text {
        width: 80%;

        &-title {
          font-size: 4.5vw;
        }

        &-description {
          font-size: 2.5vw;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    & {
      &__text {
        width: 100%;
        &-title {
          font-size: 7vw;
        }

        &-description {
          font-size: 3.5vw;
        }
      }

      &__image {
        width: 80%;
      }
    }
  }

  @media (max-width: 650px) {
    & {
      margin-top: 70px;
      height: 70vh;

      &__text {
        &-title {
          font-size: 8vw;
        }

        &-description {
          font-size: 4.1vw;
        }
      }

      &__image {
        width: 85%;
      }
    }
  }
}
</style>
