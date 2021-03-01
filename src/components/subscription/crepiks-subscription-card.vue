<template>
  <div class="subscription-card">
    <div class="card-text">
      <h1 class="card-text-title">
        Получите доступ ко
        <span class="card-text-title-important">всем</span> курсам с подпиской
      </h1>
      <p class="card-text-description">
        Оформите подписку за 5000 тг и получите доступ ко всем курсам Crepiks на
        месяц
      </p>
      <div class="card-button-promocode">
        <cButton
          @click="$emit('subscription-button-clicked')"
          :isBold="true"
          class="card-button"
          text="Оформить подписку"
        />
        <span @click="$emit('promocode-opened')" class="card-promocode"
          >Есть промокод?</span
        >
      </div>
    </div>
    <div class="card-images">
      <img
        class="card-image markup-basic"
        src="@/assets/images/basic-markup-image-small.png"
        alt=""
      />
      <img
        class="card-image markup-upgrade"
        src="@/assets/images/pro-markup-image-small.png"
        alt=""
      />
      <img
        class="card-image javascript-basic"
        src="@/assets/images/basic-js-image-small.png"
        alt=""
      />
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

.subscription-card {
  width: 700px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  z-index: 2;
  background-color: $white;
}

.card {
  &-text {
    padding: 50px 0 60px 50px;
    width: 61%;
    height: 100%;
    display: flex;
    flex-direction: column;

    &-title {
      margin-bottom: 15px;
      color: $dark;
      font-size: 35px;
      font-weight: 600;

      &-important {
        color: $primary;
      }
    }

    &-description {
      margin-bottom: 25px;
      color: $dark;
      font-size: 20px;
      font-weight: 600;
      opacity: 0.8;
    }
  }

  &-button {
    margin-right: 25px;
    font-weight: bold;

    &-promocode {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  &-promocode {
    color: $primary;
    font-size: 18px;
    font-weight: 500;
    opacity: 0.7;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }

  &-images {
    position: relative;
    width: 30%;
    height: 100%;
  }

  &-image {
    position: absolute;
    width: 95px;
    border-radius: 10px;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.2);
  }
}

.markup {
  &-basic {
    transform: rotate(-15deg);
    top: 50px;
    left: 50px;
  }

  &-upgrade {
    left: 85px;
    top: 110px;
    transform: rotate(18deg);
  }
}

.javascript {
  &-basic {
    top: 175px;
    left: 50px;
    transform: rotate(-18deg);
  }
}

@media (max-width: 800px) {
  .subscription-card {
    width: 500px;
    height: fit-content;
  }

  .card-text {
    padding: 30px 0 30px 30px;
    width: 70%;

    &-title {
      font-size: 25px;
    }

    &-description {
      font-size: 15px;
    }
  }

  .card-promocode {
    font-size: 11px;
  }

  .card-button {
    font-size: 13px;
    padding: 8px 20px;
    border-radius: 7px;
  }

  .markup {
    &-basic {
      width: 75px;
      top: 30px;
      left: 20px;
    }

    &-upgrade {
      width: 75px;
      top: 79px;
      left: 45px;
    }
  }

  .javascript {
    &-basic {
      width: 75px;
      top: 135px;
      left: 20px;
    }
  }
}

@media (max-width: 530px) {
  .subscription-card {
    width: 315px;
    padding-right: 0;
    flex-direction: column-reverse;
    align-items: center;
  }

  .card-text {
    padding: 25px 25px 20px 30px;
    box-sizing: border-box;
    width: 100%;

    &-title {
      font-size: 20px;
      margin-bottom: 10px;
    }

    &-description {
      font-size: 14px;
      margin-bottom: 18px;
    }
  }

  .card-promocode {
    margin-top: 0px;
    font-size: 11px;
  }

  .card-images {
    height: 110px;
    width: 100%;
  }

  .card-button {
    margin-right: 10px;
    font-size: 12px;
  }

  .markup {
    &-basic {
      left: 50px;
    }

    &-upgrade {
      left: 120px;
      top: 20px;
    }
  }

  .javascript {
    &-basic {
      left: 190px;
      top: 30px;
    }
  }
}
</style>
