<template>
  <div class="questions">
    <div class="questions-content">
      <h2 class="questions-heading">Остались вопросы?</h2>
      <!-- <cButton text="Спросить" class="questions-button" /> -->
      <div class="questions-links">
        <a
          href="https://wa.me/77078139703"
          class="questions-link questions-link-whatsapp"
          target="_blank"
        >
          <img
            src="@/assets/icons/whatsapp.png"
            alt="WhatsApp"
            class="questions-link-icon"
          />
          WhatsApp
        </a>
        <a
          href="https://t.me/CrepiksAcademyBot"
          class="questions-link questions-link-telegram"
          target="_blank"
        >
          <img
            src="@/assets/icons/telegram.png"
            alt="Telegram"
            class="questions-link-icon"
          />
          Telegram
        </a>
        <a
          href="https://www.instagram.com/crepiks_academy/"
          class="questions-link questions-link-instagram"
          target="_blank"
        >
          <img
            src="@/assets/icons/instagram.png"
            alt="Instagram"
            class="questions-link-icon"
          />
          Instagram
        </a>
        <a
          href="mailto:crepiks.academy@mail.ru"
          class="questions-link questions-link-email"
          target="_blank"
        >
          <img
            src="@/assets/icons/email.png"
            alt="Почта"
            class="questions-link-icon"
          />
          Почта
        </a>
        <a
          href="https://vk.com/public200320088"
          class="questions-link questions-link-vkontakte"
          target="_blank"
        >
          <img
            src="@/assets/icons/vkontakte.png"
            alt="Telegram"
            class="questions-link-icon"
          />
          Вконтакте
        </a>
        <a href="tel:87078139703" class="questions-link questions-link-number">
          8 (707) 813 97 03
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import cButton from "@/components/common/crepiks-button.vue";

export default {
  components: {
    // cButton
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
    align-items: flex-start;
    width: 100%;
  }

  &-heading {
    font-size: 35px;
    color: $dark;
    font-weight: 500;
    width: 700px;
  }

  &-button {
    margin-left: 50px;
    margin-bottom: -5px;
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
    padding: 7px 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    color: $color-6;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    border-radius: 10px;
    transition: 200ms ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }

    &-icon {
      margin-right: 10px;
      height: 20px;
      width: auto;
    }

    &-whatsapp {
      background-color: #00e752;
    }

    &-telegram {
      background-color: #3d8fc7;
    }

    &-vkontakte {
      background-color: #5282b9;
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
}

@media (max-width: 1024px) {
  .questions {
    padding: 10vh 5%;

    &-content {
      flex-direction: column;
    }

    &-heading {
      width: 100%;
    }

    &-links {
      margin-top: 30px;
    }
  }
}

@media (max-width: 720px) {
  .questions {
    &-heading {
      font-size: 25px;
    }
  }
}

@media (max-width: 450px) {
  .questions {
    &-heading {
      font-size: 18px;
    }
  }
}

@media (max-width: 450px) {
  .questions {
    &-link {
      font-size: 11px;
      padding: 5px 10px;
    }

    &-icon {
      height: 15px;
    }
  }
}
</style>
