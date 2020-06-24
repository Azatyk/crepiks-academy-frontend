<template>
  <section class="mailing">
    <form @submit.prevent="save" class="mailing__form form">
      <div class="form__text">
        <h2 class="form__heading">Узнавайте обо всем первым</h2>
        <div class="form__description">
          Подпишитесь на нашу email рассылку, чтобы быть в курсе всех обновлений
        </div>
      </div>
      <div class="form__functional">
        <cInput
          v-model="userEmail"
          class="form__input"
          type="email"
          placeholder="Email"
          id="email"
        />
        <a-button @click="save" type="primary" class="form__button"
          >Подписаться</a-button
        >
      </div>
    </form>
  </section>
</template>

<script>
import cInput from "@/components/common/cInput";
import { Button } from "ant-design-vue";

export default {
  components: {
    cInput,
    "a-button": Button
  },
  data() {
    return {
      userEmail: "",
      messageText: ""
    };
  },
  methods: {
    save() {
      let email = this.userEmail;
      this.$store.dispatch("saveEmail", email);
    }
  }
};
</script>

<style scoped>
.mailing {
  height: 40vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f7fc;
  background-image: url("../../assets/images/mailingSpot.svg");
  background-size: 60%;
  background-position: bottom right;
  background-repeat: no-repeat;
}

.mailing__form {
  height: 13vw;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f7fc;
  box-shadow: 0 0 10px 0px #00000080;
  border-radius: 5px;
}

.form__text {
  margin-bottom: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  margin-bottom: 0;
  font-size: 2.2vw;
  color: #34495e;
  font-weight: 500;
}

.form__description {
  font-size: 0.82vw;
  color: #516f8c;
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
  font-size: 1.1vw;
}

@media (max-width: 1024px) {
  .mailing {
    padding-bottom: 15vh;
    height: 40vh;
    background-image: none;
  }

  .mailing__form {
    height: 25vw;
    width: 65%;
  }

  .form__heading {
    font-size: 4vw;
  }

  .form__description {
    font-size: 1.5vw;
  }

  .form__input {
    padding: 1vw 1.5vw;
    height: 5vw;
    font-size: 2vw;
  }

  .form__button {
    height: 5vw;
    font-size: 2vw;
  }
}
</style>
