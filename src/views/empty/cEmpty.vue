<template>
  <div class="page">
    <cHeader pageType="common" />
    <div class="content">
      <div class="message">
        <div class="message__text">
          <h1 class="message__heading">Не терпится начать?</h1>
          <div class="message__description">
            Дай нам пару дней и мы все устроим!
          </div>
        </div>
        <form class="mailing__form form">
          <div class="form__text">
            <h2 class="form__heading">
              А пока
            </h2>
            <div class="form__description">
              подпишись на нашу email рассылку и будь в курсе всех новостей
            </div>
          </div>
          <div class="form__functional">
            <cInput class="form__input" type="email" placeholder="Email" />
            <cButton class="form__button" text="Подписаться" :isBold="true" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import cHeader from "@/components/general/cHeader";
import cInput from "@/components/general/cInput";
import cButton from "@/components/general/cButton";

export default {
  components: {
    cHeader,
    cInput,
    cButton
  }
};
</script>

<style scoped>
.page {
  height: 100vh;
  width: 100%;
  background-color: #34495e;
}

.content {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.message {
  width: 50%;
}

.message__text {
  margin-bottom: 10%;
}

.message__heading {
  margin-bottom: 0.5%;
  font-size: 3.5vw;
  color: #f8f7fc;
  text-align: center;
}

.message__description {
  font-size: 1.7vw;
  color: #dbdbdb;
  text-align: center;
}

.mailing__form {
  margin: auto;
  height: 11vw;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f7fc;
  border-radius: 5px;
}

.form__text {
  margin-bottom: 1vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.form__functional {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.form__heading {
  margin-right: 3%;
  font-size: 3vw;
  color: #34495e;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
}

.form__description {
  width: 50%;
  font-size: 1vw;
  color: #516f8c;
  line-height: 1.5;
}

.form__input {
  margin-right: 5%;
  padding: 0 1vw;
  height: 3vw;
  width: 50%;
  font-size: 1vw;
}

.form__button {
  height: 3vw;
  width: 30%;
  font-size: 1vw;
}
</style>
