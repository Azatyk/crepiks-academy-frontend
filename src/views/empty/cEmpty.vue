<template>
  <div class="empty__page">
    <div class="content">
      <div class="soon">
        <div class="soon__text">
          <h1 class="soon__heading">Не терпится начать?</h1>
          <div class="soon__description">
            Дай нам пару дней и мы все устроим!
          </div>
        </div>
        <form class="mailing__form form" @submit.prevent="save">
          <div class="form__text">
            <h2 class="form__heading">
              А пока
            </h2>
            <div class="form__description">
              подпишись на нашу email рассылку и будь в курсе всех новостей
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
            <cButton class="form__button" text="Подписаться" :isBold="true" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import cInput from "@/components/common/cInput";
import cButton from "@/components/common/cButton";

export default {
  components: {
    cInput,
    cButton
  },
  data() {
    return {
      userEmail: ""
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
.empty__page {
  height: 100vh;
  width: 100%;
}

.content {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.soon__text {
  margin-bottom: 10%;
}

.soon__heading {
  margin-bottom: 0.5%;
  font-size: 3.5vw;
  color: #34495e;
  text-align: center;
}

.soon__description {
  font-size: 1.7vw;
  color: #516f8c;
  text-align: center;
}

.mailing__form {
  margin: auto;
  height: 11vw;
  width: 82%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f7fc;
  box-shadow: 0 0 10px #0000004d;
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
  margin: 0;
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

@media (max-width: 1024px) {
  .soon__heading {
    font-size: 8vw;
  }

  .soon__description {
    font-size: 3.5vw;
  }

  .mailing__form {
    padding: 5% 0;
    height: auto;
    width: 80%;
  }

  .form__heading {
    font-size: 7vw;
  }

  .form__description {
    font-size: 2.1vw;
  }

  .form__input {
    padding: 0 2vw;
    height: 6vw;
    font-size: 3vw;
  }

  .form__button {
    height: 6vw;
    font-size: 2.5vw;
  }
}

@media (max-width: 700px) {
  .soon__heading {
    font-size: 9vw;
  }

  .soon__description {
    font-size: 4vw;
  }

  .form {
    width: 90%;
  }

  .form__text {
    margin-bottom: 5%;
    width: 100%;
    flex-direction: column;
  }

  .form__heading {
    margin-right: 0;
    margin-bottom: -5%;
    margin-top: -5%;
    font-size: 20vw;
  }

  .form__description {
    width: 80%;
    font-size: 4vw;
    text-align: center;
  }

  .form__functional {
    width: 90%;
    flex-direction: column;
  }

  .form__input {
    padding: 0 3vw;
    margin-right: 0;
    margin-bottom: 5%;
    width: 100%;
    height: 10vw;
    font-size: 4vw;
  }

  .form__button {
    width: 100%;
    height: 10vw;
    font-size: 3.5vw;
  }
}
</style>
