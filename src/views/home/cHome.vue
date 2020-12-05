<template>
  <div class="home">
    <cMainDashBlock
      :text="mainText"
      :imagePath="mainImage"
      class="home__block"
    />
    <cExtraDashBlock
      :text="firstText"
      :imagePath="firstExtraImage"
      class="home__block"
    />
    <cExtraDashBlock
      :text="secondText"
      :imagePath="secondExtraImage"
      class="home__block"
      @button-clicked="openNotification()"
    />
  </div>
</template>

<script>
import cMainDashBlock from "@/components/home/cMainDashBlock.vue";
import cExtraDashBlock from "@/components/home/cExtraDashBlock.vue";
import virusImage from "@/assets/images/dashBoardVirus.png";
import howGetCourseImage from "@/assets/images/dashBoardQuestion.png";
import motivationImage from "@/assets/images/dashBoardLightning.png";

export default {
  components: {
    cMainDashBlock,
    cExtraDashBlock
  },

  data() {
    return {
      mainImage: virusImage,
      firstExtraImage: howGetCourseImage,
      secondExtraImage: motivationImage,
      mainText: {
        title: "Карантин и курсы",
        description:
          "Из-за такой непростой ситуации в стране, мы сделали курсы программирования доступными каждому. Узнайте больше информации на странице курсов.",
        buttonText: "Перейти к курсам",
        buttonPath: "/app/courses"
      },
      firstText: {
        title: "Как получить курс?",
        description:
          "Узнайте как получить доступ к курса с помощью подробной инструкции!",
        buttonText: "К инструкции",
        buttonPath: "/app/how-get"
      },
      secondText: {
        title: "Заряд мотивации и шутки",
        description:
          "Получите заряд мотивации или взгляните на программистские анекдоты)",
        buttonText: "Мотивация",
        secondButtonText: "Шутка"
      }
    };
  },

  methods: {
    openNotification(
      position = "top-center",
      color = null,
      title = "Ещё не готово :(",
      text = "Пару дней и это будет работать",
      duration = 5000
    ) {
      this.$vs.notification({
        duration,
        position,
        color,
        title,
        text
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.home {
  padding: 0 2%;
  margin: auto;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1200px) {
    &-page {
      padding: 0 5%;
    }
  }
}
</style>
