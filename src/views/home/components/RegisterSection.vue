<template>
  <section class="register-section">
    <div class="register-section__text-block">
      <h4 class="register-section__subheading">Лучший способ учиться</h4>
      <h1 class="register-section__heading">
        Учись программировать вместе с нами
      </h1>
      <p class="register-section__paragraph">
        Приобрети навыки 21 века с помощью веселых и увлекательных интерактивных
        курсов
      </p>
      <div class="register-section__buttons">
        <router-link
          to="#"
          class="register-section__button register-section__button_filled"
          >Курсы</router-link
        >
        <router-link to="#" class="register-section__button"
          >Подписка</router-link
        >
      </div>
    </div>
    <register-form class="register-section__form" />
  </section>
</template>

<script>
import RegisterForm from "./RegisterForm";

export default {
  components: {
    "register-form": RegisterForm
  }
};
</script>

<style scoped>
.register-section {
  width: 80%;
  margin: auto;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
}

.register-section__form {
  width: 35%;
}

.register-section__text-block {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.register-section__subheading {
  width: 270px;
  padding-bottom: 5px;
  color: #a285fc;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  border-bottom: 2px solid #a285fc;
}

.register-section__heading {
  margin: 20px 0;
  color: #33334f;
  font-size: 48px;
  font-weight: 700;
}

.register-section__paragraph {
  width: 80%;
  color: #767ead;
  font-size: 18px;
  font-weight: 400;
}

.register-section__buttons {
  margin-top: 40px;
}

.register-section__button {
  margin-right: 29px;
  padding: 15px 31px;
  color: #6078ff;
  font-size: 24px;
  font-weight: 400;
  text-decoration: none;
  background-color: #f8f7fc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.register-section__button.register-section__button_filled {
  color: #f8f7fc;
  background-color: #6078ff;
}
</style>
