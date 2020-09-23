<template>
  <div class="card">
    <div class="card-visible">
      <div class="card-visible__hover-it">{{ $t("courseCardHoverText") }}</div>
      <div class="card-visible__text">
        <h3 class="card-visible__text-title">{{ title }}</h3>
        <div class="card-visible__text-description">{{ description }}</div>
      </div>
      <div class="card-visible__image-container">
        <img class="card-visible__image" :src="image" :alt="title" />
      </div>
    </div>
    <div class="card-hidden">
      <div class="card-hidden__property">
        <div class="card-hidden__property-name">
          <i class="bx bx-line-chart card-hidden__property-icon"></i>
          <div class="card-hidden__property-text">
            {{ $t("courseCardComplexityText") }}:
          </div>
        </div>
        <div class="card-hidden__property-data">
          {{ $t("courseCardComplexityDataText") }}
        </div>
      </div>
      <div class="card-hidden__property">
        <div class="card-hidden__property-name">
          <i class="bx bx-time card-hidden__property-icon"></i>
          <div class="card-hidden__property-text">
            {{ $t("courseCardDurationText") }}:
          </div>
        </div>
        <div class="card-hidden__property-data">
          {{ $t("courseCardDurationDataText") }}
        </div>
      </div>
      <div class="card-hidden__property">
        <div class="card-hidden__property-name">
          <i class="bx bx-money card-hidden__property-icon"></i>
          <div class="card-hidden__property-text">
            {{ $t("courseCardPriceText") }}:
          </div>
        </div>
        <div class="card-hidden__property-data">
          {{ $t("courseCardPriceDataText") }}
        </div>
      </div>
      <div class="card-hidden__button-container" v-if="!isSoon">
        <router-link :to="'/app/courses/' + id" class="card-hidden__button">{{
          $t("courseCardButtonText")
        }}</router-link>
      </div>
      <div class="card-hidden__button-container" v-else>
        <div class="card-hidden__button card-hidden__button-soon">
          {{ $t("courseCardSoonText") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    lessonsAmount: {
      type: Number,
      required: false
    },
    id: {
      type: Number,
      required: true
    },
    isSoon: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.card {
  position: relative;
  width: 48%;
  height: 230px;
  border-radius: 30px;
  box-shadow: 7px 7px 7px 0px $color-7;
  overflow: hidden;

  &:hover {
    .card-hidden {
      opacity: 1;
    }
  }

  &:hover:before {
    clip-path: circle(140% at 0% 0%);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $color-1;
    clip-path: circle(0px at 0% 0%);
    transition: 400ms ease-in-out;
    z-index: 2;
  }

  &-visible {
    position: absolute;
    padding-left: 5%;
    padding-right: 3%;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: $color-6;
    transition: 400ms ease-in-out;
    opacity: 1;

    &__hover-it {
      position: absolute;
      top: 12%;
      left: 5%;
      padding: 7px 15px;
      font-size: 15px;
      color: $color-2;
      border: 1px solid $color-2;
      border-radius: 10px;
      background-color: $color-6;
    }

    &__text {
      margin-top: 5%;
      width: 65%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      &-title {
        margin-bottom: 10px;
        font-size: 28px;
      }

      &-description {
        font-size: 17px;
      }
    }

    &__image-container {
      width: 35%;
      height: 60%;
    }

    &__image {
      height: 100%;
      width: auto;
    }
  }

  &-hidden {
    position: absolute;
    padding: 5% 5%;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border: 0.1px;
    border-radius: 30px;
    transition: 500ms ease-in-out;
    opacity: 0;
    z-index: 3;

    &__property {
      padding-left: 5%;
      width: 50%;
      height: 35%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      &-name {
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
      }

      &-icon {
        margin-right: 10px;
        color: $color-3;
        font-size: 20px;
      }

      &-text {
        color: $color-3;
        font-size: 20px;
        font-weight: bold;
      }

      &-data {
        color: $color-3;
        font-size: 20px;
        font-weight: 400;
      }
    }

    &__button-container {
      padding-left: 5%;
      width: 50%;
      height: 35%;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    &__button {
      padding: 8px 20px;
      color: $color-1;
      font-size: 20px;
      text-decoration: none;
      border: 2px solid $color-3;
      border-radius: 15px;
      background-color: $color-3;
      transition: 150ms ease-in-out;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
        color: $color-3;
        background-color: $color-1;
      }

      &-soon {
        color: $color-3;
        background-color: $color-1;
        cursor: default;

        &:hover {
          transform: none;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    & {
      margin-bottom: 50px;
      width: 100%;
      height: 250px;

      &-visible {
        &__text {
          &-title {
            font-size: 3.7vw;
          }

          &-description {
            font-size: 2.2vw;
          }
        }

        &__image-container {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        &__image {
          width: 90%;
          height: auto;
        }
      }
    }
  }

  @media (max-width: 650px) {
    & {
      width: 100%;
      height: 450px;
      flex-direction: column-reverse;

      &-visible {
        padding: 5% 5%;
        width: 100%;
        height: 100%;
        flex-direction: column-reverse;

        &__hover-it {
          top: 5%;
          font-size: 13px;
        }

        &__text {
          padding: 0 1%;
          margin-top: 0;
          width: 100%;
          height: 30%;
          box-sizing: border-box;

          &-title {
            font-size: 5.5vw;
          }

          &-description {
            width: 95%;
            font-size: 3.4vw;
          }
        }

        &__image-container {
          margin-top: 40px;
          width: 100%;
          height: 60%;
        }

        &__image {
          width: 100%;
          height: auto;
        }
      }

      &-hidden {
        padding: 5% 5%;
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: center;

        &__property {
          margin-left: 10%;
          margin-bottom: 10%;
          width: 100%;
          height: auto;

          &-text {
            font-size: 18px;
          }

          &-data {
            font-size: 18px;
          }
        }

        &__button-container {
          padding: 0;
          width: 100%;
          height: auto;
        }

        &__button {
          margin-left: 10%;
          font-size: 17px;
        }
      }
    }
  }
}
</style>
