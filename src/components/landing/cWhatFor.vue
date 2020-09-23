<template>
  <div
    class="landing__what-for"
    v-prlx.mobile="{ speed: -0.3, fromBottom: false }"
    id="whatfor"
  >
    <h2 class="what-for__heading">
      {{ $t("whatForTitle") }}
    </h2>
    <div class="what-for__description">
      {{ $t("whatForDescription") }}
    </div>
    <div
      class="what-for__carousel"
      v-prlx.mobile="{ direction: 'x', speed: -1.7, fromBottom: true }"
    >
      <img
        src="@/assets/images/job1.jpg"
        alt="Вакансия"
        class="what-for__carousel-image"
      />
      <img
        src="@/assets/images/job2.jpg"
        alt="Вакансия"
        class="what-for__carousel-image"
      />
      <img
        src="@/assets/images/job5.jpg"
        alt="Вакансия"
        class="what-for__carousel-image"
      />
      <img
        src="@/assets/images/job3.jpg"
        alt="Вакансия"
        class="what-for__carousel-image"
      />
      <img
        src="@/assets/images/job4.jpg"
        alt="Вакансия"
        class="what-for__carousel-image"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.landing__what-for {
  margin-bottom: 17%;
  width: 100%;
  min-height: 500px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $color-3;
  overflow-x: hidden;
  z-index: 3;
}

.what-for__heading {
  margin-bottom: 20px;
  color: $color-2;
  font-size: 3.7vw;
  font-weight: bold;
  z-index: 3;
}

.what-for__description {
  margin-bottom: 50px;
  width: 40%;
  color: $color-2;
  text-align: center;
  opacity: 0.8;
  font-size: 1.4vw;
  font-weight: normal;
}

.what-for__description-link {
  color: $color-1;
  text-decoration: none;
  transition: 150ms ease-in-out;
}

.what-for__description-link:hover {
  opacity: 1;
  transition: 150ms ease-in-out;
}

.what-for__carousel {
  margin-left: 2400px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
}

.what-for__carousel-image {
  margin-right: 50px;
}

@media (max-width: 1200px) {
  .what-for__heading {
    font-size: 4vw;
  }

  .what-for__description {
    font-size: 1.6vw;
  }

  .what-for__carousel-image {
    width: 700px;
    margin-right: 30px;
  }
}

@media (max-width: 1024px) {
  .landing__what-for {
    margin-top: 30%;
  }

  .what-for__heading {
    font-size: 7vw;
  }

  .what-for__description {
    width: 75%;
    font-size: 3.4vw;
  }

  .what-for__carousel-image {
    width: 450px;
  }
}

@media (max-width: 650px) {
  .landing__what-for {
    margin-top: 50%;
  }

  .what-for__heading {
    width: 100%;
    font-size: 9vw;
    text-align: center;
  }

  .what-for__description {
    width: 85%;
    font-size: 4.5vw;
  }

  .what-for__carousel-image {
    width: 300px;
  }
}
</style>
