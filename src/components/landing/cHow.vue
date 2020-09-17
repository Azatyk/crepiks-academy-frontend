<template>
  <div class="landing__how" id="how">
    <h2 class="how__heading" v-prlx.mobile="{ speed: -0.45, fromBottom: true }">
      {{ $t("howTitle") }}
    </h2>
    <div class="how__cards">
      <cHowCard
        v-prlx.mobile="{ speed: -0.4, fromBottom: true }"
        :path="firstStepImage"
        :heading="$t('howFirstCardTitle')"
        :description="$t('howFirstCardDescription')"
      />
      <cHowCard
        v-prlx.mobile="{ speed: -0.5, fromBottom: true }"
        :path="secondStepImage"
        :heading="$t('howSecondCardTitle')"
        :description="$t('howSecondCardDescription')"
      />
      <cHowCard
        v-prlx.mobile="{ speed: -0.6, fromBottom: true }"
        :path="thirdStepImage"
        :heading="$t('howThirdCardTitle')"
        :description="$t('howThirdCardDescription')"
      />
    </div>
  </div>
</template>

<script>
import cHowCard from "@/components/landing/cHowCard";

import firstImage from "@/assets/images/firstStep.svg";
import secondImage from "@/assets/images/secondStep.svg";
import thirdImage from "@/assets/images/thirdStep.svg";

export default {
  components: {
    cHowCard
  },
  data() {
    return {
      firstStepImage: firstImage,
      secondStepImage: secondImage,
      thirdStepImage: thirdImage
    };
  }
};
</script>

<style scoped>
.landing__how {
  margin-bottom: 3%;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.how__heading {
  margin-bottom: 60px;
  font-size: 3.5vw;
  color: #2522a0;
}

.how__cards {
  padding: 0 2%;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 1200px) {
  .how {
    margin-bottom: 0;
  }

  .how__heading {
    margin-bottom: 30px;
  }

  .how__cards {
    padding: 0 10%;
  }
}

@media (max-width: 1024px) {
  .landing__how {
    margin-top: 30%;
  }

  .how__heading {
    margin-bottom: 20px;
    font-size: 7vw;
  }

  .how__cards {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 650px) {
  .landing__how {
    margin-top: 50%;
  }

  .how__heading {
    margin-bottom: 30px;
    font-size: 8.5vw;
  }
}
</style>
