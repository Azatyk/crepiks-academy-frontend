<template>
  <section class="advantages">
    <div class="content">
      <h2 class="advantages__heading">Системный подход к обучению</h2>
      <div class="advantages__container">
        <cAdvantage
          v-for="(advantage, index) in advantages"
          :key="index"
          :icon="advantage.icon"
          :title="advantage.title"
        />
      </div>
    </div>
  </section>
</template>

<script>
import cAdvantage from "./cAdvantage";
import Videolections from "@/assets/icons/videolections.svg";
import Tests from "@/assets/icons/tests.svg";
import Mediateka from "@/assets/icons/mediateka.svg";
import Certificate from "@/assets/icons/certificate.svg";

export default {
  components: {
    cAdvantage
  },

  data() {
    return {
      advantages: [
        {
          icon: Videolections,
          title: "Видеолекции"
        },
        {
          icon: Tests,
          title: "Тестирование"
        },
        {
          icon: Mediateka,
          title: "Медиатека"
        },
        {
          icon: Certificate,
          title: "Сертификат"
        }
      ]
    };
  }
};
</script>

<style scoped>
.advantages {
  padding: 10vw 0;
  width: 100%;
  background-color: #f8f7fc;
}

.content {
  margin: auto;
  height: 100%;
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.advantages__heading {
  margin-bottom: 7%;
  font-size: 2.5vw;
  color: #34495e;
}

.advantages__container {
  width: 60vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
