<template>
  <div class="subscription-card">
    <div class="card-text">
      <h1 class="card-text-title">
        Получи доступ ко
        <span class="card-text-title-important">всем</span> курсам с подпиской
      </h1>
      <p class="card-text-description">
        Оформите подписку за 5000 тг и получите доступ ко всем курсам Crepiks на
        3 месяца
      </p>
      <div class="card-button-promocode">
        <cButton
          @click="$emit('subscription-button-clicked')"
          class="card-button"
          text="Оформить подписку"
        />
        <span @click="$emit('open-promocode')" class="card-promocode"
          >Есть промокод?</span
        >
      </div>
    </div>
    <div class="card-images">
      <img
        class="html-css-basic"
        src="@/assets/images/html-css-basic.svg"
        alt=""
      />
      <img
        class="html-css-upgrade"
        src="@/assets/images/html-css-upgrade.svg"
        alt=""
      />
      <img class="javascript" src="@/assets/images/javascript.svg" alt="" />
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
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.08);
  z-index: 3;
  background-color: $white;
}

.card-text {
  padding: 50px 0 60px 50px;
  width: 60%;
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

.card-button-promocode {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.card {
  &-button {
    margin-right: 25px;
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
}

.html-css-basic {
  position: absolute;
  transform: rotate(-20deg);
  top: 50px;
  left: 50px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
}

.html-css-upgrade {
  position: absolute;
  left: 85px;
  top: 135px;
  transform: rotate(20deg);
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
}

.javascript {
  position: absolute;
  top: 200px;
  left: 50px;
  transform: rotate(-20deg);
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
}

@media (max-width: 800px) {
  .subscription-card {
    width: 500px;
    height: fit-content;
  }

  .card-text {
    padding: 30px 0 30px 30px;

    &-title {
      font-size: 25px;
    }

    &-description {
      font-size: 15px;
    }
  }

  // .card-button-promocode {
  //   flex-direction: column;
  //   align-items: flex-start;
  // }

  .card-promocode {
    margin-top: 20px;
    font-size: 11px;
  }

  .card-images {
    height: 320px;
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
    font-size: 13px;
    padding: 8px 20px;
    margin-right: 10px;
  }

  .html-css-basic {
    position: absolute;
    width: 160px;
    left: 10px;
  }

  .html-css-upgrade {
    position: absolute;
    width: 140px;
    left: 80px;
    top: -20px;
  }

  .javascript {
    position: absolute;
    width: 150px;
    left: 150px;
    top: 0;
  }
}
</style>
