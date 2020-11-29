<template>
  <div class="pay__page">
    <div class="pay__slider">
      <div class="pay__slide" v-if="activeSlide == 1">
        <div class="pay__slide-text">
          <h1 class="pay__slide-heading">Как получить курс?</h1>
          <p class="pay__slide-paragraph">
            Здравствуйте, сейчас мы расскажем вам как получить курс.
          </p>
          <p class="pay__slide-paragraph">
            Пока что оплата происходит через Kaspi, но совсем скоро вы сможете
            приобретать курс прямо на платформе!
          </p>
          <p class="pay__slide-paragraph">
            Нажимайте на кнопку «‎Далее» и узнайте как получить курс!
          </p>
        </div>
        <img
          class="pay__slide-image"
          src="@/assets/images/howPaySlide1.png"
          alt="Оплата через Kaspi"
        />
      </div>

      <div class="pay__slide" v-if="activeSlide == 2">
        <div class="pay__slide-text">
          <h1 class="pay__slide-heading">Свяжитесь с нами</h1>
          <p class="pay__slide-paragraph">
            Первым делом свяжитесь с нами любым удобным способом: Вконтакте,
            WhatsApp, Telegram, Instagram, Почта или СМС и мы ответим вам в
            течении нескольких часов.
          </p>
          <!-- <p class="pay__slide-paragraph">
            Не желаете писать первым? Не проблема, просто оставьте ссылку на ваш
            аккаунт в социальной сети или мобильный номер и мы с вами свяжемся.
          </p> -->
        </div>
        <img
          class="pay__slide-image"
          src="@/assets/images/howPaySlide2.png"
          alt="Оплата через Kaspi"
        />
      </div>

      <div class="pay__slide" v-if="activeSlide == 3">
        <div class="pay__slide-text">
          <h1 class="pay__slide-heading">Проверьте и оплатите</h1>
          <p class="pay__slide-paragraph">
            Вы отправите нам свою почту (которую используете для входа), а мы
            откроем вам доступ к курсу.
          </p>
          <p class="pay__slide-paragraph">
            Убедитесь, что курс активен, проверьте, что все работает и только
            потом можете оплачивать. Вот и всё.
          </p>
          <p class="pay__slide-paragraph">
            А теперь выберите курс и напишите нам!
          </p>
        </div>
        <img
          class="pay__slide-image pay__slide-image-big"
          src="@/assets/images/howPaySlide3.png"
          alt="Оплата через Kaspi"
        />
      </div>

      <div class="pay__slide" v-if="activeSlide == 4">
        <div class="pay__slide-text">
          <h1 class="pay__slide-heading">Контакты</h1>
          <p class="pay__slide-paragraph">
            Используйте любой удобный для вас способ общения:
          </p>
          <div class="pay__slide-links">
            <a
              href="https://wa.me/77078139703"
              class="pay__slide-link pay__slide-link-whatsapp"
              target="_blank"
            >
              <img
                src="@/assets/icons/whatsapp.png"
                alt="WhatsApp"
                class="pay__slide-link-icon"
              />
              WhatsApp
            </a>
            <a
              href="https://t.me/The_Fratres"
              class="pay__slide-link pay__slide-link-telegram"
              target="_blank"
            >
              <img
                src="@/assets/icons/telegram.png"
                alt="Telegram"
                class="pay__slide-link-icon"
              />
              Telegram
            </a>
            <a
              href="https://www.instagram.com/crepiks_academy/"
              class="pay__slide-link pay__slide-link-instagram"
              target="_blank"
            >
              <img
                src="@/assets/icons/instagram.png"
                alt="Instagram"
                class="pay__slide-link-icon"
              />
              Instagram
            </a>
            <a
              href="mailto:crepiks.academy@mail.ru"
              class="pay__slide-link pay__slide-link-email"
              target="_blank"
            >
              <img
                src="@/assets/icons/email.png"
                alt="Почта"
                class="pay__slide-link-icon"
              />
              Почта
            </a>
            <a
              href="tel:87072050716"
              class="pay__slide-link pay__slide-link-number"
            >
              8 (707) 205 07 16
            </a>
          </div>
          <!-- <p class="pay__slide-paragraph">
            Или оставьте ссылку на ваш аккаунт в социальной сети или оставьте
            номер:
          </p>
          <div class="pay__slide-contact">
            <input
              type="text"
              placeholder="Введите ссылку или номер"
              class="pay__slide-input"
            />
            <div class="pay__slide-submit-button">Отправить</div>
          </div> -->
        </div>
        <img
          class="pay__slide-image"
          src="@/assets/images/howPaySlide4.png"
          alt="Оплата через Kaspi"
        />
      </div>

      <div class="pay__slider-buttons">
        <button
          class="pay__slider-button pay__slider-button-next"
          :class="{ 'pay__slider-button-next-no-margin': activeSlide == 4 }"
          v-if="activeSlide !== 1"
          @click="activeSlide--"
        >
          Назад
        </button>
        <button
          class="pay__slider-button"
          v-if="activeSlide !== 4"
          @click="activeSlide++"
        >
          Далее
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSlide: 1
    };
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.pay {
  &__page {
    padding: 0 2%;
    margin: auto;
    width: 100%;
    max-width: 1200px;
    height: auto;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__slider {
    padding: 3% 5%;
    margin-top: 5vh;
    width: 80%;
    height: 600px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    border-radius: 30px;
    background-color: $color-6;
    box-shadow: 7px 7px 7px 0px $color-7;

    &-buttons {
      height: 10%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    &-button {
      padding: 10px 30px;
      color: $color-6;
      font-size: 20px;
      font-weight: 500;
      border: 2px solid $color-2;
      border-radius: 10px;
      background-color: $color-2;
      transition: 200ms ease-in-out;

      &:hover {
        opacity: 0.5;
      }

      &-next {
        margin-right: 20px;
        color: $color-2;
        background-color: $color-6;

        &-no-margin {
          margin: 0;
        }
      }
    }
  }

  &__slide {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &-text {
      padding-top: 50px;
      width: 63%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    &-heading {
      margin-bottom: 40px;
      color: $color-5;
      font-size: 53px;
    }

    &-paragraph {
      margin-bottom: 20px;
      color: $color-5;
      font-size: 25px;
    }

    &-image {
      width: 25%;

      &-big {
        width: 35%;
      }
    }

    &-links {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    &-link {
      margin-right: 20px;
      margin-bottom: 10px;
      padding: 10px 30px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      color: $color-6;
      font-size: 20px;
      font-weight: 500;
      text-decoration: none;
      border-radius: 10px;
      transition: 200ms ease-in-out;
      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }

      &-icon {
        margin-right: 10px;
        height: 30px;
        width: auto;
      }

      &-whatsapp {
        background-color: #00e752;
      }

      &-telegram {
        background-color: #3d8fc7;
      }

      &-instagram {
        background-color: #fe1546;
      }

      &-email {
        background-color: #105bf1;
      }

      &-number {
        color: $color-2;
        border: 2px solid $color-2;
        background-color: $color-6;
      }
    }

    &-contact {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }

    &-input {
      padding: 8px 25px;
      width: 330px;
      box-sizing: border-box;
      color: $color-2;
      font-size: 20px;
      font-weight: 500;
      border: 2px solid $color-2;
      border-right: none;
      border-radius: 10px 0 0 10px;
    }

    &-submit-button {
      padding: 8px 25px;
      color: $color-6;
      font-size: 20px;
      border-radius: 0 10px 10px 0;
      background-color: $color-2;
      transition: 200ms ease-in-out;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
