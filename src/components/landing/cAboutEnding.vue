<template>
  <div class="about-ending" id="aboutending">
    <div class="about-ending__images-container" v-prlx.mobile="{ speed: -0.6 }">
      <img
        class="about-ending__image-sertificate"
        src="@/assets/images/endCertificate.jpg"
        alt="Certificate"
        :class="{ 'about-ending__image-sertificate-hover': isLandingHovered }"
      />
      <img
        class="about-ending__image-landing"
        src="@/assets/images/endLanding.jpg"
        alt="Landing"
        @mouseenter="isLandingHovered = true"
        @mouseleave="isLandingHovered = false"
      />
    </div>
    <div class="about-ending__text" v-prlx.mobile="{ speed: -0.3 }">
      <div class="about-ending__text-title">Что вы получите в конце?</div>
      <div class="about-ending__text-description">
        По окончанию курса вы получите базовые навыки веб-разработчика,
        сертификат об окончании обучения и напишите свой первый одностраничный
        сайт!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLandingHovered: false
    };
  }
};
</script>

<style scoped>
.about-ending {
  padding: 0 2%;
  margin: auto;
  margin-bottom: 10%;
  width: 100%;
  max-width: 1200px;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.about-ending__images-container {
  width: 48%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.about-ending__image-sertificate {
  margin-right: 30px;
  width: 45%;
  height: auto;
  cursor: pointer;
  transform: rotateY(-35deg);
  transition: 300ms ease-in-out;
}

.about-ending__image-sertificate:hover {
  transform: rotateY(0deg) scale(1.3) translateX(30px);
}

.about-ending__image-sertificate:hover ~ .about-ending__image-landing {
  transform: rotateY(50deg) translateX(50px) scale(0.85);
}

.about-ending__image-landing {
  width: 44%;
  height: auto;
  cursor: pointer;
  transform: rotateY(30deg);
  transition: 300ms ease-in-out;
}

.about-ending__image-landing:hover {
  transform: rotateY(0deg) scale(1.3) translateX(-30px);
}

.about-ending__image-sertificate-hover {
  transform: rotateY(-50deg) translateX(-50px) scale(0.85);
}

.about-ending__text {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.about-ending__text-title {
  margin-bottom: 30px;
  font-size: 3vw;
  color: #2522a0;
  font-weight: bold;
}

.about-ending__text-description {
  font-size: 1.4vw;
  color: #2522a0;
  font-weight: 300;
}

@media (max-width: 1200px) {
  .about-ending {
    justify-content: center;
  }

  .about-ending__text {
    margin-bottom: 50px;
    margin-left: 50px;
    width: 40%;
  }

  .about-ending__text-title {
    font-size: 3.6vw;
  }

  .about-ending__text-description {
    font-size: 1.9vw;
  }

  .about-ending__images-container {
    width: 45%;
  }
}

@media (max-width: 1024px) {
  .about-ending {
    margin-top: 300px;
    margin-bottom: 200px;
    flex-direction: column-reverse;
  }

  .about-ending__text {
    width: 80%;
  }

  .about-ending__text-title {
    font-size: 7vw;
  }

  .about-ending__text-description {
    font-size: 3.5vw;
  }

  .about-ending__images-container {
    width: 80%;
  }
}

@media (max-width: 650px) {
  .about-ending {
    margin-top: 200px;
    padding: 0 5%;
  }

  .about-ending__text {
    padding: 0 7%;
    margin-left: 0;
    margin-bottom: 20px;
    width: 100%;
  }

  .about-ending__text-title {
    margin-bottom: 20px;
    font-size: 8vw;
  }

  .about-ending__text-description {
    font-size: 4.5vw;
  }

  .about-endnig__images-container {
    width: 100%;
  }

  .about-ending__image-sertificate {
    margin-right: 0;
    width: 60%;
  }

  .about-ending__image-landing {
    width: 60%;
  }
}
</style>
