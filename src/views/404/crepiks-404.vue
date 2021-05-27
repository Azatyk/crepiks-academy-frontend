<template>
  <div class="notFound">
    <div class="notFound-container">
      <div class="notFound-image">
        <img src="@/assets/images/not-found-image.svg" alt="not-found-image" />
      </div>
      <div class="notFound-title">Упс... Страница не найдена!</div>
      <div class="notFound-text">
        Мы не смогли найти такую страницу. Убедитесь, что вы не ошиблись в
        адресе страницы или вернитесь на главную
      </div>
      <cButton text="На главную" class="notFound-button" @click="handleClick" />
    </div>
  </div>
</template>

<script>
import cButton from "@/components/common/crepiks-button";

export default {
  components: {
    cButton
  },
  methods: {
    handleClick() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.notFound {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &-container {
    width: 530px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
  }

  &-image {
    display: flex;
    justify-content: space-around;
  }

  &-title {
    margin-top: 40px;
    text-align: center;
    color: $dark;
    font-size: 30px;
  }

  &-text {
    margin-top: 20px;
    text-align: center;
    width: 80%;
    color: $light-dark;
    font-size: 20px;
  }

  &-button {
    text-align: 30px;
    margin-top: 30px;
  }
}
</style>
