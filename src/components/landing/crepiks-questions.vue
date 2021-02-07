<template>
  <div class="questions">
    <div class="questions-content">
      <h2 class="questions-heading">Остались вопросы?</h2>
      <cButton text="Спросить" class="questions-button" />
    </div>
  </div>
</template>

<script>
import cButton from "@/components/common/crepiks-button.vue";

export default {
  components: {
    cButton
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.questions {
  background-color: $background;
  padding: 10vh 12%;
  box-sizing: border-box;

  &-content {
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &-heading {
    font-size: 35px;
    color: $dark;
    font-weight: 500;
  }

  &-button {
    margin-left: 50px;
    margin-bottom: -5px;
  }
}

@media (max-width: 1000px) {
  .questions {
    padding: 10vh 5%;
  }
}

@media (max-width: 720px) {
  .questions {
    &-heading {
      font-size: 25px;
    }
  }
}
</style>
