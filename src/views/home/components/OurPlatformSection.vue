<template>
  <section class="our-platform">
    <h4 class="our-platform__subheading">Наша платформа</h4>
    <h2 class="our-platform__heading">
      Crepiks Academy - онлайн платформа для изучения программирования
    </h2>
    <div class="our-platform__grid">
      <card
        class="our-platform__card"
        :icon="structureTreeIcon"
        title="Интуитивный интерфейс"
        paragraph="Простой и функциональный интерфейс будет удобен и взрослым 
и детям"
      />
      <card
        class="our-platform__card"
        :icon="structureTreeIcon"
        title="Интуитивный интерфейс"
        paragraph="Простой и функциональный интерфейс будет удобен и взрослым 
и детям"
      />
      <card
        class="our-platform__card"
        :icon="structureTreeIcon"
        title="Интуитивный интерфейс"
        paragraph="Простой и функциональный интерфейс будет удобен и взрослым 
и детям"
      />
      <card
        class="our-platform__card"
        :icon="structureTreeIcon"
        title="Интуитивный интерфейс"
        paragraph="Простой и функциональный интерфейс будет удобен и взрослым 
и детям"
      />
    </div>
  </section>
</template>

<script>
import PlatformAvantageCard from "./PlatformAdvantageCard";
import structureTreeIcon from "@/assets/icons/structure_tree.svg";

export default {
  components: {
    card: PlatformAvantageCard
  },
  data() {
    return {
      structureTreeIcon
    };
  }
};
</script>

<style scoped>
.our-platform {
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(162, 133, 252, 0.12);
}

.our-platform__subheading {
  margin-bottom: 20px;
  color: #767ead;
  font-size: #767ead;
  font-weight: 700;
  text-transform: uppercase;
}

.our-platform__heading {
  margin-bottom: 64px;
  color: #33334f;
  font-size: 28px;
}

.our-platform__grid {
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.our-platform__card {
  width: 45%;
  margin-bottom: 43px;
}
</style>
