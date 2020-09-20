<template>
  <div class="landing__welcome">
    <div class="welcome__text" v-prlx.mobile="{ speed: -0.6 }">
      <h1 class="welcome__heading">
        {{ $t("welcomeTitleFirst") }}<br />{{ $t("welcomeTitleSecond") }}
      </h1>
      <div class="welcome__description">
        {{ $t("welcomeDescriptionText") }}
      </div>
      <div class="welcome__button" @click="$router.push('/app/courses')">
        {{ $t("welcomeButtonText") }}
      </div>
    </div>
    <img
      v-prlx.mobile="{ speed: -0.2 }"
      src="@/assets/images/landingWelcome.png"
      alt="Programming"
      class="welcome__image"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.landing__welcome {
  padding-bottom: 10%;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $color-3;
  z-index: 0;
}

.welcome__text {
  position: absolute;
  left: 7%;
  bottom: 20%;
  width: 70%;
  display: flex;
  flex-direction: column;
  z-index: 2;
}

.welcome__heading {
  margin-bottom: 40px;
  font-size: 4.5vw;
  line-height: 1.1;
  color: $color-1;
  font-weight: bold;
}

.welcome__description {
  width: 40%;
  font-size: 1.35vw;
  line-height: 1.3;
  color: $color-1;
  opacity: 0.7;
}

.welcome__button {
  margin-top: 50px;
  padding: 0.7% 0;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $color-3;
  font-size: 1.3vw;
  font-weight: 500;
  text-align: center;
  background-color: $color-2;
  border: 4px solid $color-2;
  border-radius: 35px;
  overflow: hidden;
  transition: 150ms ease-in-out;
  cursor: pointer;
}

.welcome__button:hover {
  color: $color-2;
  background-color: $color-3;
  transform: scale(1.05);
  transition: 150ms ease-in-out;
}

.welcome__image {
  position: absolute;
  bottom: 0%;
  right: 0;
  height: 80%;
}

@media (max-width: 1200px) {
  .welcome__text {
    bottom: 20%;
  }

  .welcome__heading {
    margin-bottom: 20px;
  }

  .welcome__button {
    margin-top: 40px;
    padding: 8px 7px;
    width: 170px;
  }
}

@media (max-width: 1024px) {
  .landing__welcome {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-image: url(../../assets/images/landingWelcomeSmall.png);
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: bottom 20% right 22%;
  }

  .welcome__text {
    position: inherit;
    margin-left: 8%;
    margin-bottom: 13%;
    width: auto;
  }

  .welcome__heading {
    font-size: 7.5vw;
  }

  .welcome__description {
    width: 60%;
    font-size: 2.7vw;
  }

  .welcome__button {
    padding: 1.5% 0.5%;
    width: 30%;
    font-size: 2.5vw;
  }

  .welcome__image {
    display: none;
  }
}

@media (max-width: 650px) {
  .landing__welcome {
    background-size: 65%;
    background-position: bottom 15% right 30%;
  }

  .welcome__heading {
    margin-bottom: 5%;
    font-size: 10vw;
  }

  .welcome__description {
    width: 80%;
    font-size: 3.8vw;
  }

  .welcome__button {
    margin-top: 8%;
    padding: 1.5% 0;
    width: 42%;
    font-size: 3.7vw;
  }
}
</style>
