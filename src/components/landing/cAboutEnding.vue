<template>
  <div class="about-ending">
    <div class="about-ending__images-container">
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
    <div class="about-ending__text">
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
  padding-bottom: 150px;
  margin: auto;
  margin-top: 150px;
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
  font-size: 3.5vw;
  color: #2522a0;
  font-weight: bold;
}

.about-ending__text-description {
  font-size: 1.5vw;
  color: #2522a0;
  font-weight: 300;
  opacity: 0.8;
}
</style>
